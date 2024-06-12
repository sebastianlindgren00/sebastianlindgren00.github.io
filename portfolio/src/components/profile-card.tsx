import IconButton from "./icon-button";
import LinkedInIcon from "./icons/linkedin-icon";
import GithubIcon from "./icons/github-icon";
import ResumeIcon from "./icons/resume-icon";
import CurlyBracesIcon from "./icons/curly-braces-icon";
import TypeWriter from "./typewriter";

function ProfileCard() {
    return (
        <div className="flex flex-col frosted rounded-xl shadow-lg pb-20">
            <div className="flex flex-row text-center mt-20 m-auto">
                <div className="w-[500px] drop-shadow-2xl bg-gradient-to-r rounded-full animated-background from-orange-500 via-slate-500 to-gblue p-0.5 mr-20">
                    <img src="/profilbild.png" alt="Profile"/>
                </div>
                <div className="flex flex-col text-center w-[800px]">
                    <h1 className="text-5xl bg-gradient-to-r from-black to-slate-500 text-transparent bg-clip-text border-b-[px] border-black border-solid h-20">
                        Sebastian Lindgren
                    </h1>
                    <div className="flex flex-row mt-7 w-[900px] m-auto mb-4">
                        <h1 className="text-3xl font-bold">
                            I enjoy working with:&nbsp; 
                        </h1>
                        <div className="min-h-[4rem] min-w-[4rem] space-x-20">
                            <TypeWriter />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-9">
                        <IconButton Icon={LinkedInIcon} url="https://www.linkedin.com/in/sebastian-lindgren-72bb99180/" type="linkedin" />
                        <IconButton Icon={GithubIcon} url="https://github.com/sebastianlindgren00" type="github" />
                        <IconButton Icon={ResumeIcon} url="cv.pdf" type="resume" />
                        <IconButton Icon={CurlyBracesIcon} url="spela.se" type="leetcode" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ProfileCard;
