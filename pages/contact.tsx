import ContactForm from "../components/forms/ContactForm";

type ContactProps = {};

const Contact = () => {
    return (
        <section id="contact" className="space-y-6 py-10 pr-48 block">
            <h2 className="font-Raleway text-2xl font-semibold">Contact me</h2>
            <ContactForm />
        </section>
    );
};

export default Contact;
