import {ReactNode} from "react";

export type CategoryType = {
    id: string;
    label: string;
    icon: ReactNode;
    isSpecial?: boolean;
};

export type CategoriesProps = {
    categories: CategoryType[];
};