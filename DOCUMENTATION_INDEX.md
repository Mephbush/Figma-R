# 📚 فهرس التوثيق الكامل - VisCend Project

مرحباً بك في التوثيق الشامل لمشروع VisCend! هذا الدليل سيساعدك على العثور على المعلومات التي تحتاجها بسرعة.

---

## 🎯 ابدأ هنا

### للمبتدئين
1. **[QUICK_START.md](./QUICK_START.md)** - ابدأ في 5 دقائق ⚡
2. **[README.md](./README.md)** - نظرة عامة على المشروع 📖

### للمطورين
1. **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - دليل شامل للمطورين 👨‍💻
2. **[FILE_ORGANIZATION_GUIDE.md](./FILE_ORGANIZATION_GUIDE.md)** - فهم هيكل المشروع 📋

---

## 📁 التوثيق حسب الموضوع

### 1. البدء والإعداد 🚀

| الملف | الوصف | متى تقرأه |
|-------|--------|-----------|
| `QUICK_START.md` | بدء سريع في 5 دقائق | أول مرة تفتح المشروع |
| `README.md` | معلومات أساسية عن المشروع | للفهم العام |
| `.env.example` | مثال لملف البيئة | عند الإعداد الأولي |

### 2. التطوير 💻

| الملف | الوصف | متى تقرأه |
|-------|--------|-----------|
| `DEVELOPER_GUIDE.md` | دليل شامل للتطوير | قبل كت��بة أي كود |
| `FILE_ORGANIZATION_GUIDE.md` | فهم هيكل الملفات | عند إضافة ملفات جديدة |
| `package.json` | التبعيات والـ scripts | عند إضافة مكتبات |
| `tsconfig.json` | إعدادات TypeScript | عند تغيير إعدادات TS |
| `vite.config.ts` | إعدادات Vite | عند تغيير إعدادات البناء |

### 3. نظام العقود 📝

| الملف | الوصف | متى تقرأه |
|-------|--------|-----------|
| `CONTRACT_SYSTEM_README.md` | شرح كامل لنظام العقود | عند العمل على العقود |
| `src/components/ContractForm.tsx` | كود نموذج العقد | للتعديل على النموذج |
| `src/components/ContractPreview.tsx` | كود معاينة العقد | لتعديل عرض العقد |

### 4. Backend و APIs 🔧

| الملف | الوصف | متى تقرأه |
|-------|--------|-----------|
| `supabase/functions/server/index.tsx` | Supabase Edge Functions | للعمل على Backend |
| `supabase/functions/server/kv_store.tsx` | مخزن المفاتيح والقيم | للعمل مع قاعدة البيانات |
| `src/integrations/supabase/info.tsx` | معلومات Supabase | عند مشاكل الاتصال |
| `GMAIL_SETUP.md` | إعداد البريد الإلكتروني | لتفعيل الإيميلات |

### 5. UI وتصميم ���

| الملف | الوصف | متى تقرأه |
|-------|--------|-----------|
| `src/App.css` | الأنماط العامة والألوان | لتغيير الثيمات |
| `src/components/ui/` | مكونات Shadcn UI | عند استخدام UI components |
| `src/lib/utils.ts` | وظائف مساعدة للـ UI | لفهم الـ utilities |

### 6. الصفحات 📄

| المجلد/الملف | الوصف | المحتوى |
|--------------|--------|----------|
| `src/pages/HomePage.tsx` | الصفحة الرئيسية | Hero, Services, Portfolio |
| `src/pages/AboutPage.tsx` | صفحة من نحن | About, Mission, Team |
| `src/pages/ServicesPage.tsx` | صفحة الخدمات | Studio, Web, Marketing |
| `src/pages/PortfolioPage.tsx` | صفحة الأعمال | Portfolio items |
| `src/pages/ContractPage.tsx` | صفحة العقود | Contract form |
| `src/pages/ContactPage.tsx` | صفحة التواصل | Contact form |

### 7. المكونات الأساسية 🧩

| الملف | الوصف | الاستخدام |
|-------|--------|-----------|
| `src/components/Navigation.tsx` | شريط التنقل | التنقل الرئيسي |
| `src/components/Footer.tsx` | تذييل الصفحة | أسفل كل صفحة |
| `src/components/IntroAnimation.tsx` | أنيميشن الدخول | يظهر مرة واحدة |
| `src/components/CursorTrail.tsx` | تأثير ا��مؤشر | تأثيرات تفاعلية |
| `src/components/PageTransition.tsx` | انتقالات الصفحات | تأثيرات الانتقال |
| `src/components/LanguageContext.tsx` | إدارة اللغة | نظام الترجمة |
| `src/components/ThemeContext.tsx` | إدارة الثيمات | Dark/Light mode |

### 8. الإعدادات ⚙️

| الملف | الوصف | متى تحتاجه |
|-------|--------|-------------|
| `.gitignore` | الملفات المستثناة من Git | عند Git setup |
| `.eslintrc.cjs` | قواعد ESLint | لفحص جودة الكود |
| `tsconfig.json` | إعدادات TypeScript | لتغيير TS config |
| `tsconfig.node.json` | إعدادات Node لـ TS | نادراً |
| `vite.config.ts` | إعدادات Vite | لتغيير البناء |

---

## 🎓 مسارات التعلم

### مسار المبتدئ (0-7 أيام)

