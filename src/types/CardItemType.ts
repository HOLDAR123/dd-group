import {ReactNode} from "react";

export interface CardItemType {
    id: number,
    headline: string,
    listServices: string[],
    icon: ReactNode,
}