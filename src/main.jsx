import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbzdM-Enuu-i4upy2DCSx3jx6htc6qGrbvwKUHTCSLECvd1JhPPGU2F8b_uFhn2-YEIn/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้