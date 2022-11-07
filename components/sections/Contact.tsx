import ContactForm from "../forms/ContactForm";

type ContactProps = {};

const Contact = () => {
    return (
        <section id="contact" className="space-y-6 m-auto py-8 ml-32 block">
            <h2 className="font-Raleway text-2xl font-semibold">Contact me</h2>
            <ContactForm />
        </section>
    );
};

export default Contact;
