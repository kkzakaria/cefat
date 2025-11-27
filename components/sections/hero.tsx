import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative bg-cefat-blue py-20 md:py-32 overflow-hidden">
            {/* Background Pattern/Image Overlay */}
            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cefat-blue to-cefat-blue/80"></div>

            <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Formez-vous aux métiers de <br className="hidden md:block" />
                    <span className="text-cefat-red">l&apos;Excellence et de l&apos;Innovation</span>
                </h1>
                <p className="text-lg md:text-xl text-cefat-gray-light/90 mb-8 max-w-2xl">
                    CEFAT Business School vous accompagne vers la réussite avec des formations diplômantes et certifiantes adaptées aux défis du marché actuel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" className="bg-cefat-red hover:bg-cefat-red-dark text-white text-lg px-8">
                        <Link href="/formations">Découvrir nos formations</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                        <Link href="/contact">Nous contacter</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
