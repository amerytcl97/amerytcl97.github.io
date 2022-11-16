import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LeetCodeIcon from "../icons/LeetCodeIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const Info = () => {
    return (
        <div className="fixed bottom-14 right-0 w-52">
            <ul className="flex flex-row justify-center gap-6 pl-5 pr-10">
                <li className="hover:-translate-y-1 transition-all animate-slide-up-appear [--animation-delay:0.1s]">
                    <Link href="">
                        <GithubIcon className="h-6 w-6 fill-slate-300" />
                    </Link>
                </li>
                <li className="hover:-translate-y-1 transition-all animate-slide-up-appear [--animation-delay:0.2s]">
                    <Link href="">
                        <WhatsAppIcon className="h-6 w-6 fill-slate-300" />
                    </Link>
                </li>
                <li className="hover:-translate-y-1 transition-all animate-slide-up-appear [--animation-delay:0.3s]">
                    <Link href="">
                        <InstagramIcon className="h-6 w-6 fill-slate-300" />
                    </Link>
                </li>
                <li className="hover:-translate-y-1 transition-all animate-slide-up-appear [--animation-delay:0.4s]">
                    <Link href="https://leetcode.com/saramdee97/" target="_blank">
                        <LeetCodeIcon className="h-6 w-6 fill-slate-300" />
                    </Link>
                </li>
            </ul>
            <hr className="my-2 block rounded animate-line-extend origin-right" />
            <Link href="mailto:saramdee97@gmail.com" className="ml-2 hover:underline text-sm tracking-wider font-mono mt-2 block text-slate-300 underline-offset-2">
                saramdee97@gmail.com
            </Link>
        </div>
    )
}

export default Info;