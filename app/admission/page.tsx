import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PreRegistrationForm } from "@/components/forms/pre-registration-form";

export default function AdmissionPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-cefat-gray-light/30">
                <section className="bg-cefat-blue py-16 text-white mb-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Pré-inscription en ligne</h1>
                        <p className="text-lg text-cefat-gray-light/90 max-w-2xl mx-auto">
                            Rejoignez CEFAT Business School en quelques clics. Remplissez le formulaire ci-dessous pour initier votre dossier.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 pb-20">
                    <PreRegistrationForm />
                </section>
            </main>
            <Footer />
        </div>
    );
}
