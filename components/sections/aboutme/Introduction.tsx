// import ProfilePicture from "../../ProfilePicture";
import React from "react";
import { Fonts } from "../../../utils/font";
import ProfilePicture from "../../ProfilePicture";

const Introduction = () => {
    return (
        <section id="introduction" className="min-h-screen flex mt-28 flex-row">
            <div className="flex flex-col max-w-2xl">
                <span className={`font-mono text-md text-[var(--secondary-color)]`}>
                    Hi, my name is
                </span>
                <h1 className=" text-white font-sans text-6xl leading-[4.5rem] font-bold drop-shadow">
                    Amery Tan
                </h1>
                <span className="font-Cabin text-5xl font-bold text-slate-400 mt-2 mb-3 block">
                    I am a Web Developer
                </span>
                <p className="text-lg mt-4 font-Manrope font-medium text-slate-400 leading-8 drop-shadow">
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </p>
            </div>
            {/* <ProfilePicture /> */}
        </section>
    )
}

export default Introduction;