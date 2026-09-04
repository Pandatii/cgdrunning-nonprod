import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbzdUzRWjxtCLW32UtbWjEk3vLui82GRWRITY4csv1JwM9HcL4DW3NyZVJoHSKH8COmx/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้