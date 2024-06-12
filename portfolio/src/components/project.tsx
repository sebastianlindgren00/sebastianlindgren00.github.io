import { motion } from 'framer-motion';
import IconButton from "./icon-button";
import GithubIcon from "./icons/github-icon";
import { useState, useEffect } from 'react';
import ImageSlider from './image-slider';

type SkillProps = {
    title: string;
    text: string;
    emoji?: string;
    imgSrc?: string[];
    videoSrc?: string;
    githubLink?: string;
    tags?: string[];
};

function createTags(tags?: string[]) {
    return tags?.map((tag) => (
        <div key={tag} className="bg-gray-200 rounded-full px-2 py-1 text-sm">{tag}</div>
    ));
}

function EmojiPicker({ emoji }: { emoji?: string }) {
    const [currentEmoji, setCurrentEmoji] = useState("🌳");
    const emojis = ["🌳", "🍂", "❄️", "🌱"];

    useEffect(() => {
        if (emoji === "tree") {
            let timer = 0;
            const interval = setInterval(() => {
                timer = (timer + 1) % emojis.length;
                setCurrentEmoji(emojis[timer]);
            }, 2000);

            // Cleanup interval on component unmount or emoji change
            return () => clearInterval(interval);
        }
    }, [emoji]);

    if (emoji === "tree") {
        return <h1 className="text-lg ml-2">{currentEmoji}</h1>;
    } else {
        return <h1 className="text-lg ml-2">{emoji}</h1>;
    }
}

function Project({ title, text, emoji, imgSrc, videoSrc, githubLink, tags }: SkillProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="flex flex-col bg-[white] overflow-hidden rounded-xl shadow-lg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='flex flex-row'>
                <div className='flex flex-row space-x-2 m-auto'>
                    <h1 className="font-semibold text-lg">{title}</h1>
                    <EmojiPicker emoji={emoji} />
                </div>
                <div className='float-right pr-4 pt-4'>
                    <IconButton width='w-8' customClassName='' Icon={GithubIcon} url={githubLink} type="project" />
                </div>
            </div>
            <div className='text-center pt-5'>
                {text}
            </div>
            {isHovered && imgSrc && <ImageSlider imgSrc={imgSrc} />}
            {!isHovered && imgSrc && <img src={imgSrc[0]} className="p-8 relative mx-auto rounded-lg overflow-hidden" alt="Project visual" />}
            <div className='flex flex-row space-x-2 pt-5 pb-5 m-auto'>
                {createTags(tags)}
            </div>
        </motion.div>
    );
}

export default Project;
