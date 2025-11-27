import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-cefat-blue text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">CEFAT Business School</h3>
                        <p className="text-cefat-gray-light/80 text-sm">
                            Former les leaders de demain avec excellence et innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Liens Rapides</h4>
                        <ul className="space-y-2 text-sm text-cefat-gray-light/80">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">À propos</Link>
                            </li>
                            <li>
                                <Link href="/formations" className="hover:text-white transition-colors">Nos Formations</Link>
                            </li>
                            <li>
                                <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <ul className="space-y-2 text-sm text-cefat-gray-light/80">
                            <li>Abidjan, Côte d'Ivoire</li>
                            <li>info@cefat-bs.ci</li>
                            <li>+225 07 07 07 07 07</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Légal</h4>
                        <ul className="space-y-2 text-sm text-cefat-gray-light/80">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">Mentions légales</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-cefat-gray-light/60">
                    © {new Date().getFullYear()} CEFAT Business School. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
