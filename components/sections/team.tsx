import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: "Dr. Kouassi Yves",
        role: "Directeur Général",
        bio: "Docteur en Sciences de Gestion, avec plus de 20 ans d'expérience dans l'enseignement supérieur.",
    },
    {
        name: "Mme. Touré Aminata",
        role: "Directrice Académique",
        bio: "Experte en ingénierie pédagogique et ancienne consultante en stratégie.",
    },
    {
        name: "M. Diop Oumar",
        role: "Responsable des Partenariats",
        bio: "Spécialiste des relations entreprises et du développement commercial.",
    },
    {
        name: "Mme. Koffi Sarah",
        role: "Responsable Vie Étudiante",
        bio: "Passionnée par l'accompagnement et le développement personnel des étudiants.",
    },
];

export function Team() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-cefat-blue mb-4">
                        Notre Équipe de Direction
                    </h2>
                    <p className="text-cefat-gray text-lg max-w-2xl mx-auto">
                        Des professionnels dévoués à votre réussite académique et professionnelle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg bg-cefat-gray-light/20 p-6 hover:shadow-lg transition-all">
                            <div className="aspect-square mb-6 rounded-full bg-cefat-blue/10 mx-auto w-32 flex items-center justify-center text-4xl font-bold text-cefat-blue">
                                {member.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-cefat-blue mb-1">{member.name}</h3>
                                <p className="text-cefat-red font-medium mb-3">{member.role}</p>
                                <p className="text-cefat-gray text-sm mb-4">{member.bio}</p>
                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href="#" className="text-cefat-blue hover:text-cefat-blue-light">
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                    <Link href="#" className="text-cefat-blue hover:text-cefat-blue-light">
                                        <Mail className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
