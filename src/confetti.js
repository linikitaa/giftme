import confetti from 'canvas-confetti';
export function frame() {
    const canvas = document.getElementById('confetti_canvas');

    if (!canvas) return;

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    // Инициализируем конфетти с использованием канваса
    const confettiInstance = confetti.create(canvas, {
        resize: true, // Канвас изменяет размер при изменении окна
    });

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function animate() {
        // const timeLeft = animationEnd - Date.now();
        // const ticks = Math.max(200, 500 * (timeLeft / duration));
        // skew = Math.max(0.8, skew - 0.001);
        //
        // // Настраиваем параметры для мобильных устройств
        // const isMobile = window.innerWidth <= 768; // Примерное определение мобильного устройства
        // const scalar = isMobile ? randomInRange(0.2, 0.5) : randomInRange(0.4, 1); // Размер снежинок
        // const gravity = isMobile ? randomInRange(0.2, 0.4) : randomInRange(0.4, 0.6); // Скорость падения

        confettiInstance({
            particleCount: 1,
            startVelocity: 0,
            ticks: 300, // Уменьшено для контроля скорости
            origin: {
                x: Math.random(),
                y: Math.random() * skew - 0.2,
            },
            colors: ["#ffffff"],
            shapes: ["circle"],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
            disableForReducedMotion: true,
        });

        setTimeout(animate, 100) // Более редкая анимация на мобильных
    }

    setTimeout(() => {
        animate();
    }, 100);
}