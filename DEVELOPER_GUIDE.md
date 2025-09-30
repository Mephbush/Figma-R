# 👨‍💻 دليل المطور - VisCend Project

## 🎯 مقدمة

هذا الدليل الشامل للمطورين الذين يريدون العمل على مشروع VisCend، سواء للتطوير أو الصيانة أو إضافة ميزات جديدة.

---

## 📋 جدول المحتويات

1. [البنية التحتية](#البنية-التحتية)
2. [البدء السريع](#البدء-السريع)
3. [هيكل المشروع](#هيكل-المشروع)
4. [الأنماط والممارسات](#الأنماط-والممارسات)
5. [المكونات الرئيسية](#المكونات-الرئيسية)
6. [نظام الحالة](#نظام-الحالة)
7. [التوجيه](#التوجيه)
8. [التصميم و Tailwind](#التصميم-و-tailwind)
9. [الأنيميشن](#الأنيميشن)
10. [Backend و Supabase](#backend-و-supabase)
11. [نظام العقود](#نظام-العقود)
12. [الاختبار](#الاختبار)
13. [النشر](#النشر)

---

## 🏗️ البنية التحتية

### التقنيات المستخدمة

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.3.3 | Type Safety |
| Vite | 5.2.0 | Build Tool |
| Tailwind CSS | 4.0.0 | Styling |
| Motion | 11.15.0 | Animations |
| React Router | 6.22.0 | Routing |
| Supabase | 2.39.7 | Backend |
| Shadcn UI | Latest | UI Components |

---

## 🚀 البدء السريع

### 1. الإعداد الأولي

```bash
# استنساخ المشروع
git clone <repository-url>
cd منظم

# تثبيت التبعيات
npm install

# نسخ ملف البيئة
cp .env.example .env

# تحرير ملف .env وإضافة بيانات Supabase
nano .env
```

### 2. تشغيل المشروع

```bash
# Development mode
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

---

## 📁 هيكل المشروع

```
منظم/
├── public/                    # Static assets
│   └── assets/               # Images, icons, etc.
│
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Shadcn UI components
│   │   ├── figma/           # Figma imports
│   │   ├── Navigation.tsx   # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   └── ...              # Other components
│   │
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
���   │   ├── PortfolioPage.tsx
│   │   ├── ContractPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── integrations/        # Third-party integrations
│   │   └── supabase/       # Supabase config
│   │       └── info.tsx
│   │
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts        # Helper functions
│   │
│   ├── hooks/               # Custom React hooks
│   │
│   ├── utils/               # Utility functions
│   │
│   ├── assets/              # Source assets
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── App.tsx              # Main App component
│   ├── App.css              # Global styles
│   ├── main.tsx             # Entry point
│   ├── index.css            # Index styles
│   └── vite-env.d.ts        # Vite type definitions
│
├── supabase/
│   └── functions/
│       └── server/          # Edge Functions
│           ├── index.tsx    # Main server
│           └── kv_store.tsx # KV store utilities
│
├── index.html               # HTML entry
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # Main documentation
```

---

## 🎨 الأنماط والممارسات

### كود TypeScript

```typescript
// ✅ استخدم TypeScript بشكل صحيح
interface User {
  id: string;
  name: string;
  email: string;
}

const user: User = {
  id: '1',
  name: 'Ahmed',
  email: 'ahmed@example.com'
};

// ❌ تجنب any
const data: any = getSomeData(); // Bad

// ✅ استخدم types محددة
interface SomeData {
  field: string;
}
const data: SomeData = getSomeData(); // Good
```

### React Components

```typescript
// ✅ استخدم Functional Components مع TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
```

### Naming Conventions

- **Components**: PascalCase (`MyComponent.tsx`)
- **Files**: kebab-case for utils (`my-util.ts`)
- **Variables**: camelCase (`myVariable`)
- **Constants**: UPPER_SNAKE_CASE (`MY_CONSTANT`)
- **Interfaces**: PascalCase with I prefix optional (`UserData` or `IUserData`)

---

## 🧩 المكونات الرئيسية

### 1. Navigation

```typescript
// src/components/Navigation.tsx
- يدير التنقل الرئيسي
- يتضم�� Language Toggle
- يتضمن Theme Toggle
- مستجيب للأجهزة المحمولة
```

### 2. IntroAnimation

```typescript
// src/components/IntroAnimation.tsx
- أنيميشن الدخول (يظهر مرة واحدة فقط)
- يستخدم localStorage للتتبع
- قابل للتخطي
```

### 3. ContractForm

```typescript
// src/components/ContractForm.tsx
- نموذج العقود الشامل
- multi-step form
- يتكامل مع Supabase
```

---

## 🔄 نظام الحالة

### Context API

يستخدم المشروع Context API لإدارة:

#### 1. Language Context

```typescript
// src/components/LanguageContext.tsx
const { language, setLanguage, t } = useLanguage();

// استخدام
const text = t('home.welcome');
```

#### 2. Theme Context

```typescript
// src/components/ThemeContext.tsx
const { theme, setTheme } = useTheme();

// استخدام
setTheme('dark' | 'light');
```

---

## 🛣️ التوجيه

### إضافة صفحة جديدة

1. **إنشاء الصفحة:**

```typescript
// src/pages/NewPage.tsx
import React from 'react';
import { motion } from 'motion/react';

export const NewPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>New Page</h1>
    </motion.div>
  );
};
```

2. **إضافة Route:**

```typescript
// src/App.tsx
import { NewPage } from './pages/NewPage';

// في Routes:
<Route path="/new" element={<NewPage />} />
```

3. **إضافة رابط في Navigation:**

```typescript
// src/components/Navigation.tsx
<Link to="/new">New Page</Link>
```

---

## 🎨 التصميم و Tailwind

### نظام الألوان

```css
/* src/App.css */

/* Dark Mode (Default) */
:root {
  --primary: #00e5ff;    /* Cyan */
  --accent: #ff5722;     /* Orange */
  --background: #0a0a12; /* Dark */
}

/* Light Mode */
.light {
  --primary: #0288d1;    /* Blue */
  --accent: #d84315;     /* Orange */
  --background: #ffffff; /* White */
}
```

### استخدام الألوان

```tsx
<div className="bg-primary text-primary-foreground">
  Primary Color
</div>

<div className="bg-accent text-accent-foreground">
  Accent Color
</div>
```

### Responsive Design

```tsx
{/* Mobile first approach */}
<div className="
  text-sm           {/* Mobile */}
  md:text-base      {/* Tablet */}
  lg:text-lg        {/* Desktop */}
">
  Responsive Text
</div>
```

---

## ✨ الأنيميشن

### استخدام Motion

```typescript
import { motion } from 'motion/react';

// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// With variants
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

---

## 🔧 Backend و Supabase

### إعداد Supabase Client

```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);
```

### استدعاء API

```typescript
// Example: Fetch data
const { data, error } = await supabase
  .from('table_name')
  .select('*')
  .eq('field', 'value');

// Example: Insert data
const { data, error } = await supabase
  .from('table_name')
  .insert([{ field: 'value' }]);
```

### Edge Functions

```typescript
// Call edge function
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-8bb3c8fe/route`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${publicAnonKey}`,
    },
    body: JSON.stringify({ data }),
  }
);
```

---

## 📝 نظام العقود

### تدفق العمل

1. **ملء النموذج** - المستخدم يملأ تفاصيل ��لعقد
2. **معاينة العقد** - عرض المعلومات قبل الإرسال
3. **إرسال رمز التحقق** - إرسال كود للبريد الإلكتروني
4. **التحقق والتوقيع** - إدخال الكود لتأكيد العقد
5. **توليد PDF** - إنشاء ملف PDF للعقد
6. **الحفظ** - تخزين العقد في Supabase

### إضافة حقل جديد

```typescript
// 1. في ContractForm.tsx
interface ContractData {
  // ... existing fields
  newField: string; // Add new field
}

// 2. في النموذج
<Input
  value={formData.newField}
  onChange={(e) => handleInputChange('newField', e.target.value)}
/>

// 3. في ContractPreview.tsx
<div className="field">
  <span className="field-label">New Field:</span>
  <span className="field-value">{formData.newField}</span>
</div>

// 4. في supabase/functions/server/index.tsx
// تحديث دالة generateContractHTML لتشمل الحقل الجديد
```

---

## 🧪 الاختبار

### إضافة Tests

```bash
# تثبيت testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

```typescript
// Example test
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with label', () => {
  render(<Button label="Click me" onClick={() => {}} />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

---

## 🚀 النشر

### البناء للإنتاج

```bash
# Build
npm run build

# الملفات المبنية في: dist/
```

### النشر على Vercel

```bash
# تثبيت Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### النشر على Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### متغيرات البيئة

تأكد من إضافة:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

## 🔍 نصائح وحيل

### 1. Hot Reload

```bash
# إذا توقف hot reload
# أغلق الخادم واحذف node_modules/.vite
rm -rf node_modules/.vite
npm run dev
```

### 2. TypeScript Errors

```bash
# إعادة بناء types
npx tsc --noEmit
```

### 3. Tailwind not working

```bash
# تأكد من أن tailwindcss في vite.config.ts
# تأكد من import App.css في main.tsx
```

### 4. Supabase Connection Issues

```typescript
// تحقق من:
console.log('Project ID:', projectId);
console.log('Anon Key:', publicAnonKey);
```

---

## 📚 موارد إضافية

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🤝 المساهمة

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create Pull Request on GitHub/GitLab
```

### Commit Messages

استخدم conventional commits:

- `feat:` ميزة جديدة
- `fix:` إصلاح خطأ
- `docs:` تحديث التوثيق
- `style:` تغييرات التنسيق
- `refactor:` إعادة هيكلة الكود
- `test:` إضافة اختبارات
- `chore:` مهام صيانة

---

## 📞 الدعم

للحصول على المساعدة:
1. راجع `README.md`
2. راجع `FILE_ORGANIZATION_GUIDE.md`
3. راجع `CONTRACT_SYSTEM_README.md`
4. تواصل مع الفريق

---

✨ **Happy Coding!** ✨