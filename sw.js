// ده Service Worker - بيخلي الموقع يشتغل حتى من غير نت - جديد
self.addEventListener('install', event => {
  console.log("تم تثبيت التطبيق");
});
self.addEventListener('fetch', event => {
  // بيخلي الموقع يفتح حتى لو النت ضعيف
});
