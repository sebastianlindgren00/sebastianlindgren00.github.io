import IconButton from "./icon-button";
import LinkedInIcon from "./icons/linkedin-icon";
import GithubIcon from "./icons/github-icon";
import ResumeIcon from "./icons/resume-icon";
import CurlyBracesIcon from "./icons/curly-braces-icon";
import TypeWriter from "./typewriter";
import Tilt from 'react-parallax-tilt';

function ProfileCard() {
    return (
        <div className="flex flex-col frosted rounded-xl shadow-lg pb-20">
            <div className="flex flex-row text-center mt-20 m-auto">
            <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={800}
            transitionSpeed={1500}
            scale={1.0}
            gyroscope={true}
            >
                <div className="w-[500px] drop-shadow-2xl bg-gradient-to-r rounded-full from-black via-orange-500 to-[#333333] p-0.5 mr-20">
                    <img src="/profilbild.png" alt="Profile"/>
                </div>
            </Tilt>
                <div className="flex flex-col  w-[800px]">
                    <h1 className="text-5xl bg-gradient-to-r from-black to-[#333333] text-transparent bg-clip-text border-b-[px] border-black border-solid h-20 float-left">
                        Sebastian Lindgren
                    </h1>
                    <div className="flex flex-row mt-7 w-[900px] m-auto mb-4 ml-36">
                        <h1 className="text-3xl font-bold">
                            I enjoy working with:&nbsp; 
                        </h1>
                        <div className="min-h-[4rem] min-w-[4rem] space-x-20">
                            <TypeWriter />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-9 ml-36">
                        <IconButton width="w-12" Icon={LinkedInIcon} url="https://www.linkedin.com/in/sebastian-lindgren-72bb99180/" type="linkedin" />
                        <IconButton width="w-12" Icon={GithubIcon} url="https://github.com/sebastianlindgren00" type="github" />
                        <IconButton width="w-12" Icon={ResumeIcon} url="cv.pdf" type="resume" />
                        <IconButton width="w-12" Icon={CurlyBracesIcon} url="spela.se" type="leetcode" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ProfileCard;
