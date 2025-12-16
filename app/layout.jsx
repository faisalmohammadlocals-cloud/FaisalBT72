import '../styles/globals.css';

export const metadata = {
    title: 'Hello Faisal'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
