// تغيير الصورة الرئيسية عند الضغط على الصورة المصغّرة
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(btn => {
  btn.addEventListener('click', () => {
    thumbs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const img = btn.querySelector('img');
    mainImage.src = img.getAttribute('src');
    mainImage.alt = img.getAttribute('alt') || 'product image';
  });
});

// التحكم في الكمية
const qtyInput = document.getElementById('qtyInput');
document.getElementById('inc').addEventListener('click', () => {
  qtyInput.value = String(parseInt(qtyInput.value || '1', 10) + 1);
});
document.getElementById('dec').addEventListener('click', () => {
  const v = Math.max(1, parseInt(qtyInput.value || '1', 10) - 1);
  qtyInput.value = String(v);
});
qtyInput.addEventListener('input', () => {
  const v = Math.max(1, parseInt(qtyInput.value || '1', 10));
  qtyInput.value = isNaN(v) ? '1' : String(v);
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});
