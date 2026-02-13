"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useRef, useState } from "react";
import { fakeFetch } from "@/app/_utils/fakeFetch";

const searchSchemaZod = z.object({
    destination: z.string().min(1, "Destination is required"),
    category: z.string().min(1, "Category is required"),
    date: z.string().min(1, "Date is required"),
});

export type SearchFormData = z.infer<typeof searchSchemaZod>;

export const categories = [
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

export function useSearchForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        watch,
        control,
    } = useForm<SearchFormData>({
        resolver: zodResolver(searchSchemaZod),
        mode: "onSubmit",
        defaultValues: {
            destination: "",
            category: "",
            date: "",
        },
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const categoryRef = useRef<HTMLDivElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onSubmit = async (data: SearchFormData) => {
        try {
            setLoading(true);

            const response = await fakeFetch(data);

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || "Something went wrong");
            }

            const result = await response.json();

            console.log("Success:", result);

            alert(`Fake submitted:\n${JSON.stringify(data, null, 2)}`);
            setLoading(false);
            reset();
        } catch (error) {
            console.error("Submit error:", error);

            alert(
                error instanceof Error
                    ? error.message
                    : "Unexpected error occurred"
            );
        } finally {
            setLoading(false);
        }
    };

    const clearDestination = () => {
        setValue("destination", "", { shouldValidate: false });
    };

    return {
        register,
        handleSubmit,
        errors,
        watch,
        control,
        dropdownOpen,
        setDropdownOpen,
        categoryRef,
        dateInputRef,
        categories,
        onSubmit,
        loading,
        clearDestination,
    };
}