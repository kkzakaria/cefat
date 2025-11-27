export function Testimonials() {
    return (
        <section className="py-20 bg-cefat-gray-light">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-cefat-blue mb-4">
                        Ce que disent nos étudiants
                    </h2>
                    <p className="text-cefat-gray text-lg max-w-2xl mx-auto">
                        Découvrez les témoignages de ceux qui ont fait confiance à CEFAT Business School.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 rounded-full bg-cefat-blue/20 flex items-center justify-center text-cefat-blue font-bold">
                                MK
                            </div>
                            <div>
                                <h4 className="font-semibold text-cefat-blue">Marie Koné</h4>
                                <p className="text-sm text-cefat-gray">Master Marketing</p>
                            </div>
                        </div>
                        <p className="text-cefat-gray italic">
                            &quot;Une formation de qualité qui m&apos;a permis de décrocher mon premier emploi avant même la fin de mon stage. Les intervenants sont très professionnels.&quot;
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 rounded-full bg-cefat-red/20 flex items-center justify-center text-cefat-red font-bold">
                                JD
                            </div>
                            <div>
                                <h4 className="font-semibold text-cefat-blue">Jean Diallo</h4>
                                <p className="text-sm text-cefat-gray">Licence Finance</p>
                            </div>
                        </div>
                        <p className="text-cefat-gray italic">
                            &quot;L&apos;environnement d&apos;étude est excellent. J&apos;ai particulièrement apprécié l&apos;approche pratique des cours et la disponibilité des professeurs.&quot;
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 rounded-full bg-cefat-blue/20 flex items-center justify-center text-cefat-blue font-bold">
                                AS
                            </div>
                            <div>
                                <h4 className="font-semibold text-cefat-blue">Aïcha Sylla</h4>
                                <p className="text-sm text-cefat-gray">MBA Management</p>
                            </div>
                        </div>
                        <p className="text-cefat-gray italic">
                            &quot;CEFAT m&apos;a donné les outils nécessaires pour lancer ma propre entreprise. Le réseau des anciens est aussi un atout majeur.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
