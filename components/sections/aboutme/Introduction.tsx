// import ProfilePicture from "../../ProfilePicture";
import React from 'react';
import { Fonts } from '../../../utils/font';
import ProfilePicture from '../../ProfilePicture';

const Introduction = () => {
  return (
    <section id="introduction" className="mt-28 flex min-h-screen flex-row">
      <div className="flex max-w-2xl flex-col">
        <span className={`text-md font-mono text-[var(--secondary-color)]`}>Hi, my name is</span>
        <h1 className=" font-sans text-6xl font-bold leading-[4.5rem] text-white drop-shadow">
          Amery Tan
        </h1>
        <span className="mt-2 mb-3 block font-Cabin text-5xl font-bold text-slate-400">
          I am a Web Developer
        </span>
        <p className="mt-4 font-Manrope text-lg font-medium leading-8 text-slate-400 drop-shadow">
          {/* I’m a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible, human-centered
          products at Upstatement. */}
        </p>
      </div>
      {/* <ProfilePicture /> */}
    </section>
  );
};

export default Introduction;
