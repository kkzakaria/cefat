import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-cefat-blue">
                        CEFAT <span className="text-cefat-red">Business School</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-cefat-gray hover:text-cefat-blue transition-colors">
                        Accueil
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-cefat-gray hover:text-cefat-blue transition-colors">
                        À propos
                    </Link>
                    <Link href="/formations" className="text-sm font-medium text-cefat-gray hover:text-cefat-blue transition-colors">
                        Formations
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-cefat-gray hover:text-cefat-blue transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-cefat-blue hover:underline">
                        Espace Étudiant
                    </Link>
                    <Button className="bg-cefat-red hover:bg-cefat-red-dark text-white">
                        Pré-inscription
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6 text-cefat-blue" />
                    <span className="sr-only">Menu</span>
                </Button>
            </div>
        </header>
    );
}
