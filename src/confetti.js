import confetti from 'canvas-confetti';

export function frame() {
    const canvasElement= document.getElementById('confetti_canvas');

    if (!canvasElement) return;

    let skew = 1;
    const confettiInstance = confetti.create(canvasElement, {
        resize: true,
    });
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function animate() {
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
