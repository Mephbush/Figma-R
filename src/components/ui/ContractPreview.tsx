import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, CheckCircle2, Edit } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

interface ContractPreviewProps {
  formData: any;
  language: string;
  onEdit: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export function ContractPreview({ formData, language, onEdit, onConfirm, loading = false }: ContractPreviewProps) {
  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        previewTitle: 'Contract Preview',
        previewSubtitle: 'Please review the contract details before signing',
        clientInfo: 'Client Information',
        projectDetails: 'Project Details',
        financialTerms: 'Financial Terms',
        timeline: 'Timeline',
        serviceType: 'Service Type',
        projectName: 'Project Name',
        projectDescription: 'Project Description',
        features: 'Features',
        limitations: 'Limitations',
        deliverables: 'Deliverables',
        revisions: 'Number of Revisions',
        cost: 'Total Cost',
        payment: 'Payment Terms',
        duration: 'Project Duration',
        startDate: 'Start Date',
        terms: 'Terms & Conditions',
        editContract: 'Edit Contract',
        continueToSign: 'Continue to Signature',
        printPreview: 'Print Preview',
      },
      ar: {
        previewTitle: 'معاينة العقد',
        previewSubtitle: 'يرجى مراجعة تفاصيل العقد قبل التوقيع',
        clientInfo: 'معلومات العميل',
        projectDetails: 'تفاصيل المشروع',
        financialTerms: 'الشروط المالية',
        timeline: 'الجدول الزمني',
        serviceType: 'نوع الخدمة',
        projectName: 'اسم المشروع',
        projectDescription: 'وصف المشروع',
        features: 'المميزات',
        limitations: 'القيود',
        deliverables: 'المخرجات',
        revisions: 'عدد المراجعات',
        cost: 'التكلفة الإجمالية',
        payment: 'شروط الدفع',
        duration: 'مدة المشروع',
        startDate: 'تاريخ البدء',
        terms: 'الشروط والأحكام',
        editContract: 'تعديل العقد',
        continueToSign: 'المتابعة للتوقيع',
        printPreview: 'طباعة المعاينة',
      },
    };
    return translations[language]?.[key] || key;
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = generateContractHTML(formData, language);
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-500/20 flex items-center justify-center">
            <FileText className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-medium">{t('previewTitle')}</h2>
        <p className="text-muted-foreground">{t('previewSubtitle')}</p>
      </div>

      {/* Contract Preview */}
      <Card className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
        {/* Client Information */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-primary border-b border-border pb-2">
            {t('clientInfo')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">{language === 'ar' ? 'الاسم:' : 'Name:'}</span>
              <span className="ml-2 font-medium">{formData.clientName}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{language === 'ar' ? 'البريد:' : 'Email:'}</span>
              <span className="ml-2 font-medium">{formData.clientEmail}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{language === 'ar' ? 'الهاتف:' : 'Phone:'}</span>
              <span className="ml-2 font-medium">{formData.clientPhone}</span>
            </div>
            {formData.clientCompany && (
              <div>
                <span className="text-muted-foreground">{language === 'ar' ? 'الشركة:' : 'Company:'}</span>
                <span className="ml-2 font-medium">{formData.clientCompany}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-primary border-b border-border pb-2">
            {t('projectDetails')}
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-muted-foreground block mb-1">{t('serviceType')}:</span>
              <span className="font-medium">{formData.serviceType}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">{t('projectName')}:</span>
              <span className="font-medium">{formData.projectName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">{t('projectDescription')}:</span>
              <p className="font-medium whitespace-pre-wrap">{formData.projectDescription}</p>
            </div>
            {formData.features && (
              <div>
                <span className="text-muted-foreground block mb-1">{t('features')}:</span>
                <p className="font-medium whitespace-pre-wrap">{formData.features}</p>
              </div>
            )}
            {formData.limitations && (
              <div>
                <span className="text-muted-foreground block mb-1">{t('limitations')}:</span>
                <p className="font-medium whitespace-pre-wrap">{formData.limitations}</p>
              </div>
            )}
            {formData.deliverables && (
              <div>
                <span className="text-muted-foreground block mb-1">{t('deliverables')}:</span>
                <p className="font-medium whitespace-pre-wrap">{formData.deliverables}</p>
              </div>
            )}
          </div>
        </div>

        {/* Financial Terms */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-primary border-b border-border pb-2">
            {t('financialTerms')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block mb-1">{t('cost')}:</span>
              <span className="font-medium text-lg">${formData.projectCost}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">{t('payment')}:</span>
              <span className="font-medium">{formData.paymentTerms}</span>
            </div>
            {formData.revisions && (
              <div>
                <span className="text-muted-foreground block mb-1">{t('revisions')}:</span>
                <span className="font-medium">{formData.revisions}</span>
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-primary border-b border-border pb-2">
            {t('timeline')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block mb-1">{t('duration')}:</span>
              <span className="font-medium">{formData.projectDuration}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">{t('startDate')}:</span>
              <span className="font-medium">{formData.startDate}</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        {formData.additionalTerms && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-primary border-b border-border pb-2">
              {t('terms')}
            </h3>
            <p className="text-sm whitespace-pre-wrap">{formData.additionalTerms}</p>
          </div>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={onEdit}
          disabled={loading}
          className="flex-1"
        >
          <Edit className="mr-2 h-4 w-4" />
          {t('editContract')}
        </Button>
        <Button
          variant="outline"
          onClick={handlePrint}
          disabled={loading}
          className="flex-1"
        >
          <Download className="mr-2 h-4 w-4" />
          {t('printPreview')}
        </Button>
        <Button
          onClick={onConfirm}
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-cyan-300 to-blue-500 hover:from-cyan-400 hover:to-blue-600"
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          {t('continueToSign')}
        </Button>
      </div>
    </motion.div>
  );
}

// Generate HTML for contract (same as backend)
function generateContractHTML(formData: any, language: string): string {
  const isArabic = language === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';
  const align = isArabic ? 'right' : 'left';

  return `
    <!DOCTYPE html>
    <html dir="${dir}">
    <head>
      <meta charset="UTF-8">
      <title>${isArabic ? 'عقد عمل - VisCend' : 'Work Contract - VisCend'}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          direction: ${dir};
          text-align: ${align};
          padding: 40px;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.6;
          color: #333;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #00e5ff;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 32px;
          font-weight: bold;
          background: linear-gradient(135deg, #00e5ff, #2196f3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }
        .section {
          margin-bottom: 30px;
          page-break-inside: avoid;
        }
        .section-title {
          color: #00e5ff;
          font-size: 20px;
          font-weight: 600;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .field {
          margin-bottom: 12px;
        }
        .field-label {
          font-weight: 600;
          color: #555;
          display: inline-block;
          min-width: 150px;
        }
        .field-value {
          color: #000;
        }
        .terms {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }
        .terms-list {
          list-style: decimal;
          padding-${align}: 20px;
        }
        .terms-list li {
          margin-bottom: 10px;
        }
        .signature-section {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }
        .signature-box {
          flex: 1;
          border-top: 2px solid #333;
          padding-top: 10px;
          text-align: center;
        }
        .footer {
          margin-top: 50px;
          text-align: center;
          color: #888;
          font-size: 12px;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        @media print {
          body { padding: 20px; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">VisCend</div>
        <p>${isArabic ? 'عقد تقديم خدمات' : 'Service Agreement Contract'}</p>
        <p style="font-size: 14px; color: #666;">
          ${isArabic ? 'تاريخ الإصدار' : 'Issue Date'}: ${new Date().toLocaleDateString(isArabic ? 'ar-SA' : 'en-US')}
        </p>
      </div>

      <!-- Client Information -->
      <div class="section">
        <h2 class="section-title">${isArabic ? 'معلومات العميل' : 'Client Information'}</h2>
        <div class="field">
          <span class="field-label">${isArabic ? 'الاسم:' : 'Name:'}</span>
          <span class="field-value">${formData.clientName}</span>
        </div>
        <div class="field">
          <span class="field-label">${isArabic ? 'البريد الإلكتروني:' : 'Email:'}</span>
          <span class="field-value">${formData.clientEmail}</span>
        </div>
        <div class="field">
          <span class="field-label">${isArabic ? 'رقم الهاتف:' : 'Phone:'}</span>
          <span class="field-value">${formData.clientPhone}</span>
        </div>
        ${formData.clientCompany ? `
        <div class="field">
          <span class="field-label">${isArabic ? 'الشركة:' : 'Company:'}</span>
          <span class="field-value">${formData.clientCompany}</span>
        </div>
        ` : ''}
      </div>

      <!-- Project Details -->
      <div class="section">
        <h2 class="section-title">${isArabic ? 'تفاصيل المشروع' : 'Project Details'}</h2>
        <div class="field">
          <span class="field-label">${isArabic ? 'نوع الخدمة:' : 'Service Type:'}</span>
          <span class="field-value">${formData.serviceType}</span>
        </div>
        <div class="field">
          <span class="field-label">${isArabic ? 'اسم المشروع:' : 'Project Name:'}</span>
          <span class="field-value">${formData.projectName}</span>
        </div>
        <div class="field">
          <span class="field-label">${isArabic ? 'الوصف:' : 'Description:'}</span>
          <div class="field-value" style="margin-top: 8px; white-space: pre-wrap;">${formData.projectDescription}</div>
        </div>
        ${formData.features ? `
        <div class="field">
          <span class="field-label">${isArabic ? 'المميزات:' : 'Features:'}</span>
          <div class="field-value" style="margin-top: 8px; white-space: pre-wrap;">${formData.features}</div>
        </div>
        ` : ''}
        ${formData.limitations ? `
        <div class="field">
          <span class="field-label">${isArabic ? 'القيود:' : 'Limitations:'}</span>
          <div class="field-value" style="margin-top: 8px; white-space: pre-wrap;">${formData.limitations}</div>
        </div>
        ` : ''}
        ${formData.deliverables ? `
        <div class="field">
          <span class="field-label">${isArabic ? 'المخرجات:' : 'Deliverables:'}</span>
          <div class="field-value" style="margin-top: 8px; white-space: pre-wrap;">${formData.deliverables}</div>
        </div>
        ` : ''}
      </div>

      <!-- Financial Terms -->
      <div class="section">
        <h2 class="section-title">${isArabic ? 'الشروط المالية' : 'Financial Terms'}</h2>
        <div class="field">
          <span class="field-label">${isArabic ? 'التكلفة الإجمالية:' : 'Total Cost:'}</span>
          <span class="field-value" style="font-size: 18px; font-weight: bold;">$${formData.projectCost}</span>
        </div>
        <div class="field">
          <span class="field-label">${isArabic ? 'شروط الدفع:' : 'Payment Terms:'}</span>
          <span class="field-value">${formData.paymentTerms}</span>
        </div>
        ${formData.revisions ? `
        <div class="field">
          <span class="field-label">${isArabic ? 'عدد المراجعات:' : 'Number of Revisions:'}</span>
          <span class="field-value">${formData.revisions}</span>
        </div>
        ` : ''}
      </div>

      <!-- Timeline -->
      <div class="section">
        <h2 class="section-title">${isArabic ? 'الجدول الزمني' : 'Timeline'}</h2>
        <div class="field">
          <span class="field-label">${isArabic ? 'مدة المشروع:' : 'Project Duration:'}</span>
          <span class="field-value">${formData.projectDuration}</span>
        </div>
        <div class="field">
          <span class="field-label">${isArabic ? 'تاريخ البدء:' : 'Start Date:'}</span>
          <span class="field-value">${formData.startDate}</span>
        </div>
      </div>

      <!-- Terms & Conditions -->
      <div class="section">
        <h2 class="section-title">${isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}</h2>
        <div class="terms">
          <ol class="terms-list">
            <li>${isArabic ? 'يلتزم الطرف الأول (VisCend) بتقديم الخدمات المتفق عليها وفق المواصفات المذكورة.' : 'The first party (VisCend) commits to providing the agreed services according to the mentioned specifications.'}</li>
            <li>${isArabic ? 'يلتزم الطرف الثاني (العميل) بتوفير جميع المتطلبات والمعلومات اللازمة لإنجاز المشروع.' : 'The second party (Client) commits to providing all necessary requirements and information to complete the project.'}</li>
            <li>${isArabic ? 'يتم الدفع وفق الشروط المتفق عليها في القسم المالي.' : 'Payment shall be made according to the agreed terms in the financial section.'}</li>
            <li>${isArabic ? 'أي تعديلات على نطاق العمل قد تؤدي إلى تعديل التكلفة والمدة الزمنية.' : 'Any modifications to the scope of work may result in adjustments to cost and timeline.'}</li>
            <li>${isArabic ? 'جميع حقوق الملكية الفكرية للعمل المنجز تنتقل للعميل بعد استكمال الدفع.' : 'All intellectual property rights of the completed work transfer to the client upon full payment.'}</li>
            ${formData.additionalTerms ? `<li style="white-space: pre-wrap;">${formData.additionalTerms}</li>` : ''}
          </ol>
        </div>
      </div>

      <!-- Signatures -->
      <div class="signature-section">
        <div class="signature-box">
          <p>${isArabic ? 'توقيع العميل' : 'Client Signature'}</p>
          <p style="font-size: 12px; color: #666; margin-top: 5px;">${formData.clientName}</p>
        </div>
        <div class="signature-box">
          <p>${isArabic ? 'توقيع VisCend' : 'VisCend Signature'}</p>
          <p style="font-size: 12px; color: #666; margin-top: 5px;">VisCend Studio</p>
        </div>
      </div>

      <div class="footer">
        <p><strong>VisCend</strong> - ${isArabic ? 'رواد الإبداع البصري والتطوير الرقمي' : 'Pioneers of Visual Innovation & Digital Excellence'}</p>
        <p>${isArabic ? 'هذا العقد موقع رقمياً ومعتمد بموجب نظام التحقق الإلكتروني' : 'This contract is digitally signed and verified through electronic verification system'}</p>
      </div>
    </body>
    </html>
  `;
}