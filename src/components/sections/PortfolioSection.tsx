import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ExternalLink, Play, Eye, Calendar, Award, TrendingUp, Users, Sparkles } from 'lucide-react';
import { projectId, publicAnonKey } from '../../integrations/supabase/info';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  year: string;
  technologies: string[];
  metrics?: {
    views?: string;
    engagement?: string;
    conversion?: string;
    satisfaction?: string;
  };
  featured?: boolean;
}

interface PortfolioData {
  studio: PortfolioItem[];
  web: PortfolioItem[];
  marketing: PortfolioItem[];
}

export const PortfolioSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'studio' | 'web' | 'marketing'>('all');
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({ studio: [], web: [], marketing: [] });
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-8bb3c8fe/portfolio`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPortfolioData(data);
        } else {
          console.error('Portfolio API response not ok:', response.status, response.statusText);
          throw new Error('Failed to fetch portfolio data');
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        // Set enhanced fallback data
        setPortfolioData({
          studio: [
            {
              id: 1,
              title: language === 'ar' ? 'حملة "مستقبل الابتكار" التفاعلية' : 'Interactive "Future of Innovation" Campaign',
              description: language === 'ar' 
                ? 'حملة إعلانية سينمائية متكاملة مع فيديوهات تفاعلية وتأثيرات بصرية متقدمة حققت انتشاراً واسعاً'
                : 'Integrated cinematic ad campaign with interactive videos and advanced visual effects achieving viral reach',
              category: language === 'ar' ? 'إنتاج الفيديو المتقدم' : 'Advanced Video Production',
              image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4MTgzMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'شركة التقنيات المتقدمة' : 'Advanced Tech Corp',
              year: '2024',
              technologies: ['Cinema 4D', 'After Effects', 'Premiere Pro', 'DaVinci'],
              metrics: {
                views: '2.5M+',
                engagement: '85%',
                conversion: '45%',
                satisfaction: '98%'
              },
              featured: true
            },
            {
              id: 2,
              title: language === 'ar' ? 'مسلسل الموشن جرافيك "رحلة النجاح"' : '"Success Journey" Motion Graphics Series',
              description: language === 'ar'
                ? 'سلسلة من ٨ حلقات موشن جرافيك تحكي قصة نجاح العلامة التجارية بأسلوب بصري مبدع وجذاب'
                : '8-episode motion graphics series telling brand success story with creative and engaging visual style',
              category: language === 'ar' ? 'الرسوم المتحركة والموشن' : 'Motion Graphics & Animation',
              image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1vdGlvbiUyMGdyYXBoaWNzfGVufDF8fHx8MTc1ODI0NjA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'مجموعة الرائد التجاري' : 'Pioneer Commercial Group',
              year: '2024',
              technologies: ['After Effects', 'Illustrator', 'Lottie', 'Bodymovin'],
              metrics: {
                views: '1.8M+',
                engagement: '92%',
                conversion: '38%',
                satisfaction: '96%'
              }
            },
            {
              id: 3,
              title: language === 'ar' ? 'دوكيومنتري "وراء الكواليس"' : '"Behind the Scenes" Documentary',
              description: language === 'ar'
                ? 'فيلم وثائقي احترافي يظهر رحلة الابتكار والإبداع داخل الشركة مع تقنيات تصوير متقدمة'
                : 'Professional documentary showcasing innovation and creativity journey with advanced filming techniques',
              category: language === 'ar' ? 'الإنتاج الوثائقي' : 'Documentary Production',
              image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1pbmd8ZW58MXx8fHwxNzU4MTg3ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'شركة الإبداع الصناعي' : 'Industrial Innovation Co.',
              year: '2023',
              technologies: ['RED Camera', 'DaVinci Resolve', 'Pro Tools', 'Motion'],
              metrics: {
                views: '950K+',
                engagement: '88%',
                satisfaction: '94%'
              },
              featured: true
            }
          ],
          web: [
            {
              id: 4,
              title: language === 'ar' ? 'منصة التجارة الذكية "ShopAI"' : 'Smart Commerce Platform "ShopAI"',
              description: language === 'ar'
                ? 'منصة تجارة إلكترونية متطورة مدعومة بالذكاء الاصطناعي مع واجهة مستخدم ثورية وتجربة تسوق فريدة'
                : 'Advanced AI-powered e-commerce platform with revolutionary UI and unique shopping experience',
              category: language === 'ar' ? 'تطوير المنصات المتقدمة' : 'Advanced Platform Development',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODIzMTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'مجموعة التجارة الذكية' : 'Smart Commerce Group',
              year: '2024',
              technologies: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL', 'AWS'],
              metrics: {
                conversion: '73%',
                satisfaction: '97%',
                engagement: '89%'
              },
              featured: true
            },
            {
              id: 5,
              title: language === 'ar' ? 'نظام إدارة المؤسسات "CoreFlow"' : 'Enterprise Management System "CoreFlow"',
              description: language === 'ar'
                ? 'نظام إدارة شامل للمؤسسات الكبيرة مع لوحات تحكم ذكية وتحليلات متقدمة في الوقت الفعلي'
                : 'Comprehensive enterprise management system with smart dashboards and real-time advanced analytics',
              category: language === 'ar' ? 'أنظمة المؤسسات' : 'Enterprise Systems',
              image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MjQ2MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'الخدمات المالية الراقية' : 'Premium Financial Services',
              year: '2024',
              technologies: ['Vue.js', 'Python', 'Docker', 'Redis', 'Kubernetes'],
              metrics: {
                satisfaction: '95%',
                engagement: '91%',
                conversion: '68%'
              }
            },
            {
              id: 6,
              title: language === 'ar' ? 'تطبيق الصحة الذكي "HealthTech"' : 'Smart Health App "HealthTech"',
              description: language === 'ar'
                ? 'تطبيق ويب متطور للرعاية الصحية مع متابعة ذكية للمرضى وتحليلات طبية متقدمة'
                : 'Advanced healthcare web application with smart patient monitoring and medical analytics',
              category: language === 'ar' ? 'تطبيقات الصحة الرقمية' : 'Digital Health Applications',
              image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODIxMDk2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'مركز الرعاية المتقدمة' : 'Advanced Care Center',
              year: '2023',
              technologies: ['React Native', 'Firebase', 'ML Kit', 'HealthKit'],
              metrics: {
                satisfaction: '99%',
                engagement: '94%'
              }
            }
          ],
          marketing: [
            {
              id: 7,
              title: language === 'ar' ? 'حملة "الثورة الرقمية" المتكاملة' : 'Integrated "Digital Revolution" Campaign',
              description: language === 'ar'
                ? 'حملة تسويقية شاملة عبر قنوات متعددة حققت نمو ٤٠٠٪ في الوعي بالعلامة التجارية'
                : 'Comprehensive multi-channel marketing campaign achieving 400% brand awareness growth',
              category: language === 'ar' ? 'التسويق الرقمي المتكامل' : 'Integrated Digital Marketing',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzU4MTg3NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'شركة التكنولوجيا الناشئة' : 'Emerging Tech Company',
              year: '2024',
              technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'CRM'],
              metrics: {
                views: '5.2M+',
                engagement: '78%',
                conversion: '32%',
                satisfaction: '93%'
              },
              featured: true
            },
            {
              id: 8,
              title: language === 'ar' ? 'استراتيجية المحتوى "القصة الملهمة"' : '"Inspiring Story" Content Strategy',
              description: language === 'ar'
                ? 'استراتيجية محتوى إبداعية طويلة المدى رفعت معدل التفاعل بنسبة ٢٥٠٪'
                : 'Creative long-term content strategy increasing engagement rate by 250%',
              category: language === 'ar' ? 'استراتيجية المحتوى' : 'Content Strategy',
              image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU4MTg3NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              client: language === 'ar' ? 'العلامة التجارية العالمية' : 'Global Brand',
              year: '2024',
              technologies: ['Content Planning', 'SEO', 'Social Media', 'Analytics'],
              metrics: {
                engagement: '250%',
                views: '3.1M+',
                satisfaction: '96%'
              }
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [language]);

  const allItems = [...portfolioData.studio, ...portfolioData.web, ...portfolioData.marketing];
  const filteredItems = activeFilter === 'all' 
    ? allItems 
    : portfolioData[activeFilter] || [];

  const filters = [
    { id: 'all' as const, label: language === 'ar' ? 'جميع الأعمال' : 'All Work', icon: Sparkles },
    { id: 'studio' as const, label: language === 'ar' ? 'الإنتاج البصري' : 'Visual Studio', icon: Play },
    { id: 'web' as const, label: language === 'ar' ? 'تطوير الويب' : 'Web Development', icon: ExternalLink },
    { id: 'marketing' as const, label: language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing', icon: TrendingUp },
  ];

  const achievementsStats = [
    {
      number: '50+',
      label: language === 'ar' ? 'مشروع ناجح' : 'Successful Projects',
      icon: Award
    },
    {
      number: '98%',
      label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction',
      icon: Users
    },
    {
      number: '15M+',
      label: language === 'ar' ? 'مشاهدة ومتابع' : 'Views & Followers',
      icon: Eye
    },
    {
      number: '300%',
      label: language === 'ar' ? 'متوسط نمو العملاء' : 'Average Client Growth',
      icon: TrendingUp
    }
  ];

  if (loading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg text-muted-foreground">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="portfolio" 
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {language === 'ar' ? 'معرض إنجازاتنا المتميزة' : 'Our Distinguished Portfolio'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            {language === 'ar' 
              ? 'اكتشف مجموعة من أفضل أعمالنا في الإنتاج البصري، تطوير الويب، والتسويق الرقمي التي حققت نتائج استثنائية لعملائنا'
              : 'Discover our finest work in visual production, web development, and digital marketing that achieved exceptional results for our clients'
            }
          </p>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {achievementsStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-indigo-500 mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 text-base ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'hover:border-indigo-400 hover:text-indigo-400'
                }`}
              >
                <filter.icon className="w-5 h-5 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`overflow-hidden border-border hover:border-indigo-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${item.featured ? 'ring-2 ring-indigo-400/30' : ''}`}>
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Featured badge */}
                    {item.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Award className="w-3 h-3 mr-1" />
                        {language === 'ar' ? 'مميز' : 'Featured'}
                      </Badge>
                    )}
                    
                    {/* Category and year */}
                    <div className="absolute top-4 right-4 text-right">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-2">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-white/80 text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Action button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                        onClick={() => setSelectedItem(item)}
                      >
                        {portfolioData.studio.some(p => p.id === item.id) ? (
                          <><Play className="w-5 h-5 mr-2" /> {language === 'ar' ? 'مشاهدة' : 'Watch'}</>
                        ) : (
                          <><ExternalLink className="w-5 h-5 mr-2" /> {language === 'ar' ? 'استكشاف' : 'Explore'}</>
                        )}
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {item.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Metrics */}
                    {item.metrics && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                        {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-indigo-500">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {language === 'ar' 
                                ? key === 'views' ? 'المشاهدات' 
                                  : key === 'engagement' ? 'التفاعل'
                                  : key === 'conversion' ? 'التحويل'
                                  : key === 'satisfaction' ? 'الرضا'
                                  : key
                                : key
                              }
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.client}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 pattern-dots" />
          </div>
          
          <div className="relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد لتكون قصة النجاح التالية؟' : 'Ready to be our next success story?'}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'انضم إلى عملائنا الذين حققوا نجاحاً استثنائياً معنا'
                : 'Join our clients who achieved exceptional success with us'
              }
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};