import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { 
  Code, 
  Database, 
  Shield, 
  Zap,
  Globe,
  Smartphone,
  Search,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export const WebExpertiseSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('frontend');

  const webTechnologies = {
    frontend: {
      title: language === 'ar' ? 'الواجهة الأمامية' : 'Frontend Development',
      description: language === 'ar' 
        ? 'نطور واجهات مستخدم تفاعلية وحديثة تقدم تجربة مستخدم استثنائية'
        : 'We develop interactive and modern user interfaces that deliver exceptional user experience',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      technologies: [
        { name: 'React.js', rating: 'Expert', description: 'مكتبة JavaScript متقدمة' },
        { name: 'Next.js', rating: 'Expert', description: 'إطار عمل React للإنتاج' },
        { name: 'TypeScript', rating: 'Advanced', description: 'JavaScript مع الأنواع' },
        { name: 'Tailwind CSS', rating: 'Expert', description: 'CSS إطار عمل حديث' },
        { name: 'Motion/Framer', rating: 'Advanced', description: 'مكتبة الرسوم المتحركة' }
      ],
      features: language === 'ar' ? [
        'تصميم متجاوب عبر جميع الأجهزة',
        'تحسين الأداء والسرعة',
        'تجربة مستخدم متقدمة',
        'إدارة الحالة المتقدمة',
        'اختبارات شاملة'
      ] : [
        'Responsive design across all devices',
        'Performance optimization',
        'Advanced user experience',
        'Advanced state management',
        'Comprehensive testing'
      ]
    },
    backend: {
      title: language === 'ar' ? 'الواجهة الخلفية' : 'Backend Development',
      description: language === 'ar'
        ? 'خوادم قوية وآمنة مع واجهات برمجة تطبيقات متقدمة لدعم تطبيقاتك'
        : 'Powerful and secure servers with advanced APIs to support your applications',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      technologies: [
        { name: 'Node.js', rating: 'Expert', description: 'بيئة JavaScript للخادم' },
        { name: 'Python/Django', rating: 'Advanced', description: 'إطار عمل Python المتقدم' },
        { name: 'PostgreSQL', rating: 'Expert', description: 'قاعدة بيانات متقدمة' },
        { name: 'MongoDB', rating: 'Advanced', description: 'قاعدة بيانات NoSQL' },
        { name: 'Redis', rating: 'Advanced', description: 'ذاكرة التخزين المؤقت' }
      ],
      features: language === 'ar' ? [
        'واجهات برمجة تطبيقات RESTful',
        'قواعد بيانات محسنة',
        'نظام المصادقة المتقدم',
        'معالجة البيانات الضخمة',
        'النسخ الاحتياطي التلقائي'
      ] : [
        'RESTful APIs',
        'Optimized databases',
        'Advanced authentication',
        'Big data processing',
        'Automatic backups'
      ]
    },
    security: {
      title: language === 'ar' ? 'الأمان' : 'Security',
      description: language === 'ar'
        ? 'حماية متقدمة لبياناتك وتطبيقاتك مع أحدث معايير الأمان'
        : 'Advanced protection for your data and applications with latest security standards',
      icon: Shield,
      color: 'from-red-500 to-rose-600',
      technologies: [
        { name: 'SSL/TLS', rating: 'Expert', description: 'تشفير البيانات' },
        { name: 'OAuth 2.0', rating: 'Expert', description: 'نظام المصادقة الآمن' },
        { name: 'HTTPS', rating: 'Expert', description: 'بروتوكول نقل آمن' },
        { name: 'Firewall', rating: 'Advanced', description: 'جدار الحماية' },
        { name: 'Data Encryption', rating: 'Expert', description: 'تشفير البيانات' }
      ],
      features: language === 'ar' ? [
        'حماية من الهجمات السيبرانية',
        'تشفير البيانات الحساسة',
        'مراقبة الأمان المستمرة',
        'نسخ احتياطية آمنة',
        'امتثال معايير الأمان'
      ] : [
        'Protection from cyber attacks',
        'Sensitive data encryption',
        'Continuous security monitoring',
        'Secure backups',
        'Security standards compliance'
      ]
    }
  };

  const turnkeyFeatures = [
    {
      icon: Globe,
      title: language === 'ar' ? 'تصميم مخصص' : 'Custom Design',
      description: language === 'ar' ? 'تصميم فريد يعكس هوية علامتك التجارية' : 'Unique design reflecting your brand identity'
    },
    {
      icon: Settings,
      title: language === 'ar' ? 'إدارة المحتوى' : 'Content Management',
      description: language === 'ar' ? 'نظام إدارة محتوى سهل الاستخدام' : 'Easy-to-use content management system'
    },
    {
      icon: Search,
      title: language === 'ar' ? 'تحسين محركات البحث' : 'SEO Optimization',
      description: language === 'ar' ? 'تحسين موقعك لمحركات البحث' : 'Optimize your site for search engines'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'أداء فائق' : 'Superior Performance',
      description: language === 'ar' ? 'مواقع سريعة ومحسنة للأداء' : 'Fast and performance-optimized websites'
    }
  ];

  const currentTab = webTechnologies[activeTab as keyof typeof webTechnologies];

  return (
    <section className={`py-24 bg-gradient-to-b from-muted/20 to-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {language === 'ar' ? 'خبرتنا في تطوير الويب' : 'Our Web Development Expertise'}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'نحن متخصصون في تطوير حلول الويب المتكاملة من الواجهة الأمامية إلى الخلفية مع أعلى معايير الأمان'
              : 'We specialize in developing complete web solutions from frontend to backend with the highest security standards'
            }
          </p>

          {/* Technology Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(webTechnologies).map(([key, tech]) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                variant={activeTab === key ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  activeTab === key 
                    ? `bg-gradient-to-r ${tech.color} text-white` 
                    : 'hover:border-indigo-400'
                }`}
              >
                <tech.icon className="w-4 h-4" />
                <span>{tech.title}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Technology Details */}
        <motion.div
          key={activeTab}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Technology Info */}
          <div>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentTab.color} flex items-center justify-center mb-6`}>
              <currentTab.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-foreground">{currentTab.title}</h3>
            <p className="text-lg text-muted-foreground mb-8">{currentTab.description}</p>
            
            {/* Features */}
            <div className="space-y-3">
              {currentTab.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Skills */}
          <div className="space-y-6">
            {currentTab.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-foreground">{tech.name}</h4>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      tech.rating === 'Expert' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : tech.rating === 'Advanced'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                        : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                    }`}
                  >
                    {tech.rating}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-foreground">
                    {language === 'ar' ? 'خبرة متقدمة' : 'Advanced Expertise'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Turnkey Website Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {language === 'ar' ? 'مواقع Turnkey الجاهزة' : 'Turnkey Ready Websites'}
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'حل شامل ومتكامل لموقعك الإلكتروني من التصميم إلى النشر والصيانة'
              : 'Complete and integrated solution for your website from design to deployment and maintenance'
            }
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {turnkeyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2 text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Our Web Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 pattern-dots" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'لماذا تختار خدمات الويب لدينا؟' : 'Why Choose Our Web Services?'}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نجمع بين الخبرة التقنية والإبداع لنقدم لك حلول ويب متكاملة تحقق أهدافك وتتفوق على منافسيك'
                : 'We combine technical expertise with creativity to deliver complete web solutions that achieve your goals and outperform your competitors'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '🚀 تقنيات حديثة' : '🚀 Modern Technologies'}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '⚡ أداء فائق' : '⚡ Superior Performance'}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '🔒 أمان متقدم' : '🔒 Advanced Security'}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '📱 متجاوب تماماً' : '📱 Fully Responsive'}
              </Badge>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 font-semibold group"
            >
              {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
              <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};