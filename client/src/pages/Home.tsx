import { Button } from "@/components/ui/button";
import { MessageCircle, Camera, Heart, Clock } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Elegant Minimalism
 * - Generous whitespace with typography as primary element
 * - Monochromatic palette with rose accent (#D4A5A5)
 * - Cream background (#FFFBF7) with charcoal text (#1A1A1A)
 * - Typography: Playfair Display (titles), Montserrat (subtitles), Lato (body)
 * - Asymmetric grid showcasing photography as protagonist
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const whatsappNumber = "5511992174025"; // Ingrid R. Silva
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para seus serviços de fotografia.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    {
      id: "ensaios",
      title: "Ensaios Fotográficos",
      description:
        "Um momento especial para registrar sua essência com leveza, naturalidade e direção profissional. Retratos, lifestyle, fotos para redes sociais e muito mais.",
      icon: Camera,
    },
    {
      id: "eventos",
      title: "Cobertura de Eventos",
      description:
        "Registro completo dos momentos mais especiais da sua celebração. Casamentos, festas e eventos diversos captados com sensibilidade e profissionalismo.",
      icon: Heart,
    },
    {
      id: "sociais",
      title: "Eventos Sociais",
      description:
        "Planejamento e realização de eventos sociais personalizados com atenção aos detalhes, elegância e estrutura completa para sua tranquilidade.",
      icon: Clock,
    },
  ];

  const portfolio = [
    {
      id: 1,
      image: "/assets/photo-event-1-new.jpg",
      title: "Evento Colorido - Aniversário Ingrid",
    },
    {
      id: 2,
      image: "/assets/photo-event-2-new.jpg",
      title: "Momento em Família - Evento Social",
    },
    {
      id: 3,
      image: "/assets/photo-event-3-new.jpg",
      title: "Celebração Especial em Família",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo-ingrid.png" alt="Ingrid R. Silva Click" className="w-12 h-12 rounded-full object-cover" />
            <h1 className="text-lg font-bold" style={{ fontFamily: "Playfair Display" }}>
              Ingrid R. Silva
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contato" className="text-sm hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 leading-tight">
              Mais do que fotos, entrego registros cheios de emoção
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Sou Ingrid R. Silva, fotógrafa apaixonada por capturar emoções reais de forma leve,
              natural e verdadeira. Cada ensaio é uma experiência cuidadosamente pensada para que
              você se sinta à vontade e tenha imagens autênticas, cheias de significado e emoção.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" />

      {/* Services Section */}
      <section id="servicos" className="section-spacing">
        <div className="container">
          <h2 className="mb-4 text-center">Nossos Serviços</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Cada serviço é personalizado para capturar a essência e emoção de seus momentos
            especiais
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`p-8 rounded-lg border-2 transition-all duration-300 ${
                      hoveredService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border bg-white"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mb-4 transition-colors duration-300 ${
                        hoveredService === service.id ? "text-primary" : "text-foreground/60"
                      }`}
                    />
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" />

      {/* Portfolio Section */}
      <section id="portfolio" className="section-spacing">
        <div className="container">
          <h2 className="mb-4 text-center">Portfolio</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Momentos especiais eternizados com sensibilidade e profissionalismo
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg aspect-square bg-secondary"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" />

      {/* About Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Sobre Mim</h2>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Sou Ingrid R.Silva, fotógrafa apaixonada por registrar momentos reais, cheios de
                emoção e significado. Acredito que a fotografia vai muito além da imagem; ela
                guarda histórias, sentimentos e memórias que atravessam o tempo.
              </p>
              <p>
                Meu trabalho é feito com sensibilidade, atenção aos detalhes e um atendimento
                próximo, para que você se sinta à vontade e viva o momento enquanto eu cuido de
                eternizá-lo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" />

      {/* Why Choose Section */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="mb-16 text-center">Por Que Escolher a Ingrid R.Silva Click?</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl mb-3 text-primary">Atendimento Personalizado</h3>
              <p className="text-foreground/70">
                Cada cliente é único. Oferecemos um atendimento próximo e humanizado, entendendo
                suas expectativas para entregar exatamente o que você sonha.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-primary">Qualidade e Profissionalismo</h3>
              <p className="text-foreground/70">
                Utilizamos equipamentos modernos e técnicas atualizadas para garantir imagens
                nítidas, bem iluminadas e cheias de emoção.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-primary">Sensibilidade e Emoção</h3>
              <p className="text-foreground/70">
                Captamos momentos espontâneos e verdadeiros, transformando sentimentos em memórias
                eternas que você revivará sempre.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-primary">Compromisso e Pontualidade</h3>
              <p className="text-foreground/70">
                Cumprimos prazos e cuidamos de cada detalhe do início ao fim, oferecendo
                tranquilidade e confiança em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" />

      {/* CTA Section */}
      <section id="contato" className="section-spacing">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Vamos Registrar Seu Momento Especial?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Estou pronta para registrar sua história com sensibilidade e profissionalismo.
              Entre em contato agora e solicite seu orçamento de forma rápida e segura.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-3">
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Ingrid R. Silva</h4>
                <p className="text-sm text-foreground/70">
                  Fotografia profissional para eternizar seus momentos especiais.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#servicos" className="text-foreground/70 hover:text-primary">
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="text-foreground/70 hover:text-primary">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="text-foreground/70 hover:text-primary">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
              <p>&copy; 2026 Ingrid R. Silva Fotografia. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Enviar mensagem no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
