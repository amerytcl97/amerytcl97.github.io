import Link from "next/link";
import React, { ReactElement, ReactNode, useState } from "react";
import ChevronDown from "../../icons/ChevronDown";
import ChevronUp from "../../icons/ChevronUp";
import { SectionRoute } from "../../interfaces/SectionRoute";

type SidebarAnchorProps = {
  href: string;
  mainRoute: ReactElement | ReactNode;
  sideRoutes: SectionRoute[];
};

const SidebarAnchor = ({
  href,
  mainRoute,
  sideRoutes = [],
}: SidebarAnchorProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onLinkClick = () => (clicked ? setClicked(false) : setClicked(true));

  const haveSideRoutes: boolean = sideRoutes.length > 0;

  return (
    <div className="flex flex-col">
      <Link
        href={href}
        className="underline-animated justify-between text-[0.9rem]"
        onClick={() => onLinkClick()}
      >
        <div className="flex flex-row justify-between">
          {mainRoute}
          {haveSideRoutes ? (
            <ChevronDown
              className={`h-5 w-5 transition-all ${
                clicked ? "rotate-180" : ""
              }`}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
      {haveSideRoutes ? (
        <ul
          className={`flex flex-col  ${
            clicked ? "submenu-open" : "submenu-close"
          }`}
        >
          {sideRoutes.map((sideRoute) => (
            <li key={sideRoute.url} className="underline-animated">
              <Link href={sideRoute.url} className="w-full py-2 pl-5 text-sm">
                {sideRoute.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SidebarAnchor;
