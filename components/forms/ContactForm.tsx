import { memo, useCallback, useEffect, useReducer, useState } from "react";
import EclipseIcon from "../../icons/EclipseIcon";
import TickCircleIcon from "../../icons/TickCircleIcon";
import { ContactForm } from "../../interfaces/ContactForm";

const inquiries: { value: string; name: string }[] = [
    { value: "fulltime", name: "Hire Full Time" },
    { value: "project", name: "Propose Project" },
    { value: "other", name: "Other Inquiry" },
];

const contactFormReducer = (state: ContactForm, event: { name: keyof ContactForm, value: any }) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

let contactFormReducerInit: ContactForm = {
    name: "",
    company: "",
    email: "",
    message: "",
    inquiry: "",
};


const ContactForm = () => {
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
    const [formInvalid, setFormInvalid] = useState<boolean>(false);

    const [contactForm, setContactForm] = useReducer(contactFormReducer, contactFormReducerInit);

    const handleFormSubmit = async (ev: any) => {
        ev.preventDefault();
        setFormSubmitting(true);
        setTimeout(() => {
        }, 1000);
    };

    const handleFormInvalid = () => {
        setFormInvalid(true);
        console.log("Called invalid", formInvalid);
    }

    const handleOnChange = useCallback((ev: any) => {
        setContactForm({ name: ev.target.name, value: ev.target.value });
    }, [])

    useEffect(() => {
    }, [contactForm])

    return (
        <form onSubmit={handleFormSubmit} onInvalid={handleFormInvalid}>
            <p className="text-xs font-light text-gray-600">Fields tagged with <span className="text-pink-400 text-base mb-5 inline-block">*</span> are required</p>
            <fieldset disabled={formSubmitting} className="grid grid-cols-2 gap-5">
                <div className="contact-form__container">
                    <label htmlFor="name" className="contact-form__label required">Name</label>
                    <input type="text" id="name" name="name" value={contactForm.name} onChange={handleOnChange} className="contact-form__input peer" required />
                    {formInvalid && <span className="contact-form__error-msg hidden peer-invalid:block">Name cannot be empty</span>}
                </div>
                <div className="contact-form__container">
                    <label htmlFor="email" className="contact-form__label required">E-mail</label>
                    <input type="email" id="email" name="email" value={contactForm.email} onChange={handleOnChange} className="contact-form__input peer" required />
                    {formInvalid && <span className="contact-form__error-msg hidden peer-invalid:block">Please provide a valid email</span>}
                </div>
                <div className="contact-form__container col-span-2">
                    <label htmlFor="company" className="contact-form__label peer">Company</label>
                    <input type="text" id="company" name="company" value={contactForm.company} onChange={handleOnChange} className="contact-form__input" required />
                </div>
                <div className="contact-form__container col-span-2">
                    <label htmlFor="inquiry" className="contact-form__label required">Inquiry</label>
                    {/* RADIO GROUP INPUT */}
                    <fieldset className="flex flex-row flex-wrap gap-4">
                        {inquiries.map((inquiry) =>
                            <div key={inquiry.value} className="w-40">
                                <input type="radio" id={`radio-${inquiry.name}`} name="inquiry" value={inquiry.name} onChange={handleOnChange} className="hidden peer" required />
                                <label htmlFor={`radio-${inquiry.name}`} className="inline-flex items-center justify-between py-2 px-4 min-w-full rounded bg-gray-100 border peer-checked:bg-teal-50 peer-checked:border peer-checked:border-teal-200">
                                    <p className="text-sm font-light">{inquiry.name}</p>
                                    {contactForm.inquiry === inquiry.name
                                        ? <TickCircleIcon className="h-5 w-5" />
                                        : <EclipseIcon className="h-4 w-4" />
                                    }
                                </label>
                            </div>)}
                    </fieldset>
                    {!contactForm.inquiry && typeof contactForm.inquiry === "undefined" && formInvalid &&
                        <span className="contact-form__error-msg">Please pick an option</span>
                    }
                    {/* IF USER PICKED OTHER INQUIRY : THEN PRESENT INPUT */}
                    {typeof contactForm.inquiry !== "undefined" && (contactForm.inquiry !== inquiries[0].name && contactForm.inquiry !== inquiries[1].name) &&
                        <div>
                            <input id="inquiry" name="inquiry" placeholder="Your inquiry..." onChange={handleOnChange} className="contact-form__input mt-4 w-full peer" required />
                            <span className="contact-form__error-msg hidden peer-invalid:block">Please provide an inquiry</span>
                        </div>
                    }
                </div>
                <div className="contact-form__container col-span-2">
                    <label htmlFor="message" className="contact-form__label required">Message</label>
                    <textarea id="message" name="message" onChange={handleOnChange} rows={5} minLength={10} className="contact-form__input peer" required />
                    {formInvalid && <span className="contact-form__error-msg invisible peer-invalid:visible">Messages cannot be empty and must be atleast 10 letters</span>}
                </div>
                <button type="submit" className="bg-[var(--primary-color)] text-[var(--secondary-color)] rounded-sm p-2 mt-2 text-sm font-normal">
                    Submit
                </button>
            </fieldset>
        </form>
    );
};

export default memo(ContactForm);
