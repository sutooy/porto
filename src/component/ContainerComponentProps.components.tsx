
'use client'

import Image from 'next/image';
import { useState, useEffect, ReactNode, CSSProperties } from 'react';

interface ContainerComponentProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;

}

const ContainerComponentProps = ({ children, className, style }: ContainerComponentProps) => {
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
        return value * 0.9;
    };

    return (
        <div
            className={`${className} rounded-lg`}
            style={{
                ...style,
                borderRadius: `23px`,
                transition: 'box-shadow 0.3s ease',
                boxShadow: `inset ${boxShadow.x}px ${boxShadow.y}px 10px #d9d9d9,inset ${-boxShadow.x}px ${-boxShadow.y}px 10px #ffffff`,
            }}
        >
            {children}
        </div >
    );
};

export default ContainerComponentProps;
