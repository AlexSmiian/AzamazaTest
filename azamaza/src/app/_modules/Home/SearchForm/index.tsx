"use client";

import styles from "./searchForm.module.scss";
import CenteredContainer from "@/app/_ui/CenteredContainer";
import Image from "next/image";
import clsx from "classnames";
import { Controller } from "react-hook-form";
import { useSearchForm } from "@/app/_hooks/useSearchForm";

import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import close from "./close.svg";
import location from "./location.svg";
import searchIcon from "./search.svg";

export default function SearchForm() {
    const {
        register,
        handleSubmit,
        errors,
        control,
        dropdownOpen,
        setDropdownOpen,
        categoryRef,
        dateInputRef,
        categories,
        onSubmit,
        loading,
        clearDestination,
    } = useSearchForm();

    return (
        <CenteredContainer elementType={"div"}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.inputGroupLabel}>
                    <Image src={location} alt="Location" width={34} height={34} />
                    <input
                        type="text"
                        placeholder="Destination is required"
                        {...register("destination")}
                        className={styles.inputField}
                    />
                    <button className={styles.buttonReset}  onClick={clearDestination}>
                        <Image
                            src={close}
                            alt="Clear destination"
                            width={12}
                            height={12}
                        />
                    </button>

                    {errors.destination && (
                        <span className={styles.error}>{errors.destination.message}</span>
                    )}
                </label>

                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <div className={styles.inputGroupLabel} ref={categoryRef}>
                            <Image src={searchIcon} alt="Search" width={34} height={34} />
                            <div
                                className={styles.inputField}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                {field.value || "Select category"}
                            </div>
                            <Image
                                className={clsx(styles.arrow, { [styles.active]: dropdownOpen })}
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
                                                field.onChange(cat);
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            {cat}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {errors.category && (
                                <span className={styles.error}>{errors.category.message}</span>
                            )}
                        </div>
                    )}
                />

                <label
                    className={styles.inputGroupLabel}
                    onClick={() => dateInputRef.current?.focus()}
                >
                    <Image src={calendar} alt="Calendar" width={34} height={34} />
                    <input
                        type="date"
                        {...register("date")}
                        className={styles.inputFieldDate}
                        ref={(e) => {
                            register("date").ref(e);
                            dateInputRef.current = e;
                        }}
                    />
                    {errors.date && (
                        <span className={styles.error}>{errors.date.message}</span>
                    )}
                </label>

                <button type="submit" className={styles.submitButton}>
                    {loading ? <span className={styles.loader}></span> : "Search"}
                </button>
            </form>
        </CenteredContainer>
    );
}