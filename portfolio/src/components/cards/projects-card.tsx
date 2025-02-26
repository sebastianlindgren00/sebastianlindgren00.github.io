import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EmojiConvertor from 'emoji-js';

const emoji = new EmojiConvertor();
emoji.replace_mode = 'unified';
emoji.allow_native = true;
const allProjects = [
  {
    id: "todo-tulip",
    title: "ToDo-Tulip",
    text: "A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS",
    emoji: "🌷",
    imgSrc: "/todotulip-login.png",
    tags: ["Svelte", "TypeScript", "PocketBase", "TailwindCSS"],
  },
  {
    id: "monte-carlo-raytracer",
    title: "Monte-Carlo Raytracer",
    text: "This website, built with React, TypeScript, TailwindCSS and Deployed with Github Pages",
    emoji: "🔆",
    imgSrc: "/500samples_complete_roof&floor_rightcolors.png",
    tags: ["C++", "OpenGL"],
  },
  {
    id: "archipelago",
    title: "Archipelago",
    text: "Thriller game. Find your way out of the archipelago by solving puzzles and avoiding the warden",
    emoji: "🏝️",
    imgSrc: "/archipelago.jpg",
    tags: ["Unity", "C#", "Decision Trees"],
  },
  {
    id: "seasons",
    title: "Procedurally Generated Seasons",
    text: "System for generating 4 different versions of tree using Lindenmayer Systems",
    emoji: "🌳",
    tags: ["Unity", "C#", "Lindenmayer Systems"],
    imgSrc: "/proc_gene_seasons.png",
  },
];

function ProjectsCard() {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleShowMore = () => setVisibleProjects((prev) => prev + 2);
  const handleShowLess = () => setVisibleProjects((prev) => Math.max(prev - 2, 2));

  return (
    <div className="bg-[#1C1F2B] py-16 px-6 rounded-xl w-full h-full">
      <section className="max-w-5xl mx-auto">
        <div className="relative mb-10">
          <h1 className="text-5xl font-bold text-white inline-block relative pb-2">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-electric-blue rounded-lg"></span>
          </h1>
        </div>
        <p className="text-lg text-gray-400 mb-10">
          Some of my projects from school or spare time {emoji.replace_colons(':rocket:')} Click on one to see more and access repo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {allProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="bg-[#2A2D3A] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Link to={`/projects/${project.id}`} className="block w-full h-full">
                  <div className="w-full h-64 overflow-hidden">
                    {project.imgSrc ? (
                      <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                        No Image Available
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                      <span className="text-lg">{project.emoji}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{project.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#3A3F52] text-gray-200 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleProjects < allProjects.length ? (
          <button
            className="mx-auto mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors"
            onClick={handleShowMore}
          >
            Show More
          </button>
        ) : (
          <button
            className="mx-auto mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </section>
    </div>
  );
}

export default ProjectsCard;
