import GithubIcon from "@/icons/GithubIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import WhatsAppIcon from "@/icons/WhatsAppIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-4">
      <ul className="flex flex-row justify-center gap-6">
        <li className="transition-all hover:-translate-y-1">
          <Link href="">
            <GithubIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
        <li className="transition-all hover:-translate-y-1">
          <Link href="">
            <WhatsAppIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
        <li className="transition-all hover:-translate-y-1">
          <Link href="">
            <InstagramIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
