import { useEffect, useRef } from 'react';

const AnimatedGalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas muy dispersas
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 4 + 2.5,
        opacity: Math.random() * 0.25 + 0.08,
        color: ['#60a5fa', '#06b6d4', '#a78bfa'][Math.floor(Math.random() * 3)]
      });
    }

    const animate = () => {
      // Fondo casi transparente
      ctx.fillStyle = 'rgba(15, 23, 42, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity += (Math.random() - 0.5) * 0.015;
        particle.opacity = Math.max(0.08, Math.min(0.6, particle.opacity));

        // Rebote en bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50"></div>
    </>
  );
};

export default AnimatedGalaxyBackground;
