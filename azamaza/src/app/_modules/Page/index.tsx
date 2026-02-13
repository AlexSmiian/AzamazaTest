import { ReactNode } from 'react';
import ErrorBoundary from '../../_components/ErrorBoundary';
import Header from "@/app/_components/Header";

export default async function Page({
  children,
}: {
  children: ReactNode;
}) {
    return (
            <ErrorBoundary>
                <Header />
                {children}
            </ErrorBoundary>
    );
}

