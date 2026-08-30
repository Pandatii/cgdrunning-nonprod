import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbyThrjF1I7Z4dwELkkhpsDcPRFAORF4Ba6lkgLwKC38L1ZX9vZG-FcN0NVgM1Puy-In/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้