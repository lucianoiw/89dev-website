/* eslint-disable @next/next/no-img-element */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h1 className="font-mono text-6xl lg:text-8xl font-bold text-black tracking-tight">
                <img
                  src="/89dev-logo.png"
                  alt="Logo 89Dev"
                  className="w-full h-auto max-w-3xs mx-auto mb-4"
                />
                <div className="sr-only">89Dev</div>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto text-balance leading-relaxed">
                Tecnologia inteligente para impulsionar negócios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="text-center space-y-8">
            <h2 className="font-mono text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Quem Somos
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              A 89dev é especializada em desenvolvimento web, sistemas
              escaláveis e soluções com inteligência artificial. Com mais de 25
              anos de experiência em tecnologia, entregamos projetos robustos,
              inovadores e focados em resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-mono text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções completas em tecnologia para transformar suas ideias em
              realidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-4">
                Desenvolvimento Web Sob Medida
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sites e aplicações web personalizadas com as mais modernas
                tecnologias
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-4">
                APIs e Sistemas Escaláveis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Arquiteturas robustas que crescem junto com seu negócio
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-4">
                Integrações com IA
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Soluções inteligentes que automatizam e otimizam processos
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-4">
                Consultoria em Tecnologia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Orientação estratégica para inovação e transformação digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-mono text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              O que nos torna únicos no mercado de tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-mono font-bold text-primary-foreground">
                  25+
                </span>
              </div>
              <h3 className="font-mono text-xl font-semibold text-foreground">
                Experiência Comprovada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mais de 25 anos entregando projetos de grande escala com
                excelência técnica
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-mono font-bold text-secondary-foreground">
                  ⚡
                </span>
              </div>
              <h3 className="font-mono text-xl font-semibold text-foreground">
                Arquitetura Moderna
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos as tecnologias mais avançadas para garantir
                performance e escalabilidade
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-mono font-bold text-primary-foreground">
                  🎯
                </span>
              </div>
              <h3 className="font-mono text-xl font-semibold text-foreground">
                Foco em Resultados
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada projeto é desenvolvido com foco na inovação e no impacto
                real no seu negócio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="space-y-8">
            <h2 className="font-mono text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              Entre em contato conosco e descubra como podemos transformar suas
              ideias em soluções tecnológicas inovadoras
            </p>
            <div className="space-y-6">
              <a
                href="mailto:contato@89dev.com.br"
                className="inline-block font-mono text-2xl lg:text-3xl font-semibold text-secondary hover:text-primary-foreground transition-colors duration-300"
              >
                contato@89dev.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-mono">
            89dev © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
