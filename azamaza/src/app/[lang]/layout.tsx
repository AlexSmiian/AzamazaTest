export default async function LangLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const { lang } = params;

    return (
        <html lang={lang}>
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.svg" />
            <link rel="manifest" href="/images/site.webmanifest"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="transparent" />
        </head>
        <body>
            {children}
        </body>
        </html>
    );
}
