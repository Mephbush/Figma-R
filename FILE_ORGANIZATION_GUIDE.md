# 📋 دليل تنظيم الملفات

## 🎯 نظرة عامة

هذا الدليل يشرح كيفية نقل جميع ملفات المشروع من الهيكل القديم إلى الهيكل الجديد المنظم.

## 📦 خطوات النقل

### 1️⃣ نقل المكونات (Components)

انسخ جميع المكونات من المجلد القديم إلى المجلد الجديد:

```bash
# من المجلد الرئيسي للمشروع
cp components/*.tsx منظم/src/components/
cp components/ui/*.tsx منظم/src/components/ui/
cp components/ui/*.ts منظم/src/components/ui/
cp components/figma/*.tsx منظم/src/components/figma/
```

**المكونات المطلوبة:**
- `AboutSection.tsx`
- `ContactSection.tsx`
- `ContractForm.tsx`
- `ContractPreview.tsx`
- `CursorTrail.tsx`
- `Footer.tsx`
- `HeroSection.tsx`
- `IntroAnimation.tsx`
- `LanguageContext.tsx`
- `Logo.tsx`
- `MissionSection.tsx`
- `Navigation.tsx`
- `PageTransition.tsx`
- `PortfolioSection.tsx`
- `ServicesSection.tsx`
- `TeamSection.tsx`
- `ThemeContext.tsx`
- `WebExpertiseSection.tsx`

### 2️⃣ نقل الصفحات (Pages)

```bash
cp pages/*.tsx منظم/src/pages/
```

**الصفحات المطلوبة:**
- `HomePage.tsx`
- `AboutPage.tsx`
- `ServicesPage.tsx`
- `PortfolioPage.tsx`
- `ContractPage.tsx`
- `ContactPage.tsx`

### 3️⃣ نقل Supabase Functions

```bash
cp supabase/functions/server/*.tsx منظم/supabase/functions/server/
```

**الملفات المطلوبة:**
- `index.tsx` (الخادم الرئيسي)
- `kv_store.tsx` (مخزن المفاتيح والقيم)

### 4️⃣ نقل الملفات التوثيقية

```bash
cp CONTRACT_SYSTEM_README.md منظم/
cp GMAIL_SETUP.md منظم/
cp Attributions.md منظم/
cp guidelines/Guidelines.md منظم/docs/
```

### 5️⃣ إنشاء الأصول (Assets)

قم بإنشاء مجلد `assets` وأضف:
- شعار VisCend (`logo.svg` أو `logo.png`)
- أيقونة الموقع (`favicon.ico`)
- صور الخلفية
- خطوط مخصصة (إن وجدت)

```bash
mkdir -p منظم/public/assets
mkdir -p منظم/src/assets/images
mkdir -p منظم/src/assets/icons
```

## ✏️ تحديث المسارات في الملفات

بعد نقل الملفات، قد تحتاج لتحديث بعض المسارات:

### في المكونات (Components):

**قديم:**
```tsx
import { projectId, publicAnonKey } from '../utils/supabase/info';
```

**جديد:**
```tsx
import { projectId, publicAnonKey } from '../integrations/supabase/info';
```

### في الصفحات (Pages):

**قديم:**
```tsx
import { HeroSection } from '../components/HeroSection';
```

**جديد (لا يتغير):**
```tsx
import { HeroSection } from '../components/HeroSection';
```

## 🔍 التحقق من اكتمال النقل

### قائمة التحقق:

- [ ] ✅ جميع المكونات منسوخة في `src/components/`
- [ ] ✅ جميع مكونات UI منسوخة في `src/components/ui/`
- [ ] ✅ جميع الصفحات منسوخة في `src/pages/`
- [ ] ✅ ملف `info.tsx` في `src/integrations/supabase/`
- [ ] ✅ Supabase functions في `supabase/functions/server/`
- [ ] ✅ الملفات التوثيقية منسوخة
- [ ] ✅ `package.json` موجود
- [ ] ✅ `vite.config.ts` موجود
- [ ] ✅ `tsconfig.json` موجود
- [ ] ✅ `index.html` موجود
- [ ] ✅ `App.tsx` موجود في `src/`
- [ ] ✅ `main.tsx` موجود في `src/`
- [ ] ✅ `App.css` موجود في `src/`
- [ ] ✅ `.gitignore` موجود
- [ ] ✅ `README.md` موجود

## 🚀 الخطوة التالية

بعد نقل جميع الملفات:

1. **التثبيت:**
```bash
cd منظم
npm install
```

2. **التشغيل:**
```bash
npm run dev
```

3. **التحقق من عمل كل شيء بشكل صحيح**

4. **البناء للإنتاج:**
```bash
npm run build
```

## 🛠️ حل المشاكل الشائعة

### خطأ: لا يمكن العثور على الوحدة

إذا واجهت خطأ "Cannot find module":
1. تحقق من المسار في import
2. تأكد من نسخ الملف بشكل صحيح
3. تحقق من امتداد الملف (.tsx أو .ts)

### خطأ: Tailwind لا يعمل

تأكد من:
1. `@tailwindcss/vite` مثبت
2. `tailwindcss()` مضاف في `vite.config.ts`
3. `App.css` مستورد في `index.css`

### خطأ: Supabase لا يعمل

تحقق من:
1. متغيرات البيئة في `.env`
2. `info.tsx` موجود في المسار الصحيح
3. تحديث المسارات في الـ imports

## 📞 الدعم

إذا واجهت أي مشاكل، راجع:
- `README.md` للتعليمات العامة
- `CONTRACT_SYSTEM_README.md` لنظام العقود
- `GMAIL_SETUP.md` لإعداد البريد الإلكتروني

---

✅ **نصيحة:** استخدم Git لتتبع التغييرات أثناء النقل:
```bash
cd منظم
git init
git add .
git commit -m "Initial organized structure"
```