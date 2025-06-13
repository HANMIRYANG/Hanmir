import React, { useEffect, useRef } from 'react';
import { useDrippingPaint } from '../hooks/useDrippingPaint';

const PaintDripBackground = () => {
    const canvasRef = useRef(null);
    const { drips, initDrips, updateDrips } = useDrippingPaint();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDrips(canvas.width, canvas.height);
        };

        setCanvasDimensions();

        let animationFrameId;

        const animate = () => {
            // 희미하게 덮어씌워 잔상 효과 만들기
            ctx.fillStyle = 'rgba(17, 24, 39, 0.1)'; // bg-gray-900 with opacity
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drips.forEach(drip => {
                ctx.beginPath();
                ctx.moveTo(drip.x, drip.y);
                ctx.lineTo(drip.x, drip.y - drip.length); // 위쪽으로 꼬리 그리기
                ctx.strokeStyle = drip.color;
                ctx.lineWidth = drip.width;
                ctx.stroke();
            });

            updateDrips(canvas.width, canvas.height);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', setCanvasDimensions);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setCanvasDimensions);
        };
    }, [drips, initDrips, updateDrips]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};

export default PaintDripBackground;