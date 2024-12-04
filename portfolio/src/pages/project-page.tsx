import React from 'react';
import { useParams } from 'react-router-dom';

const allProjects = [
    {
        id: "todo-tulip",
        title: "ToDo-Tulip",
        text: "A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS",
        emoji: "🌷",
        imgSrc: ["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"],
        githubLink: "https://github.com/sebastianlindgren00/todo-tulip",
        tags: ["Svelte", "TypeScript", "PocketBase", "TailwindCSS"]
    },
    {
        id: "portfolio-website",
        title: "Portfolio website",
        text: "This website, built with React, TypeScript, TailwindCSS and Deployed with Github Pages",
        emoji: "🌐",
        imgSrc: ["profilepage.png", "projectspage.png"],
        githubLink: "https://github.com/sebastianlindgren00/sebastianlindgren00.github.io",
        tags: ["React", "TypeScript", "TailwindCSS", "Github Pages"]
    },
    {
        id: "seasons",
        title: "Procedurally Generated Seasons",
        text: "System for generating 4 different versions of tree using Lindenmayer Systems",
        emoji: "tree",
        tags: ["Unity", "C#", "Lindenmayer Systems"],
        imgSrc: ["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"]
    },
    {
        id: "get-the-beat",
        title: "Get The Beat",
        text: "A rhytm based 'kinect-styled' game, created in Godot with Python, GDScript and JSON",
        emoji: "🎵",
        imgSrc: ["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"],
        githubLink: "",
        tags: ["Godot", "Python", "GDScript", "JSON"]
    },
    {
        id: "mic-game",
        title: "Mic Game",
        text: "Control the little pixel guy with your voice! You scream, he jumps!",
        emoji: "🎤",
        imgSrc: ["todotulip-login.png"],
        tags: ["Unity", "C#", "Pixelart", "Sound Physics"]
    }
];

const ProjectPage = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = allProjects.find((proj) => proj.id === projectId);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-4">{project.text}</p>
            {project.imgSrc && (
                <div className="mt-6">
                    {project.imgSrc.map((src, index) => (
                        <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="mb-4" />
                    ))}
                </div>
            )}
            {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    View on GitHub
                </a>
            )}
        </div>
    );
};

export default ProjectPage;
