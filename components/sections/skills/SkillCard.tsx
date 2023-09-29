import LinkIcon from '@/icons/LinkIcon';
import { SkillsAndTools } from '@/utils/skillstools';
import clsx from 'clsx';

export type SkillCardProps = SkillsAndTools;

const SkillCard = (props: SkillCardProps) => {
  const { label, link = '' } = props;
  return (
    <div
      className={clsx(
        'flex min-w-[10rem] animate-fade-appear-below items-center justify-center gap-3 rounded-lg border  bg-[#1e293b] py-2 px-2 shadow [--animation-delay:0.5s]'
      )}
    >
      <span className="grow font-Manrope text-sm font-medium text-slate-400">{label}</span>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" aria-label="Go to linked website">
          <LinkIcon className="h-5 w-5 text-pink-500" />
        </a>
      )}
    </div>
  );
};

export default SkillCard;
