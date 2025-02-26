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
    const [isHoveringIcon, setIsHoveringIcon] = useState(false);
    let iconText;
    let button;

    switch (type) {
        case "github":
            iconText = <h1 className="font-semibold ml-14">
                Press the icon to get to my 
                <span className="text-sky-blue"> Github</span>
            </h1>;
            renderButton();
            break;
        case "linkedin":
            iconText = <h1 className="font-semibold ml-14">
                Press the icon to get to my 
                <span className="text-sky-blue"> LinkedIn</span>
            </h1>;
            renderButton();
            break;
    }

    function renderButton() {
           
        button =
        <motion.div
            onHoverStart={() => handleIconHover(true)}
            onHoverEnd={() => handleIconHover(false)}
            className="flex items-center"
            initial={{ scale: 1, fill: "white" }}
            whileHover={{ fill: "var(--color-sky-blue)", scale: 1.05}}
            transition={{ duration: 1.0, ease: "easeInOut" }}
        >   
            <button onClick={handleClick}>
                <Icon className={`${width} ${customClassName}`} />
            </button>
        </motion.div>
    }

    function handleClick() {
        window.open(url, "_blank");
    }

    function handleIconHover(isHovering: boolean) {
        setIsHoveringIcon(isHovering);
    }


    return (
        <div className="flex items-center">
            {button}
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: isHoveringIcon ? 1 : 0}}
                transition={{ duration: 1.0, ease: "easeInOut" }}
            >
            {isHoveringIcon && iconText}
            </motion.div>
        </div>
    );
}

export default IconButton;
