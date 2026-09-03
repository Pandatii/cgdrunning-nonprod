import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbwIWIZDXbOqy7L-gZlOA8QSHhkjY-H-HDUobfvVRJRhBOXbZI03EkxScIvc5IUWW3JM/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้