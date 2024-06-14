import Job from "./job";

function CareerCard() {

    return (
        <div className="flex flex-col">
            <div className="pt-4 ml-10">
                <h1 className="font-semibold text-5xl pt-20">Work Experience</h1>
            </div>
            <div className="grid grid-cols-3 gap-7 mt-10 m-auto text-center w-full p-6">
                <Job />
            </div>
        </div>
    );
}
export default CareerCard;