```
يوم 1: QUICK_START.md → تشغيل المشروع
يوم 2: README.md → فهم المشروع
يوم 3: FILE_ORGANIZATION_GUIDE.md → فهم الهيكل
يوم 4-5: DEVELOPER_GUIDE.md → التطوير الأساسي
يوم 6-7: استكشاف الكود → فهم عميق
```

### مسار المطور المتوسط (2-5 أيام)

```
يوم 1: DEVELOPER_GUIDE.md → المراجعة السريعة
يوم 2: CONTRACT_SYSTEM_README.md → فهم العقود
يوم 3: Supabase setup → إعداد Backend
يوم 4-5: تطوير ميزات → العمل الفعلي
```

### مسار المطور المتقدم (1 يوم)

```
صباحاً: مراجعة سريعة للتوثيق
ظهراً: استكشاف الكود
مساءً: بدء التطوير
```

---

## 📊 خريطة الكود

### التدفق الأساسي للتطبيق

```
index.html
    ↓
src/main.tsx
    ↓
src/App.tsx
    ↓
├── ThemeProvider (Dark/Light mode)
├── LanguageProvider (AR/EN)
└── Router
    ↓
    ├── IntroAnimation (First visit)
    ├── Navigation
    ├── PageTransition
    └── Routes
        ├── HomePage
        ├── AboutPage
        ├── ServicesPage
        ├── PortfolioPage
        ├── ContractPage
        └── ContactPage
```

### تدفق نظام العقود

```
ContractPage
    ↓
ContractForm (Step 1: Form)
    ↓
ContractPreview (Step 2: Preview)
    ↓
Email Verification (Step 3: Verify)
    ↓
Supabase Backend
    ↓
Success (Step 4: Complete)
```

---

## 🔍 البحث السريع

### أريد أن...

| الهدف | اذهب إلى |
|-------|----------|
| أبدأ المشروع بسرعة | `QUICK_START.md` |
| أفهم الهيكل | `FILE_ORGANIZATION_GUIDE.md` |
| أطور ميزة جديدة | `DEVELOPER_GUIDE.md` → "Adding Features" |
| أغير الألوان | `src/App.css` → `:root` |
| أضيف صفحة | `DEVELOPER_GUIDE.md` → "Routing" |
| أعدل نظام العقود | `CONTRACT_SYSTEM_README.md` |
| أصلح مشكلة | `QUICK_START.md` → "Troubleshooting" |
| أنشر الموقع | `DEVELOPER_GUIDE.md` → "Deployment" |
| أفهم Supabase | `DEVELOPER_GUIDE.md` → "Backend" |
| أضيف أنيميشن | `DEVELOPER_GUIDE.md` → "Animations" |

---

## 🎯 مرجع سريع للأوامر

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter

# Git
git status           # Check status
git add .            # Stage all changes
git commit -m ""     # Commit changes
git push             # Push to remote

# Supabase
supabase functions deploy    # Deploy functions
supabase functions serve     # Serve locally

# Node
npm install          # Install dependencies
npm update           # Update dependencies
npx tsc --noEmit     # Check TypeScript errors
```

---

## 📖 قراءات إضافية

### داخل المشروع
- `Attributions.md` - مصادر وحقوق
- `GMAIL_SETUP.md` - إعداد Gmail API
- `CONTRACT_SYSTEM_README.md` - نظام العقود
- `package.json` - التبعيات

### خا��ج المشروع
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Motion Docs](https://motion.dev/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🆘 الحصول على المساعدة

### أسئلة شائعة

**Q: المشروع لا يعمل بعد التثبيت؟**
A: راجع `QUICK_START.md` → Troubleshooting

**Q: كيف أضيف صفحة جديدة؟**
A: راجع `DEVELOPER_GUIDE.md` → Routing

**Q: كيف أغير الألوان؟**
A: راجع `src/App.css` → :root

**Q: نظام العقود لا يعمل؟**
A: راجع `CONTRACT_SYSTEM_README.md`

**Q: كيف أنشر الموقع؟**
A: راجع `DEVELOPER_GUIDE.md` → Deployment

---

## 📝 ملاحظات مهمة

### ⚠️ ملفات محمية (لا تعدلها)
- `src/integrations/supabase/info.tsx` (AUTOGENERATED)
- `src/components/figma/ImageWithFallback.tsx` (SYSTEM FILE)
- `supabase/functions/server/kv_store.tsx` (PROTECTED)

### ✅ ملفات آمنة للتعديل
- جميع الصفحات في `src/pages/`
- جميع المكونات في `src/components/` (ما عدا المحمية)
- `src/App.css` للأنماط
- `src/App.tsx` للتوجيه

### 🔄 ملفات تحتاج تحديث متزامن
- عند تغ��ير `package.json` → قم بـ `npm install`
- عند تغيير `tsconfig.json` → أعد تشغيل VS Code
- عند تغيير `.env` → أعد تشغيل dev server
- عند تغيير `vite.config.ts` → أعد تشغيل dev server

---

## 🎉 خاتمة

هذا المشروع منظم بعناية ليكون سهل الفهم والتطوير. خذ وقتك في استكشاف التوثيق، ولا تتردد في العودة إلى هذا الدليل عندما تحتاج.

**تذكر:**
- 📖 اقرأ التوثيق أولاً
- 💻 جرب الكود
- 🐛 اختبر جيداً
- 📝 وثق تغييراتك
- 🤝 شارك معرفتك

---

✨ **Happy Coding!** ✨

صنع بـ ❤️ بواسطة VisCend