import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EmojiConvertor from 'emoji-js';
import GithubIcon from '../icons/github-icon';

interface Project {
  id: string;
  title: string;
  text: string;
  emoji: string;
  imgSrc: string;
  githubLink?: string;
  tags: string[];
}

const textEmoji = new EmojiConvertor();
textEmoji.replace_mode = 'unified';
textEmoji.allow_native = true;

const allProjects: Project[] = [
  {
    id: "archipelago",
    title: "Archipelago",
    text: "Thriller game where you solve puzzles to escape the archipelago while evading the warden.",
    emoji: "🏝️",
    imgSrc: "/archipelago.jpg",
    githubLink: "https://github.com/sebastianlindgren00/archipelago",
    tags: ["Unity", "C#", "Decision Trees"],
  },
  {
    id: "monte-carlo-raytracer",
    title: "Monte-Carlo Raytracer",
    text: "Implemented monte-carlo raytracing algorithms in C++ with OpenGL for rendering. All running on the CPU",
    emoji: "🔆",
    imgSrc: "/500samples_complete_roof&floor_rightcolors.png",
    githubLink: "https://github.com/sebastianlindgren00/monte-carlo-raytracer",
    tags: ["C++", "OpenGL"],
  },
  {
    id: "todo-tulip",
    title: "ToDo-Tulip",
    text: "A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS",
    emoji: "🌷",
    imgSrc: "/todotulip-login.png",
    githubLink: "https://github.com/sebastianlindgren00/todo-tulip",
    tags: ["Svelte", "TypeScript", "PocketBase", "TailwindCSS"],
  },
  {
    id: "seasons",
    title: "Procedurally Generated Seasons",
    text: "Generates the 4 seasons using Lindenmayer systems, Perlin noise, custom shader and heightmap.",
    emoji: "🌳",
    imgSrc: "/proc_gene_seasons.png",
    githubLink: "https://github.com/sebastianlindgren00/ProcedurallyGeneratedSeasons",
    tags: ["Unity", "C#", "Lindenmayer Systems"],
  },
];

function ProjectsCard() {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShowMore = () => setVisibleProjects((prev) => prev + 2);
  const handleShowLess = () => setVisibleProjects((prev) => Math.max(prev - 2, 2));

  return (
    <>
      <div className="bg-[#1C1F2B] py-12 px-4 md:py-16 md:px-6 rounded-xl w-full">
        <section className="max-w-5xl mx-auto">
          <div className="relative mb-8 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white inline-block relative pb-2">
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-electric-blue rounded-lg"></span>
            </h1>
          </div>
          <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10">
            Some of my projects from school or spare time {textEmoji.replace_colons(':rocket:')} Click on one to see more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <AnimatePresence>
              {allProjects.slice(0, visibleProjects).map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#2A2D3A] rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="w-full h-48 md:h-64 overflow-hidden">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h2 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h2>
                      {textEmoji && <EmojiPicker emoji={project.emoji} />}
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">{project.text}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#3A3F52] text-gray-200 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleProjects < allProjects.length ? (
            <button
              className="mx-auto mt-8 md:mt-10 px-4 md:px-6 py-2 md:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors"
              onClick={handleShowMore}
            >
              Show More
            </button>
          ) : (
            <button
              className="mx-auto mt-8 md:mt-10 px-4 md:px-6 py-2 md:py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </section>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-[#2A2D3A] rounded-2xl shadow-2xl p-4 md:p-6 max-w-4xl w-full relative overflow-hidden"
      >
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          <p className="text-gray-300">{project.text}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#3A3F52] text-gray-200 text-xs md:text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function EmojiPicker({ emoji }: { emoji?: string }) {
  const [currentEmoji, setCurrentEmoji] = useState("🌳");
  const emojis = ["🌳", "🍂", "❄️", "🌱"];

  useEffect(() => {
    if (emoji === "🌳") {
      let timer = 0;
      const interval = setInterval(() => {
        timer = (timer + 1) % emojis.length;
        setCurrentEmoji(emojis[timer]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [emoji]);

  return <span className="text-lg">{emoji === "🌳" ? currentEmoji : emoji}</span>;
}

export default ProjectsCard;