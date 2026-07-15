document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('sakura-container');
    const petalCount = 40; // จำนวนกลีบซากุระ

    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // สุ่มขนาดให้ดูมีมิติ
        const size = Math.random() * 8 + 8;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.5}px`;
        
        // สุ่มตำแหน่งเริ่มต้น
        petal.style.left = `${Math.random() * 100}vw`;
        
        // สุ่มความเร็ว
        const duration = Math.random() * 6 + 4;
        petal.style.animationDuration = `${duration}s`;
        
        // สุ่มดีเลย์
        petal.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(petal);
    }
});
