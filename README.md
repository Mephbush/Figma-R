# VisCend - Visual Production & Web Solutions

موقع احترافي لـ VisCend، متخصصة في الإنتاج البصري (Studio) وحلول الويب (Web) والتسويق الرقمي (Marketing).

## 🌟 المميزات

- ✨ تصميم سينمائي حديث ومستقبلي
- 🌍 دعم ثنائي اللغة (العربية والإنجليزية) مع RTL
- 🌓 وضع داكن/فاتح قابل للتبديل
- 📱 تصميم متجاوب عبر جميع الأجهزة
- 🎬 أنيميشن مقدمة سلس يظهر مرة واحدة
- ✍️ نظام عقود متكامل مع توقيع رقمي
- 📧 نظام تحقق عبر البريد الإلكتروني
- 📄 توليد عقود PDF
- 🎨 تأثيرات تفاعلية متحركة
- 🖱️ تفاعلات المؤشر السينمائية

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لغة البرمجة
- **Vite** - أداة البناء
- **Tailwind CSS v4** - إطار التصميم
- **Motion (Framer Motion)** - أنيميشن متقدم
- **React Router** - التنقل بين الصفحات
- **Supabase** - قاعدة البيانات والمصادقة
- **Shadcn/UI** - مكونات UI احترافية
- **Lucide React** - أيقونات حديثة

## 📁 هيكل المشروع

```
منظم/
├── public/                 # ملفات عامة
├── src/
│   ├── assets/            # صور، أيقونات، خطوط
│   ├── components/        # مكونات React
│   │   ├── ui/           # مكونات Shadcn UI
│   │   └── figma/        # مكونات Figma
│   ├── pages/            # صفحات التطبيق
│   ├── hooks/            # React Hooks مخصصة
│   ├── lib/              # مكتبات مساعدة
│   ├── utils/            # وظائف مساعدة
│   ├── integrations/     # تكاملات خارجية
│   │   └── supabase/    # إعدادات Supabase
│   ├── App.tsx           # المكون الرئيسي
│   ├── App.css           # أنماط عامة
│   ├── main.tsx          # نقطة الدخول
│   └── vite-env.d.ts     # تعريفات TypeScript
├── supabase/             # Supabase Edge Functions
│   └── functions/
│       └── server/       # الخادم الخلفي
├── index.html            # HTML الرئيسي
├── package.json          # تبعيات المشروع
├── tsconfig.json         # إعدادات TypeScript
├── vite.config.ts        # إعدادات Vite
└── README.md             # هذا الملف
```

## 🚀 البدء

### المتطلبات الأساسية

- Node.js (v18 أو أحدث)
- npm أو yarn أو pnpm

### التثبيت

1. استنساخ المشروع:
```bash
git clone <repository-url>
cd منظم
```

2. تثبيت التبعيات:
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

3. إعداد المتغيرات البيئية:
```bash
cp .env.example .env
# قم بتحديث .env بمعلومات Supabase الخاصة بك
```

4. تشغيل الخادم التطويري:
```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
```

5. افتح المتصفح على `http://localhost:3000`

## 🏗️ البناء للإنتاج

```bash
npm run build
# أو
yarn build
# أو
pnpm build
```

الملفات المبنية ستكون في مجلد `dist/`

## 📦 معاينة البناء

```bash
npm run preview
# أو
yarn preview
# أو
pnpm preview
```

## 🔧 إعداد Supabase

1. أنشئ مشروع جديد على [Supabase](https://supabase.com)
2. احصل على URL و Anon Key
3. حدّث ملف `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
4. رفع Edge Functions:
```bash
supabase functions deploy make-server-8bb3c8fe
```

## 📧 إعداد Gmail API (اختياري)

لتفعيل إرسال البريد الإلكتروني الفعلي، راجع ملف `GMAIL_SETUP.md`

## 📝 نظام العقود

النظام يتضمن:
- ✅ نموذج عقد شامل مع حقول مفصلة
- ✅ نظام تحقق قوي عبر البريد الإلكتروني
- ✅ توقيع رقمي
- ✅ توليد PDF للعقود
- ✅ دعم كامل للغة العربية والإنجليزية
- ✅ تخزين آمن في Supabase

راجع `CONTRACT_SYSTEM_README.md` لمزيد من التفاصيل

## 🎨 التخصيص

### الألوان والثيمات

جميع متغيرات الألوان موجودة في `src/App.css` تحت:
- `:root` - الوضع الافتراضي (داكن)
- `.light` - الوضع الفاتح
- `.dark` - الوضع الداكن

### إضافة صفحة جديدة

1. أنشئ component في `src/pages/`
2. أضف route في `src/App.tsx`
3. أضف رابط في `src/components/Navigation.tsx`

## 📱 التجاوب

الموقع متجاوب بالكامل مع:
- 📱 الجوال (< 640px)
- 💻 التابلت (640px - 1024px)
- 🖥️ سطح المكتب (> 1024px)

## 🌐 دعم RTL

يتم التبديل التلقائي بين LTR و RTL حسب اللغة المختارة

## 📄 الترخيص

جميع الحقوق محفوظة © 2025 VisCend

## 🤝 المساهمة

للمساهمة في المشروع:
1. Fork المشروع
2. أنشئ branch للميزة الجديدة
3. Commit التغييرات
4. Push إلى branch
5. افتح Pull Request

## 📞 التواصل

- الموقع: [viscend.com](https://viscend.com)
- البريد: contact@viscend.com

---

صنع بـ ❤️ بواسطة VisCend