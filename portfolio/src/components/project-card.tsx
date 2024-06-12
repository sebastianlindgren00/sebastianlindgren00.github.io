import Project from "./project";
function ProjectCard() {
    
    return (
        <div className="flex flex-col">
            <div className="text-center pt-4">
                <h1 className="font-semibold text-3xl pt-20">My Projects</h1>
            </div>
            <div className="grid grid-cols-3 gap-7 mt-10 m-auto text-center w-full p-6">
                <Project 
                    title="ToDo-Tulip"
                    text="A simple todo app that uses SvelteKit, TypeScript, PocketBase and TailwindCSS"
                    emoji="🌷"
                    imgSrc={["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"]}
                    githubLink="https://github.com/sebastianlindgren00/todo-tulip"
                    tags={["Svelte", "TypeScript", "PocketBase", "TailwindCSS"]}
                />
                <Project 
                    title="Procedurally Generated Seasons"
                    text="Kolla vad cool jag är"
                    emoji="tree"
                    tags={["Unity", "C#", "Lindenmayer Systems"]}
                    imgSrc={["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"]}
                />
                <Project 
                    title="Get The Beat"
                    text="A rhytm based 'kinect-styled' game, created in Godot with Python, GDScript and JSON"
                    emoji="🎵"
                    imgSrc={["todotulip-login.png", "todotulip-create.png", "todotulip-page.png"]}
                    githubLink=""
                    tags={["Godot", "Python", "GDScript", "JSON"]}
                />
                <Project 
                    title="Mic Game"
                    text="Control the little pixel guy with your voice! You scream, he jumps!"
                    emoji="🎤"
                    imgSrc={["todotulip-login.png"]}
                    tags={["Unity", "C#", "Pixelart", "Sound Physics"]}
                />
            </div>
        </div>
    );
}

export default ProjectCard;