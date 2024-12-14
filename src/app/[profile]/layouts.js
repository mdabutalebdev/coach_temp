import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import Menu from "@/Components/shared/menu";

export default function Layout({ children }) {
    return (
        <html lang="en" >
            <body>
                <Navbar />
                <Menu />
                {children}
                <Footer />
            </body>
        </html>
    );
}