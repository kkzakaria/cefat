import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 bg-cefat-gray-light">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-cefat-blue mb-6">
              Bienvenue à <span className="text-cefat-red">CEFAT Business School</span>
            </h1>
            <p className="text-xl text-cefat-gray mb-8 max-w-2xl mx-auto">
              L'excellence académique au service de votre avenir professionnel.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-cefat-red hover:bg-cefat-red-dark text-white">
                Découvrir nos formations
              </Button>
              <Button size="lg" variant="outline" className="text-cefat-blue border-cefat-blue hover:bg-cefat-blue/10">
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
