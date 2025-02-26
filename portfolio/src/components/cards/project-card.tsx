import { useState } from 'react';
import Project from "../data/project";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        id: "todo-tulip",
        title: "ToDo-Tulip",
        text: "A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS",
        emoji: "🌷",
        imgSrc: "/todotulip-login.png",
        githubLink: "https://github.com/sebastianlindgren00/todo-tulip",
        tags: ["Svelte", "TypeScript", "PocketBase", "TailwindCSS"]
    },
    {
        id: "monte-carlo-raytracer",
        title: "Monte-Carlo Raytracer",
        text: "This website, built with React, TypeScript, TailwindCSS and Deployed with Github Pages",
        emoji: "🔆",
        imgSrc: "/500samples_complete_roof&floor_rightcolors.png",
        tags: ["C++", "OpenGL"]
    },
    {
        id: "archipelago",
        title: "Archipelago",
        text: "Thriller game. Find your way out of the archipelago by solving puzzles and avoiding the warden",
        emoji: "🏝️",
        imgSrc: "/archipelago.jpg",
        tags: ["Unity", "C#", "Decision Trees"]
    },
    {
        id: "seasons",
        title: "Procedurally Generated Seasons",
        text: "System for generating 4 different versions of tree using Lindenmayer Systems",
        emoji: "🌳",
        tags: ["Unity", "C#", "Lindenmayer Systems"],
        imgSrc: "/proc_gene_seasons.png"
    },
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
    const [visibleProjects, setVisibleProjects] = useState(2);

    const handleShowMore = () => {
        setVisibleProjects(prev => prev + 2);
    };

    const handleShowLess = () => {
        setVisibleProjects(prev => prev - 2);
    };

    return (
        <div className="flex flex-col bg-midnight-blue rounded-xl w-full h-full">
            <div className="pt-4">
                <h1 className="font-semibold text-5xl">My Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 mx-auto text-center w-full p-6 justify-center items-stretch">
                <AnimatePresence>
                    {allProjects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1 }}
                            className="flex h-full"
                        >
                            <Link to={`/projects/${project.id}`} className="w-full">
                                <Project
                                    title={project.title}
                                    emoji={project.emoji}
                                    imgSrc={project.imgSrc}
                                    // githubLink={project.githubLink}
                                    tags={project.tags}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {/* Show More/Less Buttons */}
            {visibleProjects < allProjects.length ? (
                <button
                    className="mx-auto mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg"
                    onClick={handleShowMore}
                >
                    Show More
                </button>
            ) : (
                <button
                    className="mx-auto mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg"
                    onClick={handleShowLess}
                >
                    Show Less
                </button>
            )}
        </div>
    );
}

export default ProjectCard;
