import Project from "./project";
function ProjectCard() {
    

    
    return (
        <div className="flex flex-col">
            <div className="text-center pt-4">
                <h1 className="font-semibold text-3xl">My Projects</h1>
            </div>
            <div className="flex flex-row justify-between space-x-7 mt-10 w-3/4 m-auto text-center">
                <Project 
                title="ToDo-Tulip"
                text="A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS"
                emoji="🌷"
                imgSrc="todotulip_bad.png"
                githubLink="https://github.com/sebastianlindgren00/todo-tulip"
                />
                <Project 
                title="Frontend"
                text="I have experience with React, Next.js, and TailwindCSS"
                emoji="🌐"
                />
                <Project 
                title="Frontend"
                text="I have experience with React, Next.js, and TailwindCSS"
                emoji="🌐"
                />
            </div>
        </div>
    );
}

export default ProjectCard;