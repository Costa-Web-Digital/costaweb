import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm text-[var(--text-secondary)]">
                Agência digital completa
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Seu negócio no{' '}
              <span className="gradient-text">digital</span>,
              <br />
              do jeito certo
            </h1>

            <p className="text-lg text-[var(--text-muted)] mb-8 max-w-xl">
              Transformamos sua presença online com sites, sistemas e estratégias de tráfego
              que geram resultados reais para seu negócio.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Quero meu site agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-semibold text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
              >
                Ver portfólio
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold gradient-text">+50</p>
                <p className="text-sm text-[var(--text-muted)]">sites entregues</p>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)]" />
              <div>
                <p className="text-3xl font-bold gradient-text">98%</p>
                <p className="text-sm text-[var(--text-muted)]">clientes satisfeitos</p>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)]" />
              <div>
                <p className="text-3xl font-bold gradient-text">+3 anos</p>
                <p className="text-sm text-[var(--text-muted)]">de mercado</p>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-bg opacity-20 rounded-3xl blur-2xl" />
              
              <div className="relative glass rounded-3xl p-8 border border-[var(--glass-border)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 glass px-4 py-1.5 rounded-lg text-sm text-[var(--text-muted)]">
                    costaweb.com.br
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-4 bg-[var(--border-color)] rounded w-3/4" />
                  <div className="h-4 bg-[var(--border-color)] rounded w-1/2" />
                  <div className="h-20 gradient-bg rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold">Hero Section</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-[var(--border-color)] rounded-xl" />
                    <div className="h-16 bg-[var(--border-color)] rounded-xl" />
                    <div className="h-16 bg-[var(--border-color)] rounded-xl" />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-[var(--glass-border)]">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">🚀 ROI +300%</span>
                </div>

                <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-[var(--glass-border)]">
                  <span className="text-sm font-semibold text-[var(--color-secondary)]">100% Responsivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
