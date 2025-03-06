import IconButton from "../buttons/icon-button";
import LinkedInIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";

export default function ProfileCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full p-4 md:p-10">
      <div className="w-48 md:w-[600px] aspect-square overflow-hidden rounded-full mb-6 mt-20">
        <img src="/profilbild.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-10 text-center md:text-left">
        <h3 className="text-4xl md:text-7xl font-semibold pt-4 md:pt-36 pb-4 md:pb-20">
          Sebastian Lindgren
        </h3>
        <div className="flex flex-col items-center md:items-start space-y-4">
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