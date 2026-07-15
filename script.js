// โค้ดสร้างเอฟเฟกต์กลีบซากุระร่วง
document.addEventListener("DOMContentLoaded", () => {
    // สร้างสไตล์ CSS สำหรับกลีบดอกไม้ในตัวสคริปต์
    const style = document.createElement('style');
    style.innerHTML = `
        .sakura-petal {
            position: fixed;
            top: -10px;
            background-color: #ffb7c5;
            border-radius: 15px 0 15px 10px; /* ทรงกลีบดอกไม้ */
            pointer-events: none;
            z-index: 9999;
            animation: fall linear infinite;
            opacity: 0.8;
        }
        @keyframes fall {
            0% {
                top: -10px;
                transform: translateX(0) rotate(0deg);
            }
            100% {
                top: 100vh;
                transform: translateX(100px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);

    // ฟังก์ชันสร้างกลีบดอกไม้
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("sakura-petal");

        // สุ่มขนาดกลีบดอกไม้
        const size = Math.random() * 8 + 6; // 6px - 14px
        petal.style.width = `${size}px`;
        petal.style.height = `${size + 4}px`;

        // สุ่มตำแหน่งเริ่มต้นแนวนอน
        petal.style.left = Math.random() * window.innerWidth + "px";

        // สุ่มเวลาในการตก (ความเร็ว) และเวลาหน่วงเริ่มต้น
        const duration = Math.random() * 3 + 4; // 4s - 7s
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = Math.random() * 5 + "s";

        // สุ่มสีให้มีอ่อนเข้มสลับกันดูธรรมชาติ
        const colors = ['#ffb7c5', '#e08b9b', '#ffe4e8'];
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(petal);

        // ลบกลีบดอกไม้ออกเมื่อตกทะลุหน้าจอไปแล้วเพื่อไม่ให้หนักเครื่อง
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // สร้างกลีบดอกไม้จำนวน 30 กลีบกระจายตัวกัน
    for (let i = 0; i < 30; i++) {
        createPetal();
    }

    // ปล่อยกลีบดอกไม้ใหม่เรื่อยๆ ทุกๆ 300 มิลลิวินาที
    setInterval(createPetal, 300);
});

