import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbwC-FQSz0VMvHe0bL77omGE49v9BvsM0wvkHkO3AXsXyr-pRNwD8tVLepvoc4RLfCc-/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้