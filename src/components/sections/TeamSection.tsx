import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Award,
  Users,
  Globe,
  Lightbulb,
  Clock,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export const TeamSection: React.FC = () => {
  const { language } = useLanguage();

  const achievements = [
    {
      icon: Award,
      number: '100+',
      title: language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed',
      description: language === 'ar' ? 'مشاريع ناجحة في مختلف المجالات' : 'Successful projects across industries'
    },
    {
      icon: Users,
      number: '50+',
      title: language === 'ar' ? 'عميل راضي' : 'Happy Clients',
      description: language === 'ar' ? 'عملاء يثقون في خدماتنا' : 'Clients trust our services'
    },
    {
      icon: Globe,
      number: '10+',
      title: language === 'ar' ? 'دولة' : 'Countries',
      description: language === 'ar' ? 'نخدم عملاء حول العالم' : 'Serving clients worldwide'
    },
    {
      icon: Clock,
      number: '24/7',
      title: language === 'ar' ? 'دعم فني' : 'Technical Support',
      description: language === 'ar' ? 'دعم متواصل طوال الوقت' : 'Continuous support around the clock'
    }
  ];

  const expertise = [
    {
      title: language === 'ar' ? 'الإنتاج البصري' : 'Visual Production',
      skills: language === 'ar' 
        ? ['إنتاج الفيديو السينمائي', 'الرسوم المتحركة', 'التوجه الإبداعي', 'المؤثرات البصرية']
        : ['Cinematic Video Production', 'Motion Graphics', 'Creative Direction', 'Visual Effects'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: language === 'ar' ? 'تطوير الويب' : 'Web Development',
      skills: language === 'ar'
        ? ['الواجهة الأمامية', 'الواجهة الخلفية', 'قواعد البيانات', 'الأمان المتقدم']
        : ['Frontend Development', 'Backend Development', 'Database Design', 'Advanced Security'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: language === 'ar' ? 'التصميم الرقمي' : 'Digital Design',
      skills: language === 'ar'
        ? ['تصميم واجهة المستخدم', 'تجربة المستخدم', 'الهوية البصرية', 'التصميم التفاعلي']
        : ['UI Design', 'UX Design', 'Brand Identity', 'Interactive Design'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const whyUs = [
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'الإبداع والابتكار' : 'Creativity & Innovation',
      description: language === 'ar' 
        ? 'نقدم حلول مبتكرة وإبداعية تميز علامتك التجارية عن المنافسين'
        : 'We deliver innovative and creative solutions that distinguish your brand from competitors'
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'الجودة المضمونة' : 'Guaranteed Quality',
      description: language === 'ar'
        ? 'نلتزم بأعلى معايير الجودة في كل مشروع نقوم بتنفيذه'
        : 'We adhere to the highest quality standards in every project we execute'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'نتائج قابلة للقياس' : 'Measurable Results',
      description: language === 'ar'
        ? 'نركز على تحقيق نتائج ملموسة تساهم في نمو أعمالك'
        : 'We focus on achieving tangible results that contribute to your business growth'
    },
    {
      icon: Star,
      title: language === 'ar' ? 'تجربة عملاء متميزة' : 'Exceptional Client Experience',
      description: language === 'ar'
        ? 'نؤمن بأهمية بناء علاقات طويلة المدى مع عملائنا'
        : 'We believe in building long-term relationships with our clients'
    }
  ];

  return (
    <section className={`py-24 bg-gradient-to-b from-muted/20 to-background ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        
        {/* Achievements Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'أرقام تعكس خبرتنا ونجاحنا في تقديم حلول متميزة لعملائنا'
              : 'Numbers that reflect our experience and success in delivering exceptional solutions to our clients'
            }
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border hover:border-indigo-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Expertise */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {language === 'ar' ? 'خبراتنا المتخصصة' : 'Our Specialized Expertise'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نجمع بين الخبرة التقنية والإبداع الفني لنقدم حلول شاملة'
                : 'We combine technical expertise with artistic creativity to deliver comprehensive solutions'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${area.color} mb-6`} />
                    <h4 className="text-2xl font-bold mb-4 text-foreground">{area.title}</h4>
                    <div className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
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
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {language === 'ar' ? 'لماذا نحن الخيار الأمثل؟' : 'Why Are We The Best Choice?'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'ما يميزنا عن غيرنا ويجعلنا الشريك المثالي لنجاحك الرقمي'
                : 'What sets us apart and makes us the perfect partner for your digital success'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-border hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Values */}
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
            <Users className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'فريق VisCend - خبرة وإبداع' : 'VisCend Team - Expertise & Creativity'}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'فريق متخصص من المبدعين والتقنيين يعمل بشغف لتحقيق رؤيتك وتجاوز توقعاتك'
                : 'A specialized team of creatives and technicians working passionately to realize your vision and exceed your expectations'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '🎨 المبدعون' : '🎨 Creatives'}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '💻 المطورون' : '💻 Developers'}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '🎬 المنتجون' : '🎬 Producers'}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                {language === 'ar' ? '📈 الاستراتيجيون' : '📈 Strategists'}
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};