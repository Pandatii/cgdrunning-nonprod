import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbzAdYCFU5-9BPlBBfqWZxu4LwnKaQE9NFel9ztoEH6tysGU_qXAktS5xf5p9CoQyBtc/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้