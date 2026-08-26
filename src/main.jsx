import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbzv4l10GhCW0_a2davh-SpGpyyeAOAh6zHxVK29HjvA40ztX_4gcsyX1vukvxxOeZv0/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้