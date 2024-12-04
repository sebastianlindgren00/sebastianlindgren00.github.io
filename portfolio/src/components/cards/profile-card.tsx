import IconButton from "../buttons/icon-button";
import LinkedInIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";
import ResumeIcon from "../icons/resume-icon";
import CurlyBracesIcon from "../icons/curly-braces-icon";
import TypeWriter from "../gadgets/typewriter";
import Tilt from 'react-parallax-tilt';

export default function ProfileCard() {
    return (
        <div className="flex flex-col bg-[#FDF4E3] rounded-b-xl shadow-lg h-screen justify-center items-center w-screen">
            <div className="flex flex-row">
                <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.0}
                    gyroscope={true}
                >
                    <div className="w-[500px] drop-shadow-2xl bg-gradient-to-r rounded-full from-black to-black p-0.5 mr-20">
                        <img src="/profilbild.png" alt="Profile"/>
                    </div>
                </Tilt>
                <div className="flex flex-col w-[800px]">
                    <h1 className="text-5xl font-semibold text-[#4A2C2A]">
                        Sebastian Lindgren
                    </h1>
                    <div className="flex flex-row mt-7 mb-4">
                        <h1 className="text-3xl font-bold">
                            I enjoy working with:&nbsp; 
                        </h1>
                        <div className="min-h-[4rem] min-w-[4rem]">
                            <TypeWriter />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-9">
                        <div className="flex flex-row items-center">
                            <IconButton
                                width="w-12"
                                Icon={LinkedInIcon}
                                url="https://www.linkedin.com/in/sebastian-lindgren-72bb99180/"
                                type="linkedin"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <IconButton
                                width="w-12"
                                Icon={GithubIcon}
                                url="https://github.com/sebastianlindgren00"
                                type="github"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
