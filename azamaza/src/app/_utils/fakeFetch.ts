import {SearchFormData} from "@/app/_hooks/useSearchForm";

export const fakeFetch = (data: SearchFormData) => {
    return new Promise<Response>((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = false;

            if (shouldFail) {
                reject(new Error("Server is unavailable"));
                return;
            }

            resolve(
                new Response(
                    JSON.stringify({
                        success: true,
                        data,
                    }),
                    {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                    }
                )
            );
        }, 1500);
    });
};
