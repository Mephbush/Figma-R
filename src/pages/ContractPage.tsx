import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { ContractForm } from '../components/ContractForm';
import { FileText, Shield, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';

export const ContractPage: React.FC = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: FileText,
      title: language === 'ar' ? 'عقد احترافي' : 'Professional Contract',
      description: language === 'ar' 
        ? 'عقد شامل يتضمن جميع تفاصيل المشروع والشروط القانونية' 
        : 'Comprehensive contract including all project details and legal terms',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'تحقق آمن' : 'Secure Verification',
      description: language === 'ar' 
        ? 'نظام تحقق متقدم عبر رمز OTP. في وضع التطوير، افتح Console (F12) لرؤية الرمز' 
        : 'Advanced OTP verification system. In dev mode, check Console (F12) for the code',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'ملف PDF فوري' : 'Instant PDF',
      description: language === 'ar' 
        ? 'احصل على نسخة PDF من العقد فوراً بعد التوقيع' 
        : 'Get a PDF copy of the contract instantly after signing',
    },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-16 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-300 via-blue-500 to-orange-500 bg-clip-text text-transparent">
            {t('contract.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contract.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-500/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Contract Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContractForm />
        </motion.div>
      </div>
    </div>
  );
};