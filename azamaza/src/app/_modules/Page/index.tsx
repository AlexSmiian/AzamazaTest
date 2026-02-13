import { ReactNode } from 'react';
import ErrorBoundary from '../../_components/ErrorBoundary';

export default async function Page({
  params,
  searchParams,
  children,
  classModifier
}: {
  params: { lang: string };
  searchParams: {};
  children: ReactNode;
  classModifier?: string;
}) {
  const { lang } = params;

    return (
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
    );
}

