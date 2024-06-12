import { motion } from 'framer-motion';
import React, { useState } from 'react';

type IconButtonProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    url?: string;
    type?: string;
};

function IconButton({ Icon, url, type }: IconButtonProps) {
    const [isHovering, setIsHovering] = useState(false);
    let iconText;
    let githubButton;
    let isProject = false;

    switch (type) {
        case "resume":
            iconText = <h1 className="font-semibold ml-14">Press the icon to get to my <span className="text-slate-300">Resume</span></h1>;
            projectGithubButton();
            isProject = false;
            break;
        case "github":
            iconText = <h1 className="font-semibold ml-14">Press the icon to get to my <span className="text-slate-300">Github</span></h1>;
            projectGithubButton();
            isProject = false;
            break;
        case "linkedin":
            iconText = <h1 className="font-semibold ml-14">Press the icon to get to my <span className="text-slate-300">LinkedIn</span></h1>;
            projectGithubButton();
            isProject = false;
            break;
        case "leetcode":
            iconText = <h1 className="font-semibold ml-14">Press the icon to get to my <span className="text-slate-300">Leetcode</span></h1>;
            projectGithubButton();
            isProject = false;
            break;
        case "project":
            iconText = "";
            isProject = true;
            projectGithubButton();
            break;
        default:
            break;
    }

    function projectGithubButton() {
           
        if (isProject === false) {
            githubButton =
            <motion.div
                onHoverStart={() => handleHover(true)}
                onHoverEnd={() => handleHover(false)}
                className="flex items-center"
                initial={{ scale: 1 }}
                whileHover={{ fill: "rgb(203 213 225)", scale: 1.05}}
                transition={{ duration: 0.5 }}
            >   
                <button onClick={handleClick}>
                    <Icon className="w-12" />
                </button>
            </motion.div>
        }
        else {
            githubButton =
            <button onClick={handleClick}>
            <Icon className="w-12" />
            </button> 
        }
    }

    function handleClick() {
        window.open(url, "_blank");
    }

    function handleHover(isHovering: boolean) {
        setIsHovering(isHovering);
    }


    return (
        <div className="flex items-center">
            {githubButton}
            {!isProject && (
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: isHovering ? 1 : 0}}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                >
                {isHovering && iconText}
                </motion.div>
            )}
        </div>
    );
}

export default IconButton;