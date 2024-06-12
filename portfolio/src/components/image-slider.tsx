import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    enter: {
        x: 1000,
        opacity: 0,
    },
    center: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    },
    exit: {
        x: -1000,
        opacity: 0,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    }
};

function ImageSlider({ imgSrc }: { imgSrc: string[] }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let timer = 0;
        const interval = setInterval(() => {
            timer = (timer + 1) % imgSrc.length;
            setCurrentImage(timer);
        }, 2000);

        // Cleanup interval on component unmount or imgSrc change
        return () => clearInterval(interval);
    }, [imgSrc]);

    return (
        <div className="relative image-slider-container">
            <AnimatePresence initial={false} mode='wait'>
                <motion.img
                    key={currentImage}
                    src={imgSrc[currentImage]}
                    className="p-8 relative mx-auto rounded-lg overflow-hidden"
                    alt="Project visual"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                />
            </AnimatePresence>
        </div>
    );
}

export default ImageSlider;
