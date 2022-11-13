import { ReactElement, ReactNode } from "react";

export type Project = {
    title: string;
    description: string;
    frameworks: string[];
    role?: string;
    links?: { url: string, icon: ReactElement | ReactNode }[];
}