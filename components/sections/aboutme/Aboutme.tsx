import ProfilePicture from "../../ProfilePicture";

const About = () => {
    return (
        <section id="about" className="min-h-screen">
            <h2 className="line-after">
                01.{" "}
                <span className="text-slate-300">
                    About me
                </span>
            </h2>
            <div className="flex flex-col mt-10 ">
                <div className="grid grid-cols-3 gap-7">
                    <p className="text-sm col-span-2 font-Manrope text-slate-400 bg-[#1e293b] p-3 rounded-md border border-slate-700">
                        Hey,{" "} I am {" "}
                        <span className="text-pink-600 text-md font-semibold">
                            Amery Tan Chun Liang
                        </span>
                    </p>
                    <ProfilePicture />
                </div>
                <ul></ul>
            </div>
        </section>
    )
}

export default About;