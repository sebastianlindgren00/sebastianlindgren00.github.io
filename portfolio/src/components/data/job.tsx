type JobProps = {
    title: string;
    company: string;
    date: string;
    description: string;
    index: number;
    totalJobs: number;
};

const renderPosition = (
    title: string,
    company: string,
    date: string,
    description: string,
    index: number,
    totalJobs: number
) => {
    const isLastJob = index === totalJobs - 1;

        return (
            <>
                <div className="relative flex flex-col">
                    <div className="rounded-xl shadow-2xl bg-white flex flex-col w-[80%] p-4">
                        <h1 className="font-semibold text-xl">{company}</h1>
                        <p>{title}</p>
                        <p>{date}</p>
                        <div className="relative flex flex-col items-center">
                            {!isLastJob &&
                                <>
                                    <div className="bg-white border border-gray-600 rounded-full w-5 h-5 absolute left-1/2 mt-[93px] transform -translate-x-1/2 z-10"></div>
                                    <svg height="250" width="5" className="absolute left-1/2 transform -translate-x-1/2">
                                        <line
                                            x1="50%"
                                            y1="15"
                                            x2="50%"
                                            y2="250"
                                            style={{ stroke: "gray", strokeWidth: 2, strokeDasharray: "5,5" }}
                                        />
                                    </svg>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <h1 className="text-left h-64">{description}</h1>
            </>
        );
};

function Job({ title, company, date, description, index, totalJobs }: JobProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {renderPosition(title, company, date, description, index, totalJobs)}
        </div>
    );
}

export default Job;
