import { GraduationCap, Users, Trophy, Globe } from "lucide-react";

const features = [
    {
        icon: GraduationCap,
        title: "Excellence Académique",
        description: "Des programmes rigoureux conçus par des experts pour garantir votre compétitivité.",
    },
    {
        icon: Users,
        title: "Corps Professoral Expert",
        description: "Apprenez aux côtés de professionnels reconnus et de pédagogues passionnés.",
    },
    {
        icon: Trophy,
        title: "Diplômes Reconnus",
        description: "Obtenez des certifications valorisées par les entreprises et l'État.",
    },
    {
        icon: Globe,
        title: "Ouverture Internationale",
        description: "Des partenariats stratégiques pour vous ouvrir les portes du monde.",
    },
];

export function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-cefat-blue mb-4">
                        Pourquoi choisir CEFAT ?
                    </h2>
                    <p className="text-cefat-gray text-lg max-w-2xl mx-auto">
                        Nous nous engageons à offrir un environnement d'apprentissage stimulant et professionnel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-cefat-gray-light/30 hover:bg-cefat-gray-light/50 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-cefat-blue/10 flex items-center justify-center mb-4 text-cefat-blue">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-cefat-blue mb-2">{feature.title}</h3>
                            <p className="text-cefat-gray">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
