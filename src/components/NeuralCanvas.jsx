import React, { useEffect, useRef } from 'react';

const NeuralCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Interactive mouse tracking
        const mouse = { x: -1000, y: -1000, radius: 120 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Nodes configuration
        const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
        const nodes = [];

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                radius: Math.random() * 1.8 + 1.2,
                color: i % 3 === 0 ? 'rgba(0, 113, 227, ' : i % 3 === 1 ? 'rgba(191, 90, 242, ' : 'rgba(41, 151, 255, '
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby nodes
            for (let i = 0; i < nodes.length; i++) {
                const nodeA = nodes[i];

                // Update position
                nodeA.x += nodeA.vx;
                nodeA.y += nodeA.vy;

                // Bounce off edges
                if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
                if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

                // Mouse interaction repulsion/attraction
                const dxMouse = mouse.x - nodeA.x;
                const dyMouse = mouse.y - nodeA.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distMouse < mouse.radius) {
                    const force = (mouse.radius - distMouse) / mouse.radius;
                    nodeA.x -= (dxMouse / distMouse) * force * 1.5;
                    nodeA.y -= (dyMouse / distMouse) * force * 1.5;
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
                ctx.fillStyle = nodeA.color + (distMouse < mouse.radius ? '0.9)' : '0.45)');
                ctx.shadowBlur = distMouse < mouse.radius ? 10 : 0;
                ctx.shadowColor = '#0071e3';
                ctx.fill();

                // Draw links
                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeB = nodes[j];
                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        const alpha = (1 - dist / 130) * 0.22;
                        ctx.beginPath();
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.75;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1] opacity-75"
        />
    );
};

export default NeuralCanvas;
