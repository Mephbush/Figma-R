import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.studio': 'Studio',
    'nav.web': 'Web',
    'nav.marketing': 'Marketing',
    
    // Hero Section
    'hero.title': 'Visual Innovation Meets Digital Excellence',
    'hero.subtitle': 'VisCend transforms your vision into reality through cinematic storytelling and cutting-edge web solutions.',
    'hero.cta': 'Start Your Project',
    'hero.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'About VisCend',
    'about.subtitle': 'Pioneers of Visual Innovation & Digital Excellence',
    'about.description': 'We embody digital artistry and technical innovation in every project. We transform ideas into stunning visual experiences and advanced digital solutions that achieve distinction and success.',
    'about.mission': 'Our mission is to be your creative partner, transforming your visions into digital reality that exceeds expectations and achieves your goals with the highest standards of quality and innovation.',
    
    // Services
    'services.title': 'Our Services',
    'services.studio.title': 'Studio',
    'services.studio.description': 'Cinematic video production, motion graphics, and visual storytelling that brings your brand to life.',
    'services.web.title': 'Web',
    'services.web.description': 'Modern web solutions, e-commerce platforms, and digital experiences that drive results.',
    
    // Portfolio
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Discover the stories we\'ve brought to life',
    'portfolio.viewAll': 'View All Projects',
    
    // Contact
    'contact.title': 'Let\'s Create Together',
    'contact.subtitle': 'Ready to transform your vision into reality?',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.service': 'Service Needed',
    'contact.message': 'Tell us about your project',
    'contact.submit': 'Send Message',
    'contact.success': 'Thank you! We\'ll get back to you soon.',
    'contact.error': 'Something went wrong. Please try again.',
    
    // Footer
    'footer.tagline': 'Pioneers of Visual Innovation & Digital Excellence',
    'footer.newsletter': 'Subscribe to our newsletter',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'loading': 'Loading...',
    'submit': 'Submit',
    'cancel': 'Cancel',
    'close': 'Close',
    
    // Contracts
    'nav.contracts': 'Contracts',
    'contract.title': 'Service Contract',
    'contract.subtitle': 'Create a professional contract for your project',
    'contract.clientInfo': 'Client Information',
    'contract.projectDetails': 'Project Details',
    'contract.terms': 'Terms & Conditions',
    'contract.verification': 'Email Verification',
    'contract.clientName': 'Client Full Name',
    'contract.clientEmail': 'Client Email',
    'contract.clientPhone': 'Client Phone',
    'contract.serviceType': 'Service Type',
    'contract.selectService': 'Select Service',
    'contract.projectName': 'Project Name',
    'contract.projectDescription': 'Project Description',
    'contract.features': 'Required Features',
    'contract.limitations': 'Limitations & Constraints',
    'contract.duration': 'Project Duration (in weeks)',
    'contract.budget': 'Project Budget (USD)',
    'contract.startDate': 'Expected Start Date',
    'contract.deliverables': 'Deliverables',
    'contract.paymentTerms': 'Payment Terms',
    'contract.revisions': 'Number of Revisions',
    'contract.termsAgree': 'I agree to the terms and conditions',
    'contract.sendVerification': 'Send Verification Code',
    'contract.verificationCode': 'Enter Verification Code',
    'contract.verify': 'Verify',
    'contract.submitContract': 'Submit Contract',
    'contract.downloadPDF': 'View Contract (Print to PDF)',
    'contract.success': 'Contract created successfully!',
    'contract.error': 'Error creating contract. Please try again.',
    'contract.verificationSent': 'Verification code sent to your email',
    'contract.verificationError': 'Error sending verification code',
    'contract.verificationSuccess': 'Email verified successfully',
    'contract.verificationFailed': 'Invalid verification code',
    'contract.studio': 'Visual Production (Studio)',
    'contract.web': 'Web Development',
    'contract.marketing': 'Digital Marketing',
    'contract.termsText': 'Terms and Conditions',
    'contract.term1': '1. The contractor agrees to provide the services as described in the contract.',
    'contract.term2': '2. Payment will be made according to the agreed schedule.',
    'contract.term3': '3. The client is responsible for providing all necessary materials and information.',
    'contract.term4': '4. Changes to the scope of work may result in additional charges.',
    'contract.term5': '5. All intellectual property rights will be transferred to the client upon full payment.',
    'contract.term6': '6. Confidentiality will be maintained for all project information.',
    'contract.term7': '7. Either party may terminate the contract with written notice.',
    'contract.term8': '8. Disputes will be resolved through arbitration.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.contact': 'تواصل معنا',
    'nav.contracts': 'العقود',
    'nav.studio': 'الاستوديو',
    'nav.web': 'الويب',
    'nav.marketing': 'التسويق',
    
    // Hero Section
    'hero.title': 'الابتكار البصري يلتقي بالتميز الرقمي',
    'hero.subtitle': 'تحول VisCend رؤيتك إلى واقع من خلال السرد السينمائي والحلول الرقمية المتطورة.',
    'hero.cta': 'ابدأ مشروعك',
    'hero.learnMore': 'اعرف المزيد',
    
    // About Section
    'about.title': 'حول VisCend',
    'about.subtitle': 'رواد الإبداع البصري والتطوير الرقمي',
    'about.description': 'نحن نجسد الفن الرقمي والابتكار التقني في كل مشروع. نحول الأفكار إلى تجارب بصرية مذهلة وحلول رقمية متطورة تحقق التميز والنجاح.',
    'about.mission': 'رسالتنا هي أن نكون شريككم في الإبداع، نحول رؤاكم إلى واقع رقمي يتخطى التوقعات ويحقق أهدافكم بأعلى معايير الجودة والابتكار.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.studio.title': 'الاستوديو',
    'services.studio.description': 'إنتاج فيديو سينمائي، وموشن جرافيك، وسرد بصري يحيي علامتكم التجارية.',
    'services.web.title': 'الويب',
    'services.web.description': 'حلول ويب حديثة، ومنصات تجارة إلكترونية، وتجارب رقمية تحقق النتائج.',
    
    // Portfolio
    'portfolio.title': 'أعمالنا',
    'portfolio.subtitle': 'اكتشف القصص التي أحييناها',
    'portfolio.viewAll': 'عرض جميع المشاريع',
    
    // Contact
    'contact.title': 'لنبدع معاً',
    'contact.subtitle': 'مستعد لتحويل رؤيتك إلى واقع؟',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.service': 'الخدمة المطلوبة',
    'contact.message': 'أخبرنا عن مشروعك',
    'contact.submit': 'إرسال الرسالة',
    'contact.success': 'شكراً لك! سنعود إليك قريباً.',
    'contact.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    
    // Footer
    'footer.tagline': 'رواد الإبداع البصري والتطوير الرقمي',
    'footer.newsletter': 'اشترك في نشرتنا الإخبارية',
    'footer.subscribe': 'اشترك',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Common
    'loading': 'جاري التحميل...',
    'submit': 'إرسال',
    'cancel': 'إلغاء',
    'close': 'إغلاق',
    
    // Contracts
    'contract.title': 'عقد الخدمة',
    'contract.subtitle': 'أنشئ عقداً احترافياً لمشروعك',
    'contract.clientInfo': 'معلومات العميل',
    'contract.projectDetails': 'تفاصيل المشروع',
    'contract.terms': 'الشروط والأحكام',
    'contract.verification': 'التحقق من البريد الإلكتروني',
    'contract.clientName': 'اسم العميل الكامل',
    'contract.clientEmail': 'البريد الإلكتروني للعميل',
    'contract.clientPhone': 'رقم هاتف العميل',
    'contract.serviceType': 'نوع الخدمة',
    'contract.selectService': 'اختر الخدمة',
    'contract.projectName': 'اسم المشروع',
    'contract.projectDescription': 'وصف المشروع',
    'contract.features': 'الميزات المطلوبة',
    'contract.limitations': 'القيود والمحددات',
    'contract.duration': 'مدة المشروع (بالأسابيع)',
    'contract.budget': 'ميزانية المشروع (دولار)',
    'contract.startDate': 'تاريخ البدء المتوقع',
    'contract.deliverables': 'المخرجات المتوقعة',
    'contract.paymentTerms': 'شروط الدفع',
    'contract.revisions': 'عدد التعديلات',
    'contract.termsAgree': 'أوافق على الشروط والأحكام',
    'contract.sendVerification': 'إرسال رمز التحقق',
    'contract.verificationCode': 'أدخل رمز التحقق',
    'contract.verify': 'تحقق',
    'contract.submitContract': 'إرسال العقد',
    'contract.downloadPDF': 'عرض العقد (طباعة إلى PDF)',
    'contract.success': 'تم إنشاء العقد بنجاح!',
    'contract.error': 'خطأ في إنشاء العقد. يرجى المحاولة مرة أخرى.',
    'contract.verificationSent': 'تم إرسال رمز التحقق إلى بريدك الإلكتروني',
    'contract.verificationError': 'خطأ في إرسال رمز التحقق',
    'contract.verificationSuccess': 'تم التحقق من البريد الإلكتروني بنجاح',
    'contract.verificationFailed': 'رمز التحقق غير صحيح',
    'contract.studio': 'الإنتاج البصري (الاستوديو)',
    'contract.web': 'تطوير الويب',
    'contract.marketing': 'التسويق الرقمي',
    'contract.termsText': 'الشروط والأحكام',
    'contract.term1': '١. يوافق المقاول على تقديم الخدمات كما هو موضح في العقد.',
    'contract.term2': '٢. سيتم الدفع وفقاً للجدول الزمني المتفق عليه.',
    'contract.term3': '٣. العميل مسؤول عن توفير جميع المواد والمعلومات اللازمة.',
    'contract.term4': '٤. التغييرات في نطاق العمل قد تؤدي إلى تكاليف إضافية.',
    'contract.term5': '٥. سيتم نقل جميع حقوق الملكية الفكرية إلى العميل عند الدفع الكامل.',
    'contract.term6': '٦. سيتم الحفاظ على سرية جميع معلومات المشروع.',
    'contract.term7': '٧. يمكن لأي من الطرفين إنهاء العقد بإشعار كتابي.',
    'contract.term8': '٨. سيتم حل النزاعات من خلال التحكيم.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};