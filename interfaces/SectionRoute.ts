import { ReactElement, ReactNode } from "react";

export type SectionRoute = {
    url: string;
    name: string;
    icon?: ReactElement | ReactNode
    subRoutes?: SectionRoute[];
}