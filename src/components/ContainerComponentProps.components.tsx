
'use client'

import Image from 'next/image';
import { useState, useEffect, ReactNode, CSSProperties } from 'react';

interface ContainerComponentProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void
}

const ContainerComponentProps = ({ children, className, style, onClick }: ContainerComponentProps) => {
    const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
    const [boxShadow, setBoxShadow] = useState({
        x: 0,
        y: 0,
    });
    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const offsetX = (clientX / window.innerWidth - 0.5) * 1.05; // Normalize X coordinate
        const offsetY = (clientY / window.innerHeight - 0.5) * 1.05; // Normalize Y coordinate

        // Adjust the box-shadow values based on mouse position
        setBoxShadow({
            x: offsetX * 20,
            y: offsetY * 20,
        });
    };
    useEffect(() => {

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculateShadowLength = (value: number) => {
        // Adjust the multiplier to control the shadow length
        return value * 2;
    };

    return (
        <div
            onClick={onClick}
            className={`${className}  `}
            style={{
                ...style,
                borderRadius: `15px`,
                transition: 'box-shadow 0.3s ease',
                boxShadow: `  ${boxShadow.x}px ${boxShadow.y}px 10px #c9c9c9,   ${-boxShadow.x}px ${-boxShadow.y}px 10px #ffffff`,
            }}
        >
            {children}
        </div >
    );
};

export default ContainerComponentProps;
