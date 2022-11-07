import Link from "next/link";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import { SectionRoute } from "../../interfaces/SectionRoute";
import SidebarAnchor from "./SidebarAnchor";

const routes: SectionRoute[] = [
    {
        url: "#",
        name: "About me",
        subRoutes: [
            { url: "#introduction", name: "Introduction" },
            { url: "#history", name: "History" },
        ],
    },
    { url: "#experiences", name: "Experiences" },
    { url: "#projects", name: "Projects" },
    { url: "#contact", name: "Contact me" },
];

const Sidebar = () => {
    const downloadCV = async () => {
        console.log("Download CV");
    };

    return (
        <aside className="fixed left-0 flex min-h-full min-w-[15rem] flex-col gap-7 bg-[var(--secondary-color)] py-20 px-10">
            <h1 className="font-Raleway text-3xl font-light">AMERY TAN</h1>
            <ul className="flex-1 space-y-3">
                {routes.map(({ url, name, subRoutes }, index) => (
                    <li key={index}>
                        <SidebarAnchor
                            href={url}
                            mainRoute={name}
                            sideRoutes={
                                typeof subRoutes != "undefined" && subRoutes.length
                                    ? subRoutes
                                    : []
                            }
                        />
                    </li>
                ))}
            </ul>
            <button
                type="button"
                onClick={() => downloadCV()}
                className="rounded-sm bg-[var(--primary-color)] p-2 text-sm text-[var(--secondary-color)] transition-all delay-150 hover:border hover:border-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
                Download CV
            </button>
            <footer className="border-t border-t-[var(--primary-color)] pt-6 transition-all">
                <ul className="flex flex-row justify-evenly">
                    <li>
                        <Link href="">
                            <WhatsAppIcon className="h-6 w-6" />
                        </Link>
                    </li>
                </ul>
            </footer>
        </aside>
    );
};

export default Sidebar;
