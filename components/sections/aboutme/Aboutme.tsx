import ProfilePicture from "@/components/ProfilePicture";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen"
    >
      <article>
        <h2 className="line-after">
          01. <span className="text-slate-300">About me</span>
        </h2>
        <div className="mt-10 flex flex-wrap-reverse items-end gap-x-20 gap-y-10 sm:flex-wrap-reverse">
          <p className="block min-w-[25rem] max-w-lg grow rounded-md border border-slate-700 bg-[#1e293b] p-3 font-Manrope text-sm text-slate-400 sm:mx-auto md:max-w-3xl ">
            Hey, I am <span className="text-md font-semibold text-pink-600">Amery Tan Chun Liang</span>
          </p>
          <ProfilePicture />
        </div>
      </article>
    </section>
  );
};

export default About;
