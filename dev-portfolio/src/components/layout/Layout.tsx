import Footer from "./Footer";
import Navbar from "./navbar";
import Mascot from "../common/mascot"
import ScrollProgress from "../common/ScrollProgress"

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <ScrollProgress />
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 py-10">
                {children}
            </main>
            <Footer />
            <Mascot />
        </div>
    )
}