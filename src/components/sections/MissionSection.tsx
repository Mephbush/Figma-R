import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { 
  Target, 
  Eye, 
  Heart,
  Zap,
  Users,
  Trophy,
  Rocket,
  Shield
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export const MissionSection: React.FC = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'هدفنا',
      titleEn: 'Our Mission',
      description: 'مساعدة الشركات على تحقيق النجاح الرقمي من خلال حلول مبتكرة وإبداعية تلهم وتؤثر',
      descriptionEn: 'Helping businesses achieve digital success through innovative and creative solutions that inspire and impact',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Eye,
      title: 'رؤيتنا',
      titleEn: 'Our Vision', 
      description: 'أن نكون الشريك الأول للتحول الرقمي، الإنتاج البصري والتسويق المبدع في المنطقة',
      descriptionEn: 'To be the leading partner for digital transformation, visual production and creative marketing in the region',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'قيمنا',
      titleEn: 'Our Values',
      description: 'الإبداع، الجودة، الشفافية، والشراكة الحقيقية مع عملائنا لضمان نجاحهم',
      descriptionEn: 'Creativity, quality, transparency, and genuine partnership with our clients to ensure their success',
      color: 'from-rose-500 to-orange-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'نتائج ملموسة وقابلة للقياس',
      titleEn: 'Measurable & Tangible Results',
      description: 'نضمن عائد استثمار واضح وقابل للقياس في كل مشروع',
      descriptionEn: 'We guarantee clear and measurable ROI in every project',
      metric: '+300%',
      metricLabel: 'متوسط تحسن الأداء',
      metricLabelEn: 'Average Performance Boost'
    },
    {
      icon: Rocket,
      title: 'خبرة تقنية متقدمة',
      titleEn: 'Advanced Technical Expertise',
      description: 'فريق من الخبراء في أحدث التقنيات والاتجاهات الرقمية',
      descriptionEn: 'Team of experts in latest technologies and digital trends',
      metric: '7+',
      metricLabel: 'سنوات خبرة متراكمة',
      metricLabelEn: 'Years of Experience'
    },
    {
      icon: Trophy,
      title: 'إبداع حائز على جوائز',
      titleEn: 'Award-Winning Creativity',
      description: 'تصاميم مبتكرة حازت على اعتراف الصناعة وإعجاب العملاء',
      descriptionEn: 'Innovative designs recognized by industry and clients',
      metric: '95%',
      metricLabel: 'معدل رضا العملاء',
      metricLabelEn: 'Client Satisfaction Rate'
    },
    {
      icon: Zap,
      title: 'سرعة تنفيذ استثنائية',
      titleEn: 'Exceptional Speed',
      description: 'منهجية متطورة تضمن تسليم أسرع بدون التضحية بالجودة',
      descriptionEn: 'Advanced methodology ensuring faster delivery without compromising quality',
      metric: '60%',
      metricLabel: 'أسرع من المعدل الصناعي',
      metricLabelEn: 'Faster Than Industry Average'
    },
    {
      icon: Users,
      title: 'شراكة استراتيجية حقيقية',
      titleEn: 'True Strategic Partnership',
      description: 'نعمل كامتداد لفريقك مع التزام كامل بنجاح مشروعك',
      descriptionEn: 'We work as an extension of your team with full commitment to success',
      metric: '+50',
      metricLabel: 'مشروع ناجح',
      metricLabelEn: 'Successful Projects'
    },
    {
      icon: Shield,
      title: 'أمان وثقة مطلقة',
      titleEn: 'Complete Security & Trust',
      description: 'حماية متقدمة للبيانات مع ضمانات شاملة لراحة البال',
      descriptionEn: 'Advanced data protection with comprehensive guarantees for peace of mind',
      metric: '100%',
      metricLabel: 'معدل الأمان والثقة',
      metricLabelEn: 'Security & Trust Rate'
    }
  ];

  return (
    <section className={`py-24 bg-gradient-to-b from-background to-muted/20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {language === 'ar' ? 'من نحن' : 'Who We Are'}
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'VisCend هي شريكك الرقمي الشامل للنجاح. نحن متخصصون في الإنتاج البصري، حلول الويب المتقدمة، والتسويق الرقمي المبتكر'
              : 'VisCend is your comprehensive digital success partner. We specialize in visual production, advanced web solutions, and innovative digital marketing'
            }
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border hover:border-indigo-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {language === 'ar' ? value.title : value.titleEn}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'ar' ? value.description : value.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {language === 'ar' ? 'لماذا تختار VisCend؟' : 'Why Choose VisCend?'}
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نحن لسنا مجرد مقدم خدمة، بل شريك في نجاحك الرقمي'
              : 'We are not just a service provider, but a partner in your digital success'
            }
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-border hover:border-indigo-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-500 group-hover:text-purple-500 transition-colors duration-300">
                          {item.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === 'ar' ? item.metricLabel : item.metricLabelEn}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-3 text-foreground group-hover:text-indigo-600 transition-colors duration-300">
                      {language === 'ar' ? item.title : item.titleEn}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {language === 'ar' ? item.description : item.descriptionEn}
                    </p>
                    
                    {/* Progress bar effect */}
                    <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 pattern-dots" />
          </div>
          
          <div className="relative z-10">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'VisCend - شريكك للنجاح الرقمي' : 'VisCend - Your Digital Success Partner'}
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'مهمتنا هي مساعدتك في تحقيق النجاح الرقمي من خلال حلول مبتكرة ومبدعة تميز علامتك التجارية وتحقق أهدافك'
                : 'Our mission is to help you achieve digital success through innovative and creative solutions that distinguish your brand and achieve your goals'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {language === 'ar' ? '🎯 الإبداع' : '🎯 Creativity'}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {language === 'ar' ? '⚡ السرعة' : '⚡ Speed'}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {language === 'ar' ? '🏆 الجودة' : '🏆 Quality'}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {language === 'ar' ? '🤝 الشراكة' : '🤝 Partnership'}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                {language === 'ar' ? '📈 التسويق' : '📈 Marketing'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};