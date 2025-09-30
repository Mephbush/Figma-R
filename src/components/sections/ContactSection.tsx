import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { toast } from 'sonner@2.0.3';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { projectId, publicAnonKey } from '../../integrations/supabase/info';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t('contact.error'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8bb3c8fe/contact`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            language,
          }),
        }
      );

      if (response.ok) {
        toast.success(t('contact.success'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Contact form error:', errorData);
        toast.error(t('contact.error'));
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'ar' ? 'زورونا' : 'Visit Us',
      details: language === 'ar' 
        ? ['شارع الإبداع 123', 'الحي الرقمي، الرياض 12345']
        : ['123 Creative Street', 'Digital District, Riyadh 12345'],
    },
    {
      icon: Phone,
      title: language === 'ar' ? 'اتصل بنا' : 'Call Us',
      details: ['+966 50 123 4567', '+966 11 987 6543'],
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'راسلنا' : 'Email Us',
      details: ['hello@viscend.com', 'projects@viscend.com'],
    },
  ];

  return (
    <section 
      id="contact" 
      className={`py-24 bg-gradient-to-b from-muted/20 to-background ${
        language === 'ar' ? 'rtl' : 'ltr'
      }`}
    >
      <div className="container mx-auto px-4 bg-[rgba(156,32,32,0)] px-[40px] py-[0px]">
        {/* Section header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ x: language === 'ar' ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border shadow-lg bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.name')} *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full bg-input-background border-2 border-border focus:border-primary"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.email')} *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full bg-input-background border-2 border-border focus:border-primary"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.phone')}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full bg-input-background border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.service')}
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="w-full bg-input-background border-2 border-border focus:border-primary">
                        <SelectValue placeholder={language === 'ar' ? 'اختر خدمة' : 'Select a service'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video-production">
                          {language === 'ar' ? 'إنتاج الفيديو والإنتاج البصري' : 'Video Production & Visual Studio'}
                        </SelectItem>
                        <SelectItem value="motion-graphics">
                          {language === 'ar' ? 'الرسوم المتحركة والموشن جرافيك' : 'Motion Graphics & Animation'}
                        </SelectItem>
                        <SelectItem value="web-development">
                          {language === 'ar' ? 'تطوير وتصميم المواقع' : 'Web Development & Design'}
                        </SelectItem>
                        <SelectItem value="web-applications">
                          {language === 'ar' ? 'تطبيقات الويب المتقدمة' : 'Advanced Web Applications'}
                        </SelectItem>
                        <SelectItem value="branding">
                          {language === 'ar' ? 'العلامة التجارية والهوية البصرية' : 'Branding & Visual Identity'}
                        </SelectItem>
                        <SelectItem value="digital-marketing">
                          {language === 'ar' ? 'التسويق الرقمي والحملات الإعلانية' : 'Digital Marketing & Ad Campaigns'}
                        </SelectItem>
                        <SelectItem value="content-creation">
                          {language === 'ar' ? 'إنشاء المحتوى الرقمي' : 'Digital Content Creation'}
                        </SelectItem>
                        <SelectItem value="consultation">
                          {language === 'ar' ? 'استشارة رقمية' : 'Digital Consultation'}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'ar' ? 'أخرى' : 'Other'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full min-h-[120px] bg-input-background border-2 border-border focus:border-primary"
                      placeholder={language === 'ar' ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                      required
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        {t('contact.submit')}
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ x: language === 'ar' ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact details */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 text-center"
            >
              <MapPin className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Creative Hub</h3>
              <p className="text-muted-foreground">
                Located in the heart of the creative district, our studio is where innovation meets execution.
              </p>
            </motion.div>

            {/* Response time info */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Quick Response Guarantee
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Initial Response:</span>
                  <span className="font-medium text-indigo-500">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Detailed Proposal:</span>
                  <span className="font-medium text-purple-500">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Kickoff:</span>
                  <span className="font-medium text-pink-500">Within 48 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};