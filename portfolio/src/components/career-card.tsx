import Job from "./job";

const allJobs = [
    {
        position: "Left",
        title: "Retail Salesperson",
        company: "Decathlon",
        date: "June 2018 - May 2020",
        description: "Worked as a retail salesperson, and my tasks included: deliveries, customer contact, customer contact via phone, knowledge within the department, and ensuring that all products were correctly placed according to the designated CAD plan in the department. The departments I worked in were racket sports, skateboard/scooters, and running training (all distances)."
    },
    {
        position: "Left",
        title: "Lab assistant",
        company: "Linköping University",
        date: "March 2023 - June 2023 & March 2024 - June 2024",
        description: "Prepared, led, and examined lab sessions for students during the course TNM061 - 3D Computer Graphics. I had the opportunity to teach OpenGL, WebGL, C++, and Blender, as well as to teach and demonstrate important concepts and theories in computer graphics. I was also available to help if the students wanted to ask for advice, brainstorm ideas, or had questions about the implementation of their group project, which was conducted at the end of the course."
    },
    {
        position: "Left",
        title: "Project Manager & Order Recipient",
        company: "StudentUtvecklarna",
        date: "June 2017 - May 2018 ",
        description: "Worked at a company that helped customers with custom websites and online services. I acted as a project manager and order receiver. The tasks were therefore mainly customer contact and project management during the website development and its maintenance afterward. I learned to use tools like Trello and Slack, as well as how to maintain good business communication."
    },
    {
        position: "Left",
        title: "Part-Time Tennis Coach",
        company: "Huddinge Tennis Club",
        date: "September 2014 - March 2017",
        description: "Worked as a tennis coach at my tennis club. I coached people aged 6 to 18. I acted both as an assistant coach to the head coach and organized my own sessions."
    },
    {
        position: "Left",
        title: "Project Manager",
        company: "Medieteknikdagen",
        date: "March 2023 - January 2024",
        description: "During Medieteknikdagen, a job fair for media technology engineering students at Linköping University, I was the responsible project manager and led a dynamic group of 13 students from the program. By applying agile methods, we created a productive work environment aimed at effective collaboration and a successful event for both students and companies. In addition to the overall responsibility for the project, I actively participated in group work and played a significant role in our interactions with companies. I managed communication from the initial contact to ensuring smooth and successful cooperation between the project group and the companies during the event."
    }
];

function CareerCard() {
    return (
        <div className="flex flex-col">
            <div className="pt-4 ml-10">
                <h1 className="font-semibold text-5xl pt-20">Work Experience</h1>
            </div>
            <div className="grid grid-cols-1 gap-7 mt-10 m-auto text-center w-full p-6">
                {allJobs.slice(0).map((job, index) => (
                    <Job
                        key={index}
                        position={job.position}
                        title={job.title}
                        company={job.company}
                        date={job.date}
                        description={job.description}
                        index={index}
                        totalJobs={allJobs.length}
                    />
                ))}
            </div>
        </div>
    );
}

export default CareerCard;
