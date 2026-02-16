"use client";

import { useState } from "react";
import Link from "next/link";
import cln from "classnames";
import styles from "./сategories.module.scss";
import {CategoriesProps, CategoryType} from "@/app/_types/types";
import CenteredContainer from "@/app/_ui/CenteredContainer";


export default function Categories({ categories }: CategoriesProps) {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <CenteredContainer elementType={'section'}>
            <div className={styles.categories}>
                <div className={styles.categoriesGrid}>
                    {categories.map((category: CategoryType) => (
                        <Link
                            key={category.id}
                            href={`/category/`}
                            className={cln(
                                styles.categoryButton,
                                category.isSpecial && styles.special,
                                activeCategory === category.id && styles.active
                            )}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className={styles.icon}>{category.icon}</span>
                            <span className={styles.label}>{category.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </CenteredContainer>
    );
}
