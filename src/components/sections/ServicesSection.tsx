import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Video, 
  Monitor, 
  Camera, 
  Palette, 
  Code, 
  Smartphone,
  ArrowRight,
  Play
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface ServicesProps {
  onContactClick: () => void;
  onShowWebSection?: (show: boolean) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onContactClick, onShowWebSection }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'studio' | 'web'>('studio');

  const handleTabChange = (tab: 'studio' | 'web') => {
    setActiveTab(tab);
    if (onShowWebSection) {
      onShowWebSection(tab === 'web');
    }
  };

  const studioServices = [
    {
      icon: Video,
      title: 'Cinematic Production',
      description: 'High-end video production with cinematic quality and storytelling.',
      features: ['4K Video Production', 'Drone Cinematography', 'Post-Production', 'Color Grading'],
    },
    {
      icon: Camera,
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics and animations that bring your brand to life.',
      features: ['2D/3D Animation', 'Logo Animation', 'Explainer Videos', 'Visual Effects'],
    },
    {
      icon: Palette,
      title: 'Creative Direction',
      description: 'Art direction and creative strategy for your visual campaigns.',
      features: ['Brand Strategy', 'Visual Identity', 'Campaign Concepts', 'Storyboarding'],
    },
  ];

  const webServices = [
    {
      icon: Monitor,
      title: language === 'ar' ? 'تطوير الواجهة الأمامية' : 'Frontend Development',
      description: language === 'ar' 
        ? 'واجهات مستخدم تفاعلية وحديثة باستخدام أحدث التقنيات'
        : 'Interactive and modern user interfaces using cutting-edge technologies',
      features: language === 'ar' 
        ? ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'تحسين الأداء']
        : ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimization'],
    },
    {
      icon: Code,
      title: language === 'ar' ? 'تطوير الواجهة الخلفية' : 'Backend Development',
      description: language === 'ar'
        ? 'خوادم قوية وآمنة مع واجهات برمجة تطبيقات متقدمة'
        : 'Powerful and secure servers with advanced APIs',
      features: language === 'ar'
        ? ['Node.js/Python', 'قواعد البيانات', 'Cloud Services', 'الأمان المتقدم']
        : ['Node.js/Python', 'Database Design', 'Cloud Services', 'Advanced Security'],
    },
    {
      icon: Smartphone,
      title: language === 'ar' ? 'مواقع Turnkey' : 'Turnkey Websites',
      description: language === 'ar'
        ? 'حلول متكاملة جاهزة للاستخدام من التصميم إلى النشر'
        : 'Complete ready-to-use solutions from design to deployment',
      features: language === 'ar'
        ? ['تصميم مخصص', 'إدارة المحتوى', 'تحسين محركات البحث', 'صيانة دورية']
        : ['Custom Design', 'CMS Integration', 'SEO Optimization', 'Regular Maintenance'],
    },
  ];

  const currentServices = activeTab === 'studio' ? studioServices : webServices;
  const currentImage = activeTab === 'studio' 
    ? "https://images.unsplash.com/photo-1591033013778-ef2a8eb08bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU3OTAwMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    : "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmdXR1cmlzdGljJTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc1NzkwMDExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <section 
      id="services" 
      className={`py-24 bg-gradient-to-b from-muted/20 to-background ${
        language === 'ar' ? 'rtl' : 'ltr'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          
          {/* Service tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-full p-1 flex">
              <button
                onClick={() => handleTabChange('studio')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'studio'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('nav.studio')}
              </button>
              <button
                onClick={() => handleTabChange('web')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('nav.web')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Services list */}
          <motion.div
            key={activeTab}
            initial={{ x: language === 'ar' ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {activeTab === 'studio' ? t('services.studio.title') : t('services.web.title')}
              </h3>
              <p className="text-lg text-muted-foreground">
                {activeTab === 'studio' ? t('services.studio.description') : t('services.web.description')}
              </p>
            </div>

            {currentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group border-border hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-foreground">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured image */}
          <motion.div
            key={`${activeTab}-image`}
            initial={{ x: language === 'ar' ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <ImageWithFallback
                src={currentImage}
                alt={`${activeTab} services showcase`}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Play button overlay for studio */}
              {activeTab === 'studio' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}
              
              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our creative expertise.
          </p>
          <Button
            onClick={onContactClick}
            size="lg"
            variant="secondary"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};