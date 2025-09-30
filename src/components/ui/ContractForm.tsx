import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Card } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { toast } from 'sonner@2.0.3';
import { Loader2, Mail, CheckCircle2, FileText } from 'lucide-react';
import { projectId, publicAnonKey } from '../../integrations/supabase/info';
import { ContractPreview } from './ContractPreview';

interface ContractData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCompany?: string;
  serviceType: string;
  projectName: string;
  projectDescription: string;
  features: string;
  limitations: string;
  projectDuration: string;
  projectCost: string;
  startDate: string;
  deliverables: string;
  paymentTerms: string;
  revisions: string;
  additionalTerms?: string;
  termsAgreed: boolean;
}

type Step = 'form' | 'preview' | 'verification' | 'success';

export const ContractForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>('form');
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [contractId, setContractId] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  
  const [formData, setFormData] = useState<ContractData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientCompany: '',
    serviceType: '',
    projectName: '',
    projectDescription: '',
    features: '',
    limitations: '',
    projectDuration: '',
    projectCost: '',
    startDate: '',
    deliverables: '',
    paymentTerms: '',
    revisions: '3',
    additionalTerms: '',
    termsAgreed: false,
  });

  const handleInputChange = (field: keyof ContractData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.clientName || !formData.clientEmail || !formData.clientPhone) {
      toast.error(language === 'ar' ? 'يرجى ملء معلومات العميل' : 'Please fill in client information');
      return false;
    }
    if (!formData.serviceType || !formData.projectName || !formData.projectDescription) {
      toast.error(language === 'ar' ? 'يرجى ملء تفاصيل المشروع' : 'Please fill in project details');
      return false;
    }
    if (!formData.termsAgreed) {
      toast.error(language === 'ar' ? 'يرجى الموافقة على الشروط والأحكام' : 'Please agree to terms and conditions');
      return false;
    }
    return true;
  };

  // Move to preview step
  const handleContinueToPreview = () => {
    if (!validateForm()) return;
    setStep('preview');
  };

  // Confirm preview and send verification
  const handleConfirmPreview = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8bb3c8fe/contract/send-verification`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email: formData.clientEmail,
            language,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Show appropriate message based on email status
        if (data.emailSent) {
          toast.success(t('contract.verificationSent'));
        } else {
          toast.warning(
            language === 'ar' 
              ? 'رمز التحقق جاهز. تحقق من Console (F12)' 
              : 'Verification code ready. Check Console (F12)',
            { duration: 8000 }
          );
        }
        
        // In development mode, show the code in console and as notification
        if (data.devCode) {
          console.log('🔐 VERIFICATION CODE:', data.devCode);
          console.log(`📧 Email: ${formData.clientEmail}`);
          console.log('⏰ Valid for: 10 minutes');
          
          // Show prominent notification
          toast.success(
            language === 'ar' 
              ? `رمز التحقق: ${data.devCode}` 
              : `Verification Code: ${data.devCode}`,
            { 
              duration: 15000,
              description: language === 'ar' 
                ? 'انسخ هذا الرمز (صالح لمدة 10 دقائق)' 
                : 'Copy this code (valid for 10 minutes)'
            }
          );
        }
        
        setStep('verification');
      } else {
        throw new Error(data.error || 'Failed to send verification');
      }
    } catch (error) {
      console.error('Error sending verification:', error);
      toast.error(
        language === 'ar' 
          ? 'خطأ في إرسال رمز التحقق. تحقق من Console للمزيد من التفاصيل.' 
          : 'Error sending verification code. Check Console for details.',
        { duration: 5000 }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSendVerification = handleConfirmPreview;

  const handleVerifyAndSubmit = async () => {
    if (!verificationCode) {
      toast.error(language === 'ar' ? 'يرجى إدخال رمز التحقق' : 'Please enter verification code');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8bb3c8fe/contract/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            ...formData,
            verificationCode,
            language,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setContractId(data.contractId);
        setPdfUrl(data.pdfUrl);
        toast.success(t('contract.success'));
        setStep('success');
      } else if (data.error === 'Invalid verification code') {
        toast.error(t('contract.verificationFailed'));
      } else {
        throw new Error(data.error || 'Failed to submit contract');
      }
    } catch (error) {
      console.error('Error submitting contract:', error);
      toast.error(t('contract.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!pdfUrl) return;
    
    try {
      // Open contract in new window (user can print to PDF)
      window.open(pdfUrl, '_blank');
      toast.success(language === 'ar' ? 'تم فتح العقد في نافذة جديدة' : 'Contract opened in new window');
    } catch (error) {
      console.error('Error opening contract:', error);
      toast.error(language === 'ar' ? 'خطأ في فتح الملف' : 'Error opening file');
    }
  };

  return (
    <Card className="max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-border/50">
      <AnimatePresence mode="wait">
        {step === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Client Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-primary">{t('contract.clientInfo')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName">{t('contract.clientName')}</Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder={language === 'ar' ? 'أدخل الاسم الكامل' : 'Enter full name'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientEmail">{t('contract.clientEmail')}</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    value={formData.clientEmail}
                    onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                    placeholder={language === 'ar' ? 'example@email.com' : 'example@email.com'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientPhone">{t('contract.clientPhone')}</Label>
                  <Input
                    id="clientPhone"
                    value={formData.clientPhone}
                    onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                    placeholder={language === 'ar' ? '+966 XX XXX XXXX' : '+1 XXX XXX XXXX'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientCompany">{language === 'ar' ? 'الشركة (اختياري)' : 'Company (Optional)'}</Label>
                  <Input
                    id="clientCompany"
                    value={formData.clientCompany}
                    onChange={(e) => handleInputChange('clientCompany', e.target.value)}
                    placeholder={language === 'ar' ? 'اسم الشركة' : 'Company name'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serviceType">{t('contract.serviceType')}</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contract.selectService')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">{t('contract.studio')}</SelectItem>
                      <SelectItem value="web">{t('contract.web')}</SelectItem>
                      <SelectItem value="marketing">{t('contract.marketing')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-primary">{t('contract.projectDetails')}</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName">{t('contract.projectName')}</Label>
                  <Input
                    id="projectName"
                    value={formData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    placeholder={language === 'ar' ? 'اسم المشروع' : 'Project name'}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">{t('contract.projectDescription')}</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    placeholder={language === 'ar' ? 'صف مشروعك بالتفصيل...' : 'Describe your project in detail...'}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="features">{t('contract.features')}</Label>
                  <Textarea
                    id="features"
                    value={formData.features}
                    onChange={(e) => handleInputChange('features', e.target.value)}
                    placeholder={language === 'ar' ? 'اذكر الميزات المطلوبة...' : 'List required features...'}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="limitations">{t('contract.limitations')}</Label>
                  <Textarea
                    id="limitations"
                    value={formData.limitations}
                    onChange={(e) => handleInputChange('limitations', e.target.value)}
                    placeholder={language === 'ar' ? 'اذكر أي قيود أو محددات...' : 'List any limitations or constraints...'}
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectDuration">{t('contract.duration')}</Label>
                    <Input
                      id="projectDuration"
                      value={formData.projectDuration}
                      onChange={(e) => handleInputChange('projectDuration', e.target.value)}
                      placeholder={language === 'ar' ? '8 أسابيع' : '8 weeks'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectCost">{t('contract.budget')}</Label>
                    <Input
                      id="projectCost"
                      type="number"
                      value={formData.projectCost}
                      onChange={(e) => handleInputChange('projectCost', e.target.value)}
                      placeholder="5000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">{t('contract.startDate')}</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliverables">{t('contract.deliverables')}</Label>
                  <Textarea
                    id="deliverables"
                    value={formData.deliverables}
                    onChange={(e) => handleInputChange('deliverables', e.target.value)}
                    placeholder={language === 'ar' ? 'اذكر المخرجات المتوقعة...' : 'List expected deliverables...'}
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="paymentTerms">{t('contract.paymentTerms')}</Label>
                    <Input
                      id="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                      placeholder={language === 'ar' ? '50% مقدم، 50% عند التسليم' : '50% upfront, 50% on delivery'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="revisions">{t('contract.revisions')}</Label>
                    <Input
                      id="revisions"
                      type="number"
                      value={formData.revisions}
                      onChange={(e) => handleInputChange('revisions', e.target.value)}
                      placeholder="3"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalTerms">{language === 'ar' ? 'شروط إضافية (اختياري)' : 'Additional Terms (Optional)'}</Label>
                  <Textarea
                    id="additionalTerms"
                    value={formData.additionalTerms}
                    onChange={(e) => handleInputChange('additionalTerms', e.target.value)}
                    placeholder={language === 'ar' ? 'أي شروط أو ملاحظات إضافية...' : 'Any additional terms or notes...'}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-primary">{t('contract.terms')}</h2>
              <Card className="p-6 bg-muted/30 space-y-3 max-h-60 overflow-y-auto">
                <p className="font-medium">{t('contract.termsText')}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t('contract.term1')}</li>
                  <li>{t('contract.term2')}</li>
                  <li>{t('contract.term3')}</li>
                  <li>{t('contract.term4')}</li>
                  <li>{t('contract.term5')}</li>
                  <li>{t('contract.term6')}</li>
                  <li>{t('contract.term7')}</li>
                  <li>{t('contract.term8')}</li>
                </ul>
              </Card>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="termsAgreed"
                  checked={formData.termsAgreed}
                  onCheckedChange={(checked) => handleInputChange('termsAgreed', checked as boolean)}
                />
                <Label htmlFor="termsAgreed" className="cursor-pointer">
                  {t('contract.termsAgree')}
                </Label>
              </div>
            </div>

            <Button
              onClick={handleContinueToPreview}
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-400 hover:to-blue-600"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('loading')}
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  {language === 'ar' ? 'معاينة العقد' : 'Preview Contract'}
                </>
              )}
            </Button>
          </motion.div>
        )}

        {step === 'preview' && (
          <ContractPreview
            formData={formData}
            language={language}
            onEdit={() => setStep('form')}
            onConfirm={handleConfirmPreview}
            loading={loading}
          />
        )}

        {step === 'verification' && (
          <motion.div
            key="verification"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-500/20 flex items-center justify-center">
                <Mail className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-medium">{t('contract.verification')}</h2>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? `تم إرسال رمز التحقق إلى ${formData.clientEmail}` 
                : `Verification code sent to ${formData.clientEmail}`}
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="verificationCode">{t('contract.verificationCode')}</Label>
                <Input
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="000000"
                  className="text-center text-2xl tracking-widest"
                  maxLength={6}
                />
                <p className="text-xs text-muted-foreground text-center">
                  {language === 'ar' 
                    ? 'افتح Console (F12) لرؤية الرمز في وضع التطوير' 
                    : 'Check Console (F12) to see code in development mode'}
                </p>
              </div>
              <Button
                onClick={handleVerifyAndSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-400 hover:to-blue-600"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('loading')}
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    {t('contract.submitContract')}
                  </>
                )}
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleSendVerification}
                  disabled={loading}
                  className="flex-1"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {language === 'ar' ? 'إعادة إرسال' : 'Resend'}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setStep('preview')}
                  disabled={loading}
                  className="flex-1"
                >
                  {language === 'ar' ? 'رجوع للمعاينة' : 'Back to Preview'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center py-8"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </motion.div>
            </div>
            <h2 className="text-3xl font-medium text-green-500">{t('contract.success')}</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              {language === 'ar' 
                ? 'تم إنشاء العقد بنجاح. يمكنك عرضه وطباعته كملف PDF من المتصفح.' 
                : 'Contract created successfully. You can view and print it as PDF from your browser.'}
            </p>
            <div className="bg-muted/30 p-4 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-2">
                {language === 'ar' ? 'رقم العقد' : 'Contract ID'}
              </p>
              <p className="font-mono text-primary">{contractId}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-400 hover:to-blue-600"
                size="lg"
              >
                <FileText className="mr-2 h-4 w-4" />
                {t('contract.downloadPDF')}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setStep('form');
                  setFormData({
                    clientName: '',
                    clientEmail: '',
                    clientPhone: '',
                    clientCompany: '',
                    serviceType: '',
                    projectName: '',
                    projectDescription: '',
                    features: '',
                    limitations: '',
                    projectDuration: '',
                    projectCost: '',
                    startDate: '',
                    deliverables: '',
                    paymentTerms: '',
                    revisions: '3',
                    additionalTerms: '',
                    termsAgreed: false,
                  });
                  setVerificationCode('');
                  setContractId('');
                  setPdfUrl('');
                }}
                size="lg"
              >
                <FileText className="mr-2 h-4 w-4" />
                {language === 'ar' ? 'عقد جديد' : 'New Contract'}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};