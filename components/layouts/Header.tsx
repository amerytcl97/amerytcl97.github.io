import Link from 'next/link';
import { clsx } from 'clsx';
import useScroll from '@/hooks/useScroll';
import { SectionRoute } from '@/interfaces/SectionRoute';
import DownloadResumeButton from '../DownloadResumeButton';

type SectionRouteWCss = SectionRoute & { css: string };

const routes: SectionRouteWCss[] = [
  {
    url: '/aboutme',
    name: 'About',
    subRoutes: [
      { url: '/aboutme#introduction', name: 'Introduction' },
      { url: '/aboutme#history', name: 'History' },
    ],
    css: '[--animation-delay:0.1s]',
  },
  { url: '#skills', name: 'Skills', css: '[--animation-delay:0.2s]' },
  { url: '#projects', name: 'Projects', css: '[--animation-delay:0.3s]' },
  { url: '#contact', name: 'Contact', css: '[--animation-delay:0.4s]' },
];

const Header = () => {
  const { scrollPosition, direction } = useScroll();

  const isScrollingUpAndTop = direction === 'up' || scrollPosition <= 10;

  return (
    <header
      className={clsx(
        `sticky  top-0 z-10 flex h-16 flex-row items-center justify-between backdrop-blur-sm transition-all duration-300`,
        scrollPosition < 10 ? 'shadow-none' : 'shadow-md',
        isScrollingUpAndTop ? 'translate-y-0 shadow-none' : '-translate-y-[100vh] shadow-md'
      )}
    >
      <Link
        href="#"
        className="group flex flex-row font-Raleway text-5xl font-medium text-[var(--secondary-color)]"
      >
        A
        <span className="text-2xl text-inherit transition-all delay-150 duration-200 group-hover:text-5xl">
          MERY
        </span>
      </Link>
      <nav>
        <ul className="flex flex-row items-center gap-6">
          {routes.map((route, index) => (
            <li key={index} className={` animate-slide-down ${route.css}`}>
              <Link
                key={route.url}
                href={route.url}
                className=" font-mono text-xs font-light text-[var(--secondary-color)] transition-all duration-200 hover:text-[var(--third-color)]"
              >
                <span className="text-[var(--secondary-color)]">0{index + 1}.</span>
                <span className="font-normal text-slate-300">{route.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <DownloadResumeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
