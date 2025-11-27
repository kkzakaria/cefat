import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-cefat-blue py-20 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
                        <p className="text-xl text-cefat-gray-light/90 max-w-2xl mx-auto">
                            Notre équipe est à votre écoute pour répondre à toutes vos questions.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-cefat-gray-light">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-cefat-blue mb-6">Nos Coordonnées</h2>
                                    <p className="text-cefat-gray mb-8">
                                        N&apos;hésitez pas à nous rendre visite ou à nous contacter par téléphone ou email.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-cefat-blue/10 flex items-center justify-center text-cefat-blue shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-cefat-blue">Adresse</h3>
                                            <p className="text-cefat-gray">
                                                Cocody Riviera 2, Abidjan<br />
                                                Côte d&apos;Ivoire
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-cefat-blue/10 flex items-center justify-center text-cefat-blue shrink-0">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-cefat-blue">Téléphone</h3>
                                            <p className="text-cefat-gray">+225 07 07 07 07 07</p>
                                            <p className="text-cefat-gray">+225 01 01 01 01 01</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-cefat-blue/10 flex items-center justify-center text-cefat-blue shrink-0">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-cefat-blue">Email</h3>
                                            <p className="text-cefat-gray">info@cefat-bs.ci</p>
                                            <p className="text-cefat-gray">admissions@cefat-bs.ci</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-cefat-blue/10 flex items-center justify-center text-cefat-blue shrink-0">
                                            <Clock className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-cefat-blue">Heures d&apos;ouverture</h3>
                                            <p className="text-cefat-gray">Lundi - Vendredi : 08h00 - 18h00</p>
                                            <p className="text-cefat-gray">Samedi : 09h00 - 13h00</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="h-64 bg-gray-200 rounded-xl mt-8 flex items-center justify-center text-gray-400">
                                    [Google Maps Integration]
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
