import EmojiConvertor from "emoji-js";

const emoji = new EmojiConvertor();
emoji.replace_mode = 'unified';
emoji.allow_native = true;

const workExperience = [
  {
    title: "Software Developer",
    company: "CTEK",
    date: "June 2024 - August 2024",
    skills: ["Python", "C++", "Angular", "Kotlin"],
    description:
      "Developed installation tools with a focus on app and API development, contributing to faster assembly during distribution.",
  },
  {
    title: "Project Manager",
    company: "Medieteknikdagen",
    date: "March 2023 - January 2024",
    skills: ["Team Leadership", "Agile Methods"],
    description:
      "Led a team of 13 students to organize a major job fair, ensuring seamless collaboration between students and companies.",
  },
  {
    title: "Lab Assistant",
    company: "Linköping University",
    date: "March 2023 - June 2024",
    skills: ["OpenGL", "WebGL", "Blender"],
    description:
      "Guided students through 3D computer graphics labs, providing insights into graphics programming and project development.",
  },
];

function WorkExperience() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-[#1C1F2B] text-gray-300 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white inline-block relative pb-2">
          Work Experience
          <span className="absolute bottom-0 left-0 w-full h-1 bg-electric-blue rounded-lg"></span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10">
          Some of my workplaces so far {emoji.replace_colons(':briefcase:')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-[#2A2D3A] rounded-2xl shadow-lg p-4 md:p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white">{job.title}</h2>
                <a
                  href="#"
                  className="text-blue-400 text-base md:text-lg hover:underline"
                >
                  {job.company}
                </a>
                <p className="text-gray-400 text-sm md:text-base mt-1">{job.date}</p>
              </div>

              <p className="text-gray-300 mb-4 text-sm md:text-base">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#3A3F52] text-xs md:text-sm px-2 md:px-3 py-1 rounded-full text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;