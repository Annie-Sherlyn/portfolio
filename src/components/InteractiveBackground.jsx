import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Safety check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // In reduced motion, we just return the static gradients via CSS (handled in the stylesheet)
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Virtual mouse position to smoothly interpolate toward the real mouse position
    let mouse = { x: width / 2, y: height / 2 };
    let smoothMouse = { x: width / 2, y: height / 2 };
    
    // Trail positions
    const trail = [];
    const TRAIL_LENGTH = 15;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Palette Colors - Extremely subtle opacities for floating elements
    const palette = [
      'rgba(94, 170, 168, 0.15)', // Muted Teal
      'rgba(31, 111, 104, 0.15)', // Deep Teal
      'rgba(242, 199, 199, 0.15)', // Cherry Blush
      'rgba(213, 243, 216, 0.15)', // Pale Green
      'rgba(255, 183, 197, 0.1)'   // Tiny Bright Pink
    ];

    // Increased floating geometries
    const nodes = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      originX: Math.random() * width,
      originY: Math.random() * height,
      size: Math.random() * 4 + 1.5,
      color: palette[Math.floor(Math.random() * palette.length)],
      vx: 0,
      vy: 0,
      baseSpeed: Math.random() * 0.3 + 0.1,
      angle: Math.random() * Math.PI * 2,
      type: Math.random() > 0.6 ? 'circle' : (Math.random() > 0.5 ? 'square' : 'diamond')
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.06;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.06;

      // Update and draw aura trail
      trail.push({ x: smoothMouse.x, y: smoothMouse.y });
      if (trail.length > TRAIL_LENGTH) {
        trail.shift();
      }

      ctx.beginPath();
      for (let i = 0; i < trail.length; i++) {
        const point = trail[i];
        const opacity = (i / trail.length) * 0.1; // Very subtle
        const size = (i / trail.length) * 50;
        
        ctx.moveTo(point.x, point.y);
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 170, 168, ${opacity * 0.25})`; // Muted teal soft glow
        ctx.fill();
      }

      // Update and draw nodes
      nodes.forEach(node => {
        // Natural drifting drift
        node.angle += 0.01;
        const driftX = Math.cos(node.angle) * node.baseSpeed;
        const driftY = Math.sin(node.angle) * node.baseSpeed;
        
        // Gravitation logic
        const dx = smoothMouse.x - node.x;
        const dy = smoothMouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // If cursor is near, gently pull toward it or repel slightly
        if (dist < 200) {
          const force = (200 - dist) / 200;
          // Gently repel some, attract others for natural feel
          const direction = node.size % 2 > 1 ? 1 : -1; 
          node.vx += dx * force * 0.0004 * direction;
          node.vy += dy * force * 0.0004 * direction;
        }
        
        // Friction and return to origin slightly
        node.vx *= 0.95;
        node.vy *= 0.95;
        
        // Return to origin pull
        const ox = node.originX - node.x;
        const oy = node.originY - node.y;
        node.vx += ox * 0.00015;
        node.vy += oy * 0.00015;
        
        node.x += node.vx + driftX;
        node.y += node.vy + driftY;

        // Keep within bounds
        if (node.x < -50) node.x = width + 50;
        if (node.x > width + 50) node.x = -50;
        if (node.y < -50) node.y = height + 50;
        if (node.y > height + 50) node.y = -50;

        // Draw node
        ctx.beginPath();
        ctx.fillStyle = node.color;
        
        if (node.type === 'circle') {
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        } else if (node.type === 'square') {
          // Rounded square approximation
          const s = node.size;
          ctx.roundRect ? ctx.roundRect(node.x - s/2, node.y - s/2, s, s, 2) : ctx.rect(node.x - s/2, node.y - s/2, s, s);
        } else {
          // Diamond
          const s = node.size * 1.5;
          ctx.moveTo(node.x, node.y - s);
          ctx.lineTo(node.x + s, node.y);
          ctx.lineTo(node.x, node.y + s);
          ctx.lineTo(node.x - s, node.y);
          ctx.closePath();
        }
        ctx.fill();
      });

      // Update CSS variables for the gradient orbs and parallax
      if (containerRef.current) {
        document.documentElement.style.setProperty('--mouse-x', `${smoothMouse.x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${smoothMouse.y}px`);
        
        // Parallax for glows (gentle shift)
        const parallaxX = (smoothMouse.x / width - 0.5) * 20;
        const parallaxY = (smoothMouse.y / height - 0.5) * 20;
        document.documentElement.style.setProperty('--parallax-x', `${parallaxX}px`);
        document.documentElement.style.setProperty('--parallax-y', `${parallaxY}px`);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="interactive-canvas-wrapper">
      <canvas ref={canvasRef} className="interactive-bg-canvas" />
      <div className="interactive-glows">
        <div className="glow glow-teal" />
        <div className="glow glow-blush" />
        <div className="glow glow-green" />
      </div>
    </div>
  );
};

export default InteractiveBackground;
