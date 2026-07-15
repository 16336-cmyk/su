// ฟังก์ชันสร้างกลีบซากุระ
function createSakura() {
    const sakuraContainer = document.getElementById('sakura-container');
    const petal = document.createElement('div');
    petal.classList.add('sakura-petal');
    
    // สุ่มขนาดกลีบซากุระ (ระหว่าง 10px ถึง 25px)
    const size = Math.random() * 15 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // สุ่มตำแหน่งเริ่มต้นตามแนวนอน (0% - 100% ของหน้าจอ)
    petal.style.left = `${Math.random() * 100}vw`;
    
    // สุ่มความเร็วในการร่วงหล่น (ระหว่าง 4s ถึง 9s)
    const fallDuration = Math.random() * 5 + 4;
    petal.style.animationDuration = `${fallDuration}s`;
    
    // เพิ่มความโปร่งใสแบบสุ่มให้ดูมีมิติ
    petal.style.opacity = Math.random() * 0.5 + 0.4;

    // นำกลีบซากุระไปใส่ในหน้าเว็บ
    sakuraContainer.appendChild(petal);
    
    // ลบกลีบซากุระทิ้งเมื่อตกลงไปสุดหน้าจอ เพื่อไม่ให้เครื่องค้าง
    setTimeout(() => {
        petal.remove();
    }, fallDuration * 1000);
}

// สร้างกลีบซากุระใหม่ทุกๆ 300 มิลลิวินาที
setInterval(createSakura, 300);
