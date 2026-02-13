"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useState, useRef, useEffect} from "react";
import styles from "./searchForm.module.scss";
import CenteredContainer from "@/app/_ui/CenteredContainer";
import arrow from './arrow.svg';
import calendar from './calendar.svg';
import close from './close.svg';
import location from './location.svg';
import searchIcon from './search.svg';
import Image from 'next/image';
import clsx from "classnames";

const searchSchemaZod = z.object({
    destination: z.string().min(1, "Destination is required"),
    category: z.string().min(1, "CategoryPage is required"),
    date: z.string().min(1, "Date is required"),
});

const categories = [
    "Excursion",
    "Photography",
    "Meet",
    "App Subscription",
    "Fueling",
    "Taxi",
    "Restaurants",
    "Transfer",
    "Hotels",
    "Marketplaces",
    "Coupon",
    "Rent",
    "Referral program",
];

type SearchFormData = z.infer<typeof searchSchemaZod>;

export default function SearchForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
        reset,
        watch,
    } = useForm<SearchFormData>({
        resolver: zodResolver(searchSchemaZod),
        mode: "onSubmit",
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const categoryRef = useRef<HTMLDivElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onSubmit = (data: SearchFormData) => {
        setLoading(true);
        console.log("Sending fake data...", data);

        setTimeout(() => {
            alert(`Fake submitted:\n${JSON.stringify(data, null, 2)}`);
            setLoading(false);
            reset();
        }, 1500);
    };

    return (
        <CenteredContainer elementType={"div"}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.inputGroupLabel}>
                    <Image src={location} alt="Search" width={34} height={34}/>
                    <input
                        type="text"
                        placeholder="Destination is required"
                        {...register("destination")}
                        className={styles.inputField}
                    />
                    <Image src={close} alt="Close" width={24} height={24}/>
                    {errors.destination && <span className={styles.error}>{errors.destination.message}</span>}
                </label>
                <div className={styles.inputGroupLabel} ref={categoryRef}>
                    <Image src={searchIcon} alt="Search" width={34} height={34}/>
                    <div
                        className={styles.inputField}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {watch("category") || "Select category"}
                    </div>
                    <Image
                        className={clsx(styles.arrow, {[styles.active]: dropdownOpen})}
                        src={arrow}
                        alt="Arrow"
                        width={34}
                        height={34}
                    />
                    {dropdownOpen && (
                        <ul className={styles.dropdownList}>
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className={styles.dropdownItem}
                                    onClick={() => {
                                        setValue("category", cat, {shouldValidate: true});
                                        setDropdownOpen(false);
                                    }}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    )}
                    {errors.category && <span className={styles.error}>{errors.category.message}</span>}
                </div>
                <label
                    className={styles.inputGroupLabel}
                    onClick={() => dateInputRef.current?.focus()}
                >
                    <Image src={calendar} alt="Calendar" width={34} height={34}/>
                    <input
                        type="date"
                        placeholder="Date is required"
                        {...register("date")}
                        className={styles.inputFieldDate}
                        ref={(e) => {
                            register("date").ref(e);
                            dateInputRef.current = e;
                        }}
                    />
                    {errors.date && <span className={styles.error}>{errors.date.message}</span>}
                </label>
                <button type="submit" className={styles.submitButton}>
                    Search
                </button>
            </form>
        </CenteredContainer>
    );
}
