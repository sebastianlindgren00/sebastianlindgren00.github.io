import IconButton from "../buttons/icon-button";
import LinkedInIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";
import ResumeIcon from "../icons/resume-icon";
import CurlyBracesIcon from "../icons/curly-braces-icon";
import TypeWriter from "../gadgets/typewriter";
import Tilt from 'react-parallax-tilt';

export default function ProfileCard() {
    return (
        <div className="flex flex-col shadow-lg h-screen w-screen justify-center items-center">
            <div className="flex flex-row">
            <div className="w-[700px] h-[700px] overflow-hidden rounded-full flex items-center justify-center">
                <img
                    src="/profilbild.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
                <div className="flex flex-col w-[50%]">
                    <h1 className="text-7xl font-semibold">
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
