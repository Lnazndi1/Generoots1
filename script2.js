const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  wrapper.classList.remove('active');
});

registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.remove('active');
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ---------------------------
// عناصر تسجيل الدخول
// ---------------------------
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

// ---------------------------
// عناصر إنشاء حساب
// ---------------------------
const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regPassword = document.getElementById("regPassword");
const regBtn = document.getElementById("regBtn");
const regError = document.getElementById("regError");

// التحقق من صيغة الإيميل
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// ---------------------------
// إنشاء حساب
// ---------------------------
regBtn.addEventListener("click", function(e) {
  e.preventDefault();
  
  if (regName.value.trim() === "" || regEmail.value.trim() === "" || regPassword.value.trim() === "") {
    regError.textContent = "❌ جميع الحقول مطلوبة!";
    regError.style.color = "red";
    return;
  }
  
  if (!isValidEmail(regEmail.value)) {
    regError.textContent = "❌ البريد الإلكتروني غير صحيح!";
    regError.style.color = "red";
    return;
  }
  
  if (regPassword.value.length < 8) { // تم تعديل الرقم من 6 إلى 8
    regError.textContent = "❌ كلمة المرور يجب أن تكون 8 أحرف على الأقل!";
    regError.style.color = "red";
    return;
  }
  
  // التخزين
  localStorage.setItem("userName", regName.value);
  localStorage.setItem("userEmail", regEmail.value);
  localStorage.setItem("userPassword", regPassword.value);
  
  regError.textContent = "✔ تم إنشاء الحساب بنجاح!";
  regError.style.color = "green";
});

// ---------------------------
// تسجيل الدخول
// ---------------------------
loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  
  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");
  
  if (!savedEmail || !savedPassword) {
    loginError.textContent = "❌ لا يوجد حساب مُسجَّل! أنشئ حساب أولاً.";
    loginError.style.color = "red";
    return;
  }
  
  if (!isValidEmail(loginEmail.value)) {
    loginError.textContent = "❌ صيغة البريد الإلكتروني غير صحيحة!";
    loginError.style.color = "red";
    return;
  }
  
  if (loginEmail.value === savedEmail && loginPassword.value === savedPassword) {
    loginError.textContent = "";
    window.location.href = "homepage.html";
  } else {
    loginError.textContent = "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة!";
    loginError.style.color = "red";
  }
});