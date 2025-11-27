import { Button } from "@/components/ui/button";

export function ContactForm() {
    return (
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-cefat-blue">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="w-full rounded-md border border-cefat-gray/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cefat-blue/20 focus:border-cefat-blue"
                        placeholder="Votre prénom"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-cefat-blue">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="w-full rounded-md border border-cefat-gray/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cefat-blue/20 focus:border-cefat-blue"
                        placeholder="Votre nom"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-cefat-blue">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-cefat-gray/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cefat-blue/20 focus:border-cefat-blue"
                    placeholder="votre@email.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-cefat-blue">
                    Sujet
                </label>
                <select
                    id="subject"
                    className="w-full rounded-md border border-cefat-gray/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cefat-blue/20 focus:border-cefat-blue bg-white"
                >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="admission">Renseignements Admission</option>
                    <option value="partenariat">Partenariat Entreprise</option>
                    <option value="support">Support Étudiant</option>
                    <option value="autre">Autre</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-cefat-blue">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-cefat-gray/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cefat-blue/20 focus:border-cefat-blue resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
            </div>

            <Button type="submit" className="w-full bg-cefat-red hover:bg-cefat-red-dark text-white font-medium py-2.5">
                Envoyer le message
            </Button>
        </form>
    );
}
