import Link from "next/link";
import useScroll from "../../hooks/useScroll";
import { SectionRoute } from "../../interfaces/SectionRoute";

type SectionRouteWCss = SectionRoute & { css: string }

const routes: SectionRouteWCss[] = [
    {
        url: "/aboutme",
        name: "01.About",
        subRoutes: [
            { url: "/aboutme#introduction", name: "Introduction" },
            { url: "/aboutme#history", name: "History" },
        ],
        css: "[--animation-delay:0.1s]"
    },
    { url: "#skills", name: "02.Skills", css: "[--animation-delay:0.2s]" },
    { url: "#projects", name: "03.Projects", css: "[--animation-delay:0.3s]" },
    { url: "#contact", name: "04.Contact", css: "[--animation-delay:0.4s]" },
];


const Header = () => {
    const { scrollPosition, direction } = useScroll();
    return (
        <header className={`h-16 ${scrollPosition < 5 ? "shadow-none" : "shadow-md"} ${direction === "up" || scrollPosition === 0 ? "translate-y-0" : "-translate-y-[100vh]"} transition-all duration-300 sticky z-10 top-0 backdrop-blur-sm flex flex-row justify-between items-center px-10`}>
            <Link href="#" className="text-5xl flex flex-row group font-Raleway font-medium text-[var(--secondary-color)]">
                A<span className="text-inherit text-2xl group-hover:text-5xl transition-all delay-150 duration-200">
                    MERY
                </span>
            </Link>
            <nav >
                <ul className="flex flex-row items-center gap-6">
                    {routes.map((route, index) =>
                        <li key={index} className={` animate-slide-down ${route.css}`}>
                            <Link key={route.url} href={route.url} className={` text-[var(--secondary-color)] font-Roboto transition-all duration-200 font-normal text-xs hover:text-[var(--third-color)]`}>
                                {route.name}
                            </Link>
                        </li>)}
                    <li>
                        <Link href="#" className="text-[var(--secondary-color)] font-Roboto font-normal border-2 border-[var(--secondary-color)] text-xs py-1 px-2 rounded-sm transition-colors hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] animate-slide-down [--animation-delay:0.5s]">
                            Resume
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;