import Link from 'next/link';
import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LeetCodeIcon from '../icons/LeetCodeIcon';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { EMAIL, LEETCODE_ACCOUNT } from '@/utils/contacts';

const Info = () => {
  return (
    <div className="fixed bottom-14 right-0 w-52">
      <ul className="flex flex-row justify-center gap-6 pl-5 pr-10">
        <li className="animate-slide-up-appear transition-all [--animation-delay:0.1s] hover:-translate-y-1">
          <Link href="">
            <GithubIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
        <li className="animate-slide-up-appear transition-all [--animation-delay:0.2s] hover:-translate-y-1">
          <Link href="">
            <WhatsAppIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
        <li className="animate-slide-up-appear transition-all [--animation-delay:0.3s] hover:-translate-y-1">
          <Link href="">
            <InstagramIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
        <li className="animate-slide-up-appear transition-all [--animation-delay:0.4s] hover:-translate-y-1">
          <Link href={LEETCODE_ACCOUNT} target="_blank">
            <LeetCodeIcon className="h-6 w-6 fill-slate-300" />
          </Link>
        </li>
      </ul>
      <hr className="my-2 block origin-right animate-line-extend rounded" />
      <Link
        href={`mailto:${EMAIL}`}
        className="ml-2 mt-2 block font-mono text-sm tracking-wider text-slate-300 underline-offset-2 hover:underline"
      >
        {EMAIL}
      </Link>
    </div>
  );
};

export default Info;
