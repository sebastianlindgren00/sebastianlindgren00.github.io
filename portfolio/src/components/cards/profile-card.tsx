import IconButton from "../buttons/icon-button";
import LinkedInIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";

export default function ProfileCard() {
    return (
        <div className="flex flex-row h-screen w-full p-10">
            <div className="w-[600px] h-[600px] overflow-hidden rounded-full m-auto">
                <img src="/profilbild.jpg" alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <div className="w-[50%] pl-10">
                <h3 className="text-7xl font-semibold pt-36 pb-20">
                    Sebastian Lindgren
                </h3>
                <div className="flex flex-col space-y-10">
                    <IconButton
                        width="w-14"
                        Icon={LinkedInIcon}
                        url="https://www.linkedin.com/in/sebastian-lindgren-72bb99180/"
                        type="linkedin"
                    />
                    <IconButton
                        width="w-14"
                        Icon={GithubIcon}
                        url="https://github.com/sebastianlindgren00"
                        type="github"
                    />
                </div>
            </div>
        </div>
    );
}
