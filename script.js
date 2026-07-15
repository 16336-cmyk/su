document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('sakura-container');
    const petalCount = 30; // จำนวนกลีบซากุระที่ต้องการให้ตกพร้อมกัน

    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // สุ่มขนาด (กว้าง 8px ถึง 15px, ยาว 12px ถึง 20px)
        const width = Math.random() * 7 + 8;
        const height = Math.random() * 8 + 12;
        petal.style.width = `${width}px`;
        petal.style.height = `${height}px`;
        
        // สุ่มตำแหน่งเริ่มต้น (แกน X)
        petal.style.left = `${Math.random() * 100}vw`;
        
        // สุ่มความเร็วในการตก (3 วินาที ถึง 8 วินาที)
        const duration = Math.random() * 5 + 3;
        petal.style.animationDuration = `${duration}s`;
        
        // สุ่ม delay เพื่อไม่ให้ตกมาพร้อมกันทีเดียว
        petal.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(petal);
    }
});
