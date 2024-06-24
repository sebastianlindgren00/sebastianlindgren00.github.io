import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
            x: { type: 'spring', stiffness: 800, damping: 100 },
            opacity: { duration: 0.2 }
        }
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: 'spring', stiffness: 1200, damping: 100 },
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
            x: { type: 'spring', stiffness: 800, damping: 100 },
            opacity: { duration: 0.2 }
        }
    })
};

function ImageSlider({ imgSrc }: { imgSrc: string[] }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextImage = () => {
        setDirection(1);
        setCurrentImage((prevIndex) => (prevIndex + 1) % imgSrc.length);
    };

    const prevImage = () => {
        setDirection(-1);
        setCurrentImage((prevIndex) => (prevIndex - 1 + imgSrc.length) % imgSrc.length);
    };

    const setImage = (index: number) => {
        setDirection(index > currentImage ? 1 : -1);
        setCurrentImage(index);
    };

    function renderArrows(length: number) {
        if (length <= 1) return null;
        return (
            <motion.div
            whileHover={{
                fill: "#a0aec0",
              }}
            >
                <div onClick={nextImage} className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight />
                </div>
                <div onClick={prevImage} className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowLeft />
                </div>
                </motion.div>
        );
    }

    return (
        <div className="relative image-slider-container h-64 w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                    key={currentImage}
                    src={imgSrc[currentImage]}
                    className="absolute inset-0 h-full w-full object-contain p-8 mx-auto rounded-lg overflow-hidden"
                    alt="Project visual"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                />
            </AnimatePresence>
            {renderArrows(imgSrc.length)}
            <div className="absolute bottom-0 left-0 right-0 top-40 flex justify-center space-x-2 p-4 mt-16">
                {imgSrc.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${index === currentImage ? 'bg-gray-800' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
