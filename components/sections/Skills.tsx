const skillSets = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "React Native",
    "Ionic & Angular",
    "Node.js",
    "Express.js",
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen space-y-12">
            <h2 className="">
                02.{" "}
                <span className="text-slate-300">
                    Skills
                </span>
            </h2>
            <div className="flex justify-center">
                <ul className="grid grid-cols-3 gap-7">
                    {skillSets.map((skillset) =>
                        <li key={skillset} className="border border-slate-700 shadow rounded-lg bg-[#1e293b] py-2 px-2 min-w-[10rem] flex justify-center">
                            <span className="text-xs text-slate-400 font-medium font-Manrope">
                                {skillset}
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Skills;