import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Eye, Zap, Target, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'We see beyond the ordinary to create extraordinary visual experiences.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology meets creative storytelling.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every pixel, every frame, every interaction is crafted with purpose.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside you as true digital enablers.',
    },
  ];

  return (
    <section 
      id="about" 
      className={`py-24 bg-gradient-to-b from-background to-muted/20 ${
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
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ x: language === 'ar' ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.description')}
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.mission')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: language === 'ar' ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648105393411-016dff24c40f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYWdlbmN5JTIwb2ZmaWNlfGVufDF8fHx8MTc1NzkwMDExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="VisCend Creative Team"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-indigo-400/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};