import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" flex min-h-screen flex-col place-content-center place-items-center gap-5 py-4"
    >
      <div className="flex flex-col place-items-center gap-2">
        <h2 className="text-4xl font-semibold text-[var(--third-color)]">Lets Get in Touch</h2>
        <h3 className="text-center text-lg text-[#AAABB8]">
          I am currently looking for opportunities from <span className="text-xl font-medium text-[var(--secondary-color)]">Full time</span> to{" "}
          <span className="text-xl font-medium text-[var(--secondary-color)]">Projects</span>
        </h3>
      </div>
      <Link
        href="mailto:saramdee97@gmail.com"
        className="rounded-sm border-2 border-[var(--secondary-color)] p-2 text-sm text-[var(--secondary-color)] transition-colors duration-200 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
      >
        Send me an Email
      </Link>
      {/* <span className="text-lg text-[#AAABB8]">OR</span> */}
      {/* <ContactForm /> */}
    </section>
  );
};

export default Contact;
