import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const formations = [
    {
        id: "licence-gestion",
        title: "Licence en Gestion des Entreprises",
        level: "Licence (Bac+3)",
        duration: "3 ans",
        description: "Acquérez les fondamentaux de la gestion, du marketing et de la finance pour devenir un manager polyvalent.",
        tags: ["Gestion", "Marketing", "Finance"],
    },
    {
        id: "master-audit",
        title: "Master Audit et Contrôle de Gestion",
        level: "Master (Bac+5)",
        duration: "2 ans",
        description: "Devenez un expert en audit financier et en pilotage de la performance des organisations.",
        tags: ["Audit", "Finance", "Comptabilité"],
    },
    {
        id: "mba-marketing",
        title: "MBA Marketing Digital & E-Business",
        level: "MBA",
        duration: "18 mois",
        description: "Maîtrisez les stratégies digitales et le commerce électronique pour propulser les marques.",
        tags: ["Marketing Digital", "E-commerce", "Stratégie"],
    },
    {
        id: "certif-rh",
        title: "Certificat en Gestion des Ressources Humaines",
        level: "Certificat Pro",
        duration: "6 mois",
        description: "Renforcez vos compétences en recrutement, formation et gestion des talents.",
        tags: ["RH", "Management", "Droit Social"],
    },
];

export default function FormationsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-cefat-blue py-20 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Formations</h1>
                        <p className="text-xl text-cefat-gray-light/90 max-w-2xl mx-auto">
                            Des programmes d&apos;excellence pour construire votre avenir professionnel.
                        </p>
                    </div>
                </section>

                {/* Course List */}
                <section className="py-20 bg-cefat-gray-light">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {formations.map((formation) => (
                                <div key={formation.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                    <div className="h-48 bg-cefat-blue/5 flex items-center justify-center">
                                        <BookOpen className="h-16 w-16 text-cefat-blue/20" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full bg-cefat-blue/10 text-cefat-blue text-xs font-semibold">
                                                {formation.level}
                                            </span>
                                            <span className="text-sm text-cefat-gray">{formation.duration}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-cefat-blue mb-3">{formation.title}</h3>
                                        <p className="text-cefat-gray text-sm mb-6 flex-1">
                                            {formation.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {formation.tags.map((tag, i) => (
                                                <span key={i} className="text-xs text-cefat-gray bg-cefat-gray-light px-2 py-1 rounded">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Button asChild className="w-full bg-cefat-blue hover:bg-cefat-blue-light text-white group">
                                            <Link href={`/formations/${formation.id}`}>
                                                En savoir plus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
