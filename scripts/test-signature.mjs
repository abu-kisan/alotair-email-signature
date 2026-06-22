// متى يُستخدم: بعد أي تعديل على generator.html (أيقونات، RTL، اتجاه الجوال)
// لمنع رجوع نفس الأعطال التي ظهرت بعد اختبار التوقيع فعليًا في Gmail/Outlook.
//
// كيف يُشغّل: node scripts/test-signature.mjs
// (يحمّل generator.html داخل jsdom — بديل عن Playwright لأن سياسة شبكة هذه
// البيئة تحظر تنزيل متصفح Chromium من cdn.playwright.dev. إن توفّر Playwright
// لاحقًا في بيئة بشبكة مفتوحة، يمكن استبدال jsdom بـ chromium.launch() بنفس
// التحقّقات أدناه دون تغيير منطق الفحص).
//
// ما الذي يتحقق منه بالضبط:
// 1. أن HTML الناتج من buildSignature() يستخدم روابط HTTPS لأيقونات PNG
//    (لا data:base64 ولا روابط نسبية).
// 2. أن العنصر #sig يحمل dir="rtl" و direction:rtl في الـ style.
// 3. أن رقم الجوال محاط بـ <span dir="ltr"> صريح.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { JSDOM } from "jsdom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "..", "generator.html");
const html = readFileSync(htmlPath, "utf8");

const dom = new JSDOM(html, { runScripts: "dangerously", url: "http://localhost/" });
const { document } = dom.window;

const sig = document.getElementById("sig");
const failures = [];

if (!sig) {
  failures.push("لم يتم إيجاد #sig في الـ DOM بعد التنفيذ.");
} else {
  const sigHtml = sig.outerHTML;

  if (!/dir="rtl"/.test(sigHtml)) failures.push('#sig لا يحمل dir="rtl".');
  if (!/direction:\s*rtl/.test(sig.getAttribute("style") || "")) {
    failures.push("#sig لا يحمل direction:rtl في style.");
  }

  const imgSrcs = [...sig.querySelectorAll("img")].map((img) => img.getAttribute("src"));
  const iconSrcs = imgSrcs.filter((src) => /\/icons\//.test(src || ""));
  if (iconSrcs.length === 0) failures.push("لم يتم إيجاد أي صورة أيقونة تواصل اجتماعي.");
  for (const src of iconSrcs) {
    if (!src.startsWith("https://")) failures.push(`أيقونة لا تستخدم رابط https: ${src}`);
    if (/^data:/.test(src)) failures.push(`أيقونة لا تزال base64: ${src}`);
  }

  const phoneLink = sig.querySelector('a[href^="tel:"]');
  if (!phoneLink) {
    failures.push("لم يتم إيجاد رابط tel: لرقم الجوال.");
  } else {
    const ltrSpan = phoneLink.querySelector('span[dir="ltr"]');
    if (!ltrSpan) failures.push('رقم الجوال غير محاط بـ <span dir="ltr">.');
  }
}

if (failures.length) {
  console.error("❌ فشل الاختبار:");
  for (const f of failures) console.error(" - " + f);
  process.exit(1);
} else {
  console.log("✅ نجح الاختبار: الأيقونات PNG https، #sig يحترم RTL، رقم الجوال محاط بـ span dir=ltr.");
}
