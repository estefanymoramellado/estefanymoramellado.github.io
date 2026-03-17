const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX - 6 + 'px';
    cursor.style.top = mouseY - 6 + 'px';
});

function animateRing() {
    ringX += (mouseX - ringX - 18) * 0.12;
    ringY += (mouseY - ringY - 18) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        ring.style.transform = 'scale(1.5)';
        ring.style.borderColor = 'rgba(201,168,76,0.8)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        ring.style.transform = 'scale(1)';
        ring.style.borderColor = 'rgba(201,168,76,0.4)';
    });
});

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const waves = Array.from({ length: 5 }, (_, i) => ({
    offset: i * (Math.PI * 2 / 5),
    speed: 0.0003 + i * 0.0001,
    amplitude: 80 + i * 30,
    freq: 0.003 + i * 0.001,
    color: ['rgba(124,58,237,', 'rgba(77,77,255,', 'rgba(168,85,247,', 'rgba(201,168,76,', 'rgba(99,27,255,'][i]
}));

let t = 0;
function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 1;

    waves.forEach((w, i) => {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 4) {
            const y = canvas.height * 0.4
                + Math.sin(x * w.freq + t * w.speed + w.offset) * w.amplitude
                + Math.sin(x * w.freq * 2 + t * w.speed * 1.5) * (w.amplitude * 0.4);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w.color + (0.06 - i * 0.008) + ')';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });

    requestAnimationFrame(drawCanvas);
}
drawCanvas();

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            e.target.querySelectorAll('.skill-bar').forEach(bar => {
                setTimeout(() => bar.classList.add('animate'), 200);
            });
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
