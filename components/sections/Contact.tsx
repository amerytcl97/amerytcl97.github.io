import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact" className=" flex flex-col gap-5 place-items-center place-content-center min-h-screen py-4">
            <div className="flex flex-col place-items-center gap-2">
                <h2 className="text-4xl text-[var(--third-color)] font-semibold">Lets Get in Touch</h2>
                <h3 className="text-lg text-[#AAABB8]">I am currently looking for opportunities from
                    {" "}<span className="text-[var(--secondary-color)] font-medium text-xl">Full time</span>{" "}
                    to
                    {" "}<span className="text-[var(--secondary-color)] font-medium text-xl">Projects</span>
                </h3>
            </div>
            <Link href="mailto:saramdee97@gmail.com" className="p-2 border-2 border-[var(--secondary-color)] text-sm text-[var(--secondary-color)] rounded-sm hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-200">
                Use native mail
            </Link>
            {/* <span className="text-lg text-[#AAABB8]">OR</span> */}
            {/* <ContactForm /> */}
        </section>
    )
}

export default Contact;