import { useState, useCallback, useRef } from 'react';

// 페인트 방울의 기본 속성
const createDrip = (width, height) => {
    const colors = ['#2E7D32', '#8D6E63', '#29B6F6', '#6B7280']; // Eco Green, Earth Brown, Clear Sky Blue, Medium Gray
    return {
        x: Math.random() * width,
        y: -Math.random() * height, // 화면 위에서 시작
        length: Math.random() * 200 + 100, // 떨어지는 길이
        speed: Math.random() * 2 + 1, // 떨어지는 속도
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 2 + 1, // 페인트 굵기
    };
};

export const useDrippingPaint = () => {
    const [drips, setDrips] = useState([]);
    const dripCount = 50; // 떨어지는 페인트 방울의 수

    const initDrips = useCallback((width, height) => {
        const newDrips = [];
        for (let i = 0; i < dripCount; i++) {
            newDrips.push(createDrip(width, height));
        }
        setDrips(newDrips);
    }, []);

    const updateDrips = useCallback((width, height) => {
        setDrips(prevDrips =>
            prevDrips.map(drip => {
                let newY = drip.y + drip.speed;

                // 페인트가 화면 아래로 사라지면 다시 위에서 시작
                if (newY > height + drip.length) {
                    return createDrip(width, height);
                }

                return {
                    ...drip,
                    y: newY,
                };
            })
        );
    }, []);

    return {
        drips,
        initDrips,
        updateDrips,
    };
};