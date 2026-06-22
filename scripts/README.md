# scripts/

## test-signature.mjs

تحقق آلي من توقيع البريد المُولَّد في `generator.html`، يمنع رجوع 3 أعطال
ظهرت بعد اختبار التوقيع فعليًا في Gmail/Outlook:

1. أيقونات التواصل الاجتماعي base64 تختفي بعد الإرسال — يجب أن تكون PNG بروابط https.
2. عدم احترام Outlook لـ `dir="rtl"` على الجدول فقط.
3. انقلاب اتجاه رقم الجوال بعد الإرسال.

شغّله بعد أي تعديل على `generator.html`:

```
node scripts/test-signature.mjs
```

يعتمد على `jsdom` (تحميل `generator.html` وتنفيذ `buildSignature()` دون
متصفح فعلي) بدلًا من Playwright، لأن سياسة الشبكة في بيئة التطوير الحالية
تحظر تنزيل متصفح Chromium من `cdn.playwright.dev`.
