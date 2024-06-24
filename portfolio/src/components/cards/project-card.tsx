import React, { useState } from 'react';
import Project from "../project";
import { AnimatePresence, motion } from 'framer-motion';

const allProjects = [
    {
        title: "ToDo-Tulip",
        text: "A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS",
        emoji: "🌷",
        imgSrc: ["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"],
        githubLink: "https://github.com/sebastianlindgren00/todo-tulip",
        tags: ["Svelte", "TypeScript", "PocketBase", "TailwindCSS"]
    },
    {
        title: "Portfolio website",
        text: "This website, built with React, TypeScript, TailwindCSS and Deployed with Github Pages",
        emoji: "🌐",
        imgSrc: ["profilepage.png", "projectspage.png"],
        githubLink: "https://github.com/sebastianlindgren00/sebastianlindgren00.github.io",
        tags: ["React", "TypeScript", "TailwindCSS", "Github Pages"]
    },
    {
        title: "Procedurally Generated Seasons",
        text: "System for generating 4 different versions of tree using Lindenmayer Systems",
        emoji: "tree",
        tags: ["Unity", "C#", "Lindenmayer Systems"],
        imgSrc: ["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"]
    },
    {
        title: "Get The Beat",
        text: "A rhytm based 'kinect-styled' game, created in Godot with Python, GDScript and JSON",
        emoji: "🎵",
        imgSrc: ["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"],
        githubLink: "",
        tags: ["Godot", "Python", "GDScript", "JSON"]
    },
    {
        title: "Mic Game",
        text: "Control the little pixel guy with your voice! You scream, he jumps!",
        emoji: "🎤",
        imgSrc: ["todotulip-login.png"],
        tags: ["Unity", "C#", "Pixelart", "Sound Physics"]
    }
];

function showMoreOrLess(visibleProjects: number, handleShowMore: () => void, handleShowLess: () => void){
    if (visibleProjects < allProjects.length) {
        console.log("visibleProjects: ", visibleProjects);
        return (
            <button
                className="mx-auto mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg"
                onClick={handleShowMore}
            >
                Show More {allProjects.length - visibleProjects > 3 ? "(+3)" : `(${allProjects.length - visibleProjects})`}
            </button>
        )
    }
    
    else {
        console.log("visibleProjects: ", visibleProjects);
        return (
            <motion.button
            className="mx-auto mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg"
            onClick={handleShowLess}
            transition={{ duration: 1 }}
            >
            Show Less
            </motion.button>
        )
    }
}

function ProjectCard() {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleShowMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const handleShowLess = () => {
        setVisibleProjects(prev => prev - 3);
    }

    return (
        <div className="flex flex-col">
            <div className="pt-4 ml-10">
                <h1 className="font-semibold text-5xl pt-20">My Projects</h1>
            </div>
            <div className="grid grid-cols-3 gap-7 mt-10 m-auto text-center w-full p-6">
                <AnimatePresence>
                    {allProjects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 1 }}
                        >
                        <Project
                            key={index}
                            title={project.title}
                            text={project.text}
                            emoji={project.emoji}
                            imgSrc={project.imgSrc}
                            githubLink={project.githubLink}
                            tags={project.tags}
                        />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {showMoreOrLess(visibleProjects, handleShowMore, handleShowLess)}
        </div>
    );
}

export default ProjectCard;
