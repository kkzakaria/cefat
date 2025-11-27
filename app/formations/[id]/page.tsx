import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Calendar, Award } from "lucide-react";
import { notFound } from "next/navigation";

// Mock Data (duplicated for now, ideally should be in a shared lib/data file)
const formations = [
    {
        id: "licence-gestion",
        title: "Licence en Gestion des Entreprises",
        level: "Licence (Bac+3)",
        duration: "3 ans",
        description: "Acquérez les fondamentaux de la gestion, du marketing et de la finance pour devenir un manager polyvalent.",
        fullDescription: "Cette formation vise à donner aux étudiants une solide culture générale en gestion et des compétences techniques opérationnelles. Le programme couvre l'ensemble des fonctions de l'entreprise : marketing, finance, ressources humaines, stratégie, etc.",
        objectives: [
            "Comprendre l'environnement économique et juridique de l'entreprise",
            "Maîtriser les outils de gestion comptable et financière",
            "Élaborer une stratégie marketing fondamentale",
            "Manager une petite équipe ou un projet"
        ],
        modules: ["Comptabilité Générale", "Marketing Fondamental", "Droit des Affaires", "Management des Organisations", "Anglais des Affaires"],
    },
    {
        id: "master-audit",
        title: "Master Audit et Contrôle de Gestion",
        level: "Master (Bac+5)",
        duration: "2 ans",
        description: "Devenez un expert en audit financier et en pilotage de la performance des organisations.",
        fullDescription: "Ce Master forme des spécialistes de l'audit et du contrôle de gestion capables d'accompagner les entreprises dans la maîtrise de leurs risques et l'amélioration de leurs performances.",
        objectives: [
            "Maîtriser les normes comptables internationales (IFRS)",
            "Conduire une mission d'audit légal ou contractuel",
            "Mettre en place des outils de pilotage de la performance",
            "Évaluer les risques financiers et opérationnels"
        ],
        modules: ["Audit Financier", "Contrôle de Gestion Approfondi", "Normes IFRS", "Finance d'Entreprise", "Systèmes d'Information de Gestion"],
    },
    {
        id: "mba-marketing",
        title: "MBA Marketing Digital & E-Business",
        level: "MBA",
        duration: "18 mois",
        description: "Maîtrisez les stratégies digitales et le commerce électronique pour propulser les marques.",
        fullDescription: "Le MBA Marketing Digital prépare les futurs leaders du marketing à l'ère du numérique. Il allie stratégie marketing, maîtrise des outils digitaux et vision business.",
        objectives: [
            "Définir une stratégie digitale omnicanale",
            "Maîtriser les leviers d'acquisition (SEO, SEA, Social Ads)",
            "Analyser la data pour optimiser les performances",
            "Gérer des projets e-commerce complexes"
        ],
        modules: ["Stratégie Digitale", "Marketing de Contenu", "Data Analytics", "E-commerce Management", "UX/UI Design"],
    },
    {
        id: "certif-rh",
        title: "Certificat en Gestion des Ressources Humaines",
        level: "Certificat Pro",
        duration: "6 mois",
        description: "Renforcez vos compétences en recrutement, formation et gestion des talents.",
        fullDescription: "Ce certificat est destiné aux professionnels souhaitant acquérir ou renforcer leurs compétences en gestion des ressources humaines de manière opérationnelle et rapide.",
        objectives: [
            "Gérer le processus de recrutement",
            "Élaborer un plan de formation",
            "Comprendre les bases du droit social",
            "Gérer l'administration du personnel"
        ],
        modules: ["Recrutement & Intégration", "Gestion de la Formation", "Droit du Travail", "Gestion de la Paie", "Communication Interne"],
    },
];

type Props = {
    params: Promise<{ id: string }>;
};

export default async function FormationDetailsPage({ params }: Props) {
    const { id } = await params;
    const formation = formations.find((f) => f.id === id);

    if (!formation) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-cefat-blue py-20 text-white">
                    <div className="container mx-auto px-4">
                        <Link href="/formations" className="inline-flex items-center text-cefat-gray-light hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux formations
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
                                    {formation.level}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold mb-4">{formation.title}</h1>
                                <div className="flex items-center gap-6 text-cefat-gray-light">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5" /> {formation.duration}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Award className="h-5 w-5" /> Diplôme reconnu
                                    </span>
                                </div>
                            </div>
                            <Button size="lg" className="bg-cefat-red hover:bg-cefat-red-dark text-white shrink-0">
                                Candidater maintenant
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                <div>
                                    <h2 className="text-2xl font-bold text-cefat-blue mb-4">Présentation</h2>
                                    <p className="text-cefat-gray text-lg leading-relaxed">
                                        {formation.fullDescription}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-cefat-blue mb-4">Objectifs de la formation</h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {formation.objectives.map((obj, i) => (
                                            <li key={i} className="flex items-start gap-3 text-cefat-gray">
                                                <CheckCircle className="h-5 w-5 text-cefat-red shrink-0 mt-0.5" />
                                                <span>{obj}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-cefat-blue mb-4">Programme (Modules clés)</h2>
                                    <div className="bg-cefat-gray-light/30 rounded-xl p-6">
                                        <ul className="space-y-3">
                                            {formation.modules.map((mod, i) => (
                                                <li key={i} className="flex items-center gap-3 text-cefat-blue font-medium border-b border-cefat-gray/10 last:border-0 pb-3 last:pb-0">
                                                    <span className="h-2 w-2 rounded-full bg-cefat-blue"></span>
                                                    {mod}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <div className="bg-cefat-gray-light p-6 rounded-xl border border-cefat-gray/20">
                                    <h3 className="text-xl font-bold text-cefat-blue mb-4">Informations clés</h3>
                                    <ul className="space-y-4 text-sm">
                                        <li className="flex justify-between">
                                            <span className="text-cefat-gray">Rentrée :</span>
                                            <span className="font-semibold text-cefat-blue">Septembre / Janvier</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-cefat-gray">Rythme :</span>
                                            <span className="font-semibold text-cefat-blue">Initial ou Alternance</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-cefat-gray">Langue :</span>
                                            <span className="font-semibold text-cefat-blue">Français</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="text-cefat-gray">Lieu :</span>
                                            <span className="font-semibold text-cefat-blue">Campus Abidjan</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full mt-6 bg-cefat-blue hover:bg-cefat-blue-light text-white">
                                        Télécharger la brochure
                                    </Button>
                                </div>

                                <div className="bg-cefat-red p-6 rounded-xl text-white">
                                    <h3 className="text-xl font-bold mb-2">Besoin de conseils ?</h3>
                                    <p className="text-white/90 text-sm mb-4">
                                        Nos conseillers pédagogiques sont là pour vous orienter.
                                    </p>
                                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-cefat-red">
                                        Prendre rendez-vous
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
