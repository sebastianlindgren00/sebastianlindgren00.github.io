import { motion } from 'framer-motion';
import IconButton from "./icon-button";
import GithubIcon from "./icons/github-icon";

type SkillProps = {
    title: string;
    text: string;
    emoji?: string;
    imgSrc?: string;
    videoSrc?: string;
    githubLink?: string;
};

function Project ({title, text, emoji, imgSrc, videoSrc, githubLink}: SkillProps) {

    return (
        
        <motion.div 
        className="w-1/3 flex flex-col bg-[rgba(255,255,255,0.5)] rounded-md shadow-lg "
        initial={{ backgroundColor: 'white', opacity: 0.7}}
        whileHover={{ backgroundColor: "white", opacity: 1}}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        >
        <div className='flex flex-row m-auto'>
        <h1 className="font-semibold text-lg">{title}</h1>
        <h1 className="text-lg ml-2">{emoji}</h1>
        </div>
        {text}
        <img src={imgSrc} className='m-auto pb-12 pt-8' />
        <IconButton Icon={GithubIcon} url={githubLink} type="project"/>
        </motion.div>
    );
}

export default Project;