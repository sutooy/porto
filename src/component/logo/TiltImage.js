
'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

const TiltingImage = () => {
    const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            const x = (clientX / window.innerWidth - 0.5) * 100; // Adjust the tilt range
            const y = (clientY / window.innerHeight - 0.5) * 100;

            setTiltValues({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculateShadowLength = (value) => {
        // Adjust the multiplier to control the shadow length
        return value * 1;
    };

    return (
        <div style={{
            width: '200px', // Adjust the size of the square container
            height: '200px',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '50%', // Make the container a circle
            // transform: `rotateX(${tiltValues.y}deg) rotateY(${tiltValues.x}deg)`,
            boxShadow: `0 0 5px rgba(0, 0, 0, 0.1), 
            ${calculateShadowLength(tiltValues.x)}px 
            ${calculateShadowLength(tiltValues.y)}px 10px rgba(0, 0, 0, 0.1)`,
            transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',

        }}>
            <Image
                className='rounded-full'
                width={100} height={100}
                src="/PP.png"
                alt="Tilting Image"
                style={{
                    width: '100%', // Make the image fill the container
                    height: 'auto',
                }}
            />
        </div>
    );
};

export default TiltingImage;
