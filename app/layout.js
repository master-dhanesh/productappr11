import Context from "@/utils/Context";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
    title: "Ecommerce",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className="h-screen w-[80%] m-auto overflow-x-hidden"
                suppressHydrationWarning
            >
                <Nav />
                <Context>{children}</Context>
            </body>
        </html>
    );
}
