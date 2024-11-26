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
        // useWorker: true, // Оптимизация с использованием Web Worker
    });

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function animate() {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confettiInstance({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                y: Math.random() * skew - 0.2,
            },
            colors: ['#ffffff'],
            shapes: ['circle'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
            disableForReducedMotion: true,
        });

        // if (timeLeft > 0) {
        //     requestAnimationFrame(animate);
        // }
        setTimeout(animate, 100)
    }

    // requestAnimationFrame(animate);
    animate();
}
