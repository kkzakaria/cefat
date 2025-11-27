import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Team } from "@/components/sections/team";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-cefat-blue py-20 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de CEFAT</h1>
                        <p className="text-xl text-cefat-gray-light/90 max-w-2xl mx-auto">
                            Une école d'excellence dédiée à la formation des leaders de demain.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-cefat-blue mb-6">Notre Mission</h2>
                                <p className="text-cefat-gray mb-6 text-lg">
                                    CEFAT Business School a pour mission de former des cadres compétents, intègres et innovants, capables de relever les défis économiques et sociaux de l'Afrique et du monde.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Excellence académique et pédagogique",
                                        "Partenariats entreprises forts",
                                        "Innovation et entrepreneuriat",
                                        "Éthique et responsabilité sociale"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-cefat-blue">
                                            <CheckCircle className="h-5 w-5 text-cefat-red" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-cefat-gray-light rounded-2xl h-96 w-full flex items-center justify-center text-cefat-gray">
                                [Image: Campus Life / Students]
                            </div>
                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="py-20 bg-cefat-gray-light">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold text-cefat-blue mb-12">Notre Histoire</h2>
                        <div className="max-w-3xl mx-auto space-y-8">
                            <div className="relative border-l-4 border-cefat-red pl-8 text-left ml-4 md:ml-0">
                                <h3 className="text-xl font-bold text-cefat-blue">2010 - Création</h3>
                                <p className="text-cefat-gray mt-2">
                                    Fondation de CEFAT Business School avec une première promotion de 50 étudiants en gestion.
                                </p>
                            </div>
                            <div className="relative border-l-4 border-cefat-blue pl-8 text-left ml-4 md:ml-0">
                                <h3 className="text-xl font-bold text-cefat-blue">2015 - Expansion</h3>
                                <p className="text-cefat-gray mt-2">
                                    Ouverture de nouveaux campus et lancement des programmes MBA.
                                </p>
                            </div>
                            <div className="relative border-l-4 border-cefat-red pl-8 text-left ml-4 md:ml-0">
                                <h3 className="text-xl font-bold text-cefat-blue">2020 - Digitalisation</h3>
                                <p className="text-cefat-gray mt-2">
                                    Lancement de la plateforme d'apprentissage en ligne et des certifications digitales.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Team />
            </main>
            <Footer />
        </div>
    );
}
