# ⚡ دليل البدء السريع - VisCend

## 🎯 البدء في 5 دقائق

### الخطوة 1: نسخ الملفات المتبقية 📦

أولاً، قم بنسخ جميع الملفات من المشروع القديم:

```bash
# في نافذة Terminal، انتقل لمجلد المشروع الرئيسي
cd /path/to/project

# قم بتشغيل script النسخ
node منظم/organize-files.js
```

أو قم بالنسخ يدوياً:

```bash
# نسخ المكونات
cp components/*.tsx منظم/src/components/
cp components/ui/*.tsx منظم/src/components/ui/
cp components/ui/*.ts منظم/src/components/ui/
cp components/figma/*.tsx منظم/src/components/figma/

# نسخ الصفحات
cp pages/*.tsx منظم/src/pages/

# نسخ Supabase functions
cp supabase/functions/server/*.tsx منظم/supabase/functions/server/

# نسخ الملفات التوثيقية
cp CONTRACT_SYSTEM_README.md منظم/
cp GMAIL_SETUP.md منظم/
cp Attributions.md منظم/
```

### الخطوة 2: تثبيت التبعيات 📥

```bash
cd منظم
npm install
```

### الخطوة 3: إعداد البيئة ⚙️

```bash
# نسخ ملف البيئة
cp .env.example .env

# تحرير الملف وإضافة بيانات Supabase
nano .env
```

أضف:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### الخطوة 4: تشغيل المشروع 🚀

```bash
npm run dev
```

افتح المتصفح على: `http://localhost:3000`

---

## ✅ التحقق من التثبيت

### 1. المكونات
تحقق من وجود جميع الملفات:
```bash
ls -la src/components/
ls -la src/components/ui/
ls -la src/pages/
```

### 2. Supabase
تحقق من الاتصال:
```bash
cat src/integrations/supabase/info.tsx
```

### 3. التشغيل
يجب أن ترى:
```
✅ Server running at http://localhost:3000
✅ No compilation errors
✅ الصفحة الرئيسية تعمل
```

---

## 🎨 التخصيص السريع

### تغيير الألوان

```css
/* src/App.css */
:root {
  --primary: #YOUR_COLOR;    /* اللون الأساسي */
  --accent: #YOUR_COLOR;     /* لون التمييز */
}
```

### إضافة صفحة جديدة

```typescript
// 1. src/pages/MyPage.tsx
export const MyPage = () => {
  return <div>My New Page</div>;
};

// 2. src/App.tsx
import { MyPage } from './pages/MyPage';
<Route path="/my-page" element={<MyPage />} />

// 3. src/components/Navigation.tsx
<Link to="/my-page">My Page</Link>
```

---

## 🐛 حل المشاكل السريع

### المشروع لا يعمل؟

```bash
# 1. احذف node_modules
rm -rf node_modules

# 2. احذف package-lock.json
rm package-lock.json

# 3. أعد التثبيت
npm install

# 4. شغل المشروع
npm run dev
```

### Tailwind لا يعمل؟

تحقق من:
```typescript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()], // تأكد من وجود tailwindcss()
});
```

### TypeScript Errors؟

```bash
# أعد بناء types
npx tsc --noEmit

# تحقق من tsconfig.json
cat tsconfig.json
```

---

## 📦 البناء للإنتاج

```bash
# بناء المشروع
npm run build

# معاينة البناء
npm run preview

# الملفات المبنية في: dist/
```

---

## 🚀 النشر السريع

### Vercel (الأسرع)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# نشر
vercel

# إضافة متغيرات البيئة في dashboard
```

### Netlify

```bash
# في Netlify Dashboard:
# Build command: npm run build
# Publish directory: dist
# Environment variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
```

---

## 📚 الخطوات التالية

1. 📖 اقرأ `README.md` للتفاصيل الكاملة
2. 👨‍💻 اقرأ `DEVELOPER_GUIDE.md` للتطوير المتقدم
3. 📋 اقرأ `FILE_ORGANIZATION_GUIDE.md` لفهم الهيكل
4. 📝 ��قرأ `CONTRACT_SYSTEM_README.md` لنظام العقود

---

## 💡 نصائح سريعة

### الأوامر الشائعة

```bash
npm run dev      # تشغيل development server
npm run build    # بناء للإنتاج
npm run preview  # معاينة البناء
npm run lint     # فحص الكود
```

### Keyboard Shortcuts في VS Code

- `Ctrl + P` - فتح ملف سريع
- `Ctrl + Shift + F` - بحث في جميع الملفات
- `Ctrl + /` - تعليق/إلغاء تعليق
- `Alt + Shift + F` - تنسيق الكود

### Git Commands

```bash
git status              # حالة الملفات
git add .               # إضافة جميع التغييرات
git commit -m "message" # commit
git push                # رفع للـ remote
```

---

## 🎉 أنت جاهز!

الآن يمكنك:
- ✅ تطوير ميزات جديدة
- ✅ تخصيص التصميم
- ✅ إضافة صفحات
- ✅ نشر الموقع

**Happy Coding! 🚀**

---

## 📞 تحتاج مساعدة؟

- 📖 راجع `README.md`
- 👨‍💻 راجع `DEVELOPER_GUIDE.md`
- 🔧 راجع `FILE_ORGANIZATION_GUIDE.md`
- 💬 تواصل مع الفريق

---

صنع بـ ❤️ بواسطة VisCend