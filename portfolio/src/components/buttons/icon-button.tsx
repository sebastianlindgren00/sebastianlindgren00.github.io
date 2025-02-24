import { motion } from 'framer-motion';
import React, { useState } from 'react';

type IconButtonProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    url?: string;
    type?: string;
    customClassName?: string;
    width?: string;
};

function IconButton({ Icon, url, type, customClassName, width }: IconButtonProps) {
    const [isHovering, setIsHovering] = useState(false);
    let iconText;
    let githubButton;
    let isProject = false;

    switch (type) {
        case "github":
            iconText = <h1 className="font-semibold ml-14">Press the icon to get to my <span className="text-[#ff8c44]">Github</span></h1>;
            projectGithubButton();
            isProject = false;
            break;
        case "linkedin":
            iconText = <h1 className="font-semibold ml-14">Press the icon to get to my <span className="text-[#ff8c44]">LinkedIn</span></h1>;
            projectGithubButton();
            isProject = false;
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
                initial={{ scale: 1, fill: "button" }}
                whileHover={{ fill: "#ff8c44", scale: 1.05}}
                transition={{ duration: 0.5 }}
            >   
                <button onClick={handleClick}>
                    <Icon className={`${width} ${customClassName}`} />
                </button>
            </motion.div>
        }
        else {
            githubButton =
            <button onClick={handleClick}>
            <Icon className={`${width} ${customClassName}`} />
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
