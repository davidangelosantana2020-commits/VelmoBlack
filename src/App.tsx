import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  Heart,
  Star,
  ChevronRight,
  Leaf,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

// ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const FloatingWhatsAppButton = () => (
  <a 
    href="https://wa.me/5541987905638?text=" 
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[60] bg-neon-green text-black p-4 rounded-full shadow-[0_0_20px_rgba(29,233,182,0.4)] hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} />
  </a>
);

const FlavorSwitcher = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentFlavor = queryParams.get('sabor') || 'morango';

  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10 mt-2">
      <Link 
        to="/?sabor=morango"
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${currentFlavor === 'morango' ? 'bg-strawberry text-white' : 'text-slate-400 hover:text-white'}`}
      >
        Morango
      </Link>
      <Link 
        to="/?sabor=combo"
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${currentFlavor === 'combo' ? 'bg-tangerine text-white' : 'text-slate-400 hover:text-white'}`}
      >
        Combo
      </Link>
      <Link 
        to="/?sabor=super-oferta"
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${currentFlavor === 'super-oferta' ? 'bg-strawberry text-white' : 'text-slate-400 hover:text-white'}`}
      >
        Super Oferta
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-600 rounded-sm shadow-xl"></div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter uppercase whitespace-nowrap flex items-baseline">
            VELMO BLACK
            <span className="text-[12px] md:text-[14px] font-light tracking-[0.3em] text-slate-500 ml-3 italic opacity-80 lowercase">Drinks</span>
          </h1>
        </div>
        <FlavorSwitcher />
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, centered = false }: { children: React.ReactNode, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-light tracking-tight mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[14px] uppercase tracking-[0.2em] text-slate-500 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const BenefitCard = ({ icon: Icon, title, description, delay, accentColor = "text-neon-green" }: { icon: any, title: string, description: string, delay: number, accentColor?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-start gap-4 group"
  >
    <div className={`p-3 bg-white/5 rounded-md ${accentColor} group-hover:scale-110 transition-transform`}>
      <Icon size={20} />
    </div>
    <div>
      <h3 className="text-[13px] font-bold text-white mb-1 uppercase tracking-wider">{title}</h3>
      <p className="text-[11px] text-slate-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, text, delay }: { name: string, role: string, text: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-r-xl border-l-2 border-neon-green"
  >
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-neon-green text-neon-green" />)}
    </div>
    <p className="text-[11px] leading-relaxed text-slate-300 italic mb-4">"{text}"</p>
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-slate-700"></div>
      <div>
        <h4 className="text-[10px] font-bold">{name}</h4>
        <p className="text-slate-500 text-[9px] uppercase tracking-tighter">{role}</p>
      </div>
    </div>
  </motion.div>
);

const FLAVORS = {
  morango: {
    title: "VELMO BLACK Drinks Morango",
    description: "Transforme sua rotina com o sabor irresistível de morango. Uma bebida funcional moderna, refrescante e pensada para quem busca equilíbrio.",
    image: "https://i.postimg.cc/SNgsZTJF/velmo-black-morango-potes-1.png",
    colorGradient: "from-white to-strawberry",
    benefitAccent: "text-strawberry",
    flavorText: "morango",
    affiliateLink: "https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20VELMO%20BLACK%20sabor%20Morango."
  },
  combo: {
    title: "VELMO BLACK Combo",
    description: "Conquiste resultados completos com o nosso combo exclusivo. A solução prática para uma rotina mais completa e equilibrada.",
    image: "https://i.postimg.cc/524NdGLj/velmo-duo-040405-v2.png",
    colorGradient: "from-white to-tangerine",
    benefitAccent: "text-tangerine",
    flavorText: "combo",
    affiliateLink: "https://wa.me/5541987905638?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20Combo%20exclusivo%20do%20VELMO%20BLACK."
  },
  superOferta: {
    title: "VELMO BLACK - Super Oferta",
    description: "Aproveite esta oportunidade única para transformar sua rotina com um super desconto.",
    image: "https://i.postimg.cc/rwdCJdHb/Velmo-Morango-v3-mega-desconta-o-2-2.png",
    colorGradient: "from-white to-strawberry",
    benefitAccent: "text-strawberry",
    flavorText: "super oferta",
    affiliateLink: "https://wa.me/5541987905638?text=Ol%C3%A1%21%20Tenho%20interesse%20na%20Super%20Oferta%20do%20VELMO%20BLACK."
  }
};

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const flavorKey = (queryParams.get('sabor') as 'morango' | 'combo' | 'super-oferta') || 'morango';
  const config = FLAVORS[flavorKey === 'super-oferta' ? 'superOferta' : flavorKey] || FLAVORS.morango;

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center">
        {/* Background Accents */}
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-green-900/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-6">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest text-slate-300">Exclusividade Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light leading-[1.1] mb-6 tracking-tight">
              Viva Bem e <br/>Melhor com <br/>
              <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${config.colorGradient} italic`}>
                {config.title}
              </span>
            </h1>
            
            <p className="text-slate-400 text-base leading-relaxed max-w-[400px] mb-10">
              {config.description}
            </p>
            
            <div className="flex flex-col gap-6 mt-2 max-w-sm">
              <a 
                href="https://wa.me/5541987905638?text="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neon-green text-black font-bold py-4 px-8 rounded-sm hover:scale-[1.02] transition-transform text-sm uppercase tracking-wider text-center"
              >
                COMPRAR AGORA
              </a>
              
              <div className="flex justify-between items-center px-1 opacity-60">
                <div className="flex flex-col text-[10px] uppercase">
                  <span className="text-slate-500">Açúcar</span>
                  <span className="text-white font-bold">Zero</span>
                </div>
                <div className="w-px h-6 bg-white/10"></div>
                <div className="flex flex-col text-[10px] uppercase">
                  <span className="text-slate-500">Calorias</span>
                  <span className="text-white font-bold">Zero</span>
                </div>
                <div className="w-px h-6 bg-white/10"></div>
                <div className="flex flex-col text-[10px] uppercase">
                  <span className="text-slate-500">Qualidade</span>
                  <span className="text-white font-bold">Premium</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Real Product Visual */}
            <div className="relative z-20 group">
              <motion.img 
                src={config.image} 
                alt={`Potes de Velmo Black Drink sabor ${config.flavorText}`}
                loading="eager"
                className="w-full max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] z-10 -translate-y-1/2 top-1/2"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 md:py-32 bg-dark-surface/50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading subtitle="Criamos uma fórmula pensada na sua performance e equilíbrio diário." centered>
            Benefícios que Transformam
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={CheckCircle2} 
              delay={0.1}
              title="Controle Total" 
              description="Ajuda no controle da vontade de doces e no equilíbrio da fome emocional durante a rotina." 
            />
            <BenefitCard 
              icon={Droplets} 
              delay={0.2}
              title="Efeito Desinchaço" 
              description="Auxilia na redução da sensação de inchaço e retenção de líquidos, promovendo mais leveza." 
            />
            <BenefitCard 
              icon={Heart} 
              delay={0.3}
              accentColor={config.benefitAccent}
              title={`Sabor ${config.flavorText.charAt(0).toUpperCase() + config.flavorText.slice(1)} Irresistível`} 
              description={`O prazer de uma bebida saborosa de ${config.flavorText}, refrescante e sem açúcar, ideal para o dia a dia.`} 
            />
            <BenefitCard 
              icon={Zap} 
              delay={0.4}
              title="Mais Praticidade" 
              description="Fácil de preparar e perfeito para incluir na sua rotina de bem-estar." 
            />
            <BenefitCard 
              icon={Leaf} 
              delay={0.5}
              title="Sensação de Leveza" 
              description="Uma experiência pensada para quem busca mais disposição e equilíbrio diário." 
            />
            <BenefitCard 
              icon={ShieldCheck} 
              delay={0.6}
              title="Rotina Mais Saudável" 
              description="Ideal para apoiar hábitos mais conscientes e consistentes." 
            />
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section id="diferenciais" className="py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Por que escolher <br/><span className="text-neon-green">Velmo Black?</span></h2>
            <div className="space-y-6">
              {[
                "Fórmula moderna e funcional",
                `Sabor autêntico de ${config.flavorText}`,
                "Sem açúcar e Zero calorias",
                "Fácil preparo em qualquer lugar",
                "Ideal para rotina corrida",
                "Produto com proposta premium"
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg text-white/80 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative">
             <div className="w-full aspect-square max-w-lg mx-auto bg-gradient-to-br from-white/5 to-white/0 rounded-[4rem] border border-white/10 p-1 bg-clip-border flex items-center justify-center overflow-hidden group">
               <div className="relative w-full h-full bg-[#050505] rounded-[3.8rem] flex flex-col items-center justify-center p-8 overflow-hidden">
                  <motion.img 
                    src={config.image} 
                    alt={`Detalhes do pote Velmo Black Drink sabor ${config.flavorText}`}
                    loading="lazy"
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(29,233,182,0.2)]"
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  />
                  {/* Decorative lines */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/2 w-px h-full bg-neon-green" />
                    <div className="absolute left-0 top-1/2 w-full h-px bg-neon-green" />
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) */}
      <section id="depoimentos" className="py-24 md:py-32 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            subtitle="Consumidores relatam mais praticidade, mais controle alimentar e uma rotina com mais leveza e equilíbrio." 
            centered
          >
            Pessoas que escolheram uma rotina mais leve
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              delay={0.1}
              name="Mariana Silva" 
              role="Empresária" 
              text="O Velmo Black se tornou meu companheiro fiel nas tardes de trabalho. Sinto que me ajuda a manter o foco e controla aquela vontade de doce." 
            />
            <TestimonialCard 
              delay={0.2}
              name="Ricardo Mendes" 
              role="Arquiteto" 
              text="Incrível como o sabor é bom mesmo sendo zero açúcar. Prático de preparar na obra e me sinto muito mais disposto." 
            />
            <TestimonialCard 
              delay={0.3}
              name="Juliana Costa" 
              role="Nutricionista" 
              text="A composição é muito equilibrada. Indico para quem busca uma rotina mais leve e quer substituir bebidas calóricas por algo funcional." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 md:py-40 relative overflow-hidden bg-white/5 border-y border-white/5">
        <div className="absolute inset-0 bg-neon-green/5 -z-10 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight max-w-4xl mx-auto">
              Sua melhor versão começa com uma <br/><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 italic">escolha</span>
            </h2>
            <p className="text-[14px] uppercase tracking-[0.2em] text-slate-500 mb-12 max-w-2xl mx-auto">
              Dê o próximo passo para uma rotina mais leve e equilibrada.
            </p>
            <a 
              href="https://wa.me/5541987905638?text=" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-neon-green text-black px-12 py-5 rounded-sm font-bold text-lg transition-all hover:scale-105 active:scale-95 uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(29,233,182,0.3)]"
            >
              COMPRAR AGORA
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-16 bg-black z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12">
            {/* Logo/Support Column */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-600 rounded-sm"></div>
                <span className="text-lg font-bold tracking-tighter uppercase">VELMO <span className="text-slate-500">BLACK</span></span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Alta Performance & Bem-Estar</p>
            </div>

            {/* Support/Contact Column */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-2">Suporte ao Cliente</h4>
              <div className="flex flex-col items-center md:items-start gap-3">
                <a href="mailto:contato@vivabememelhor.com" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={14} className="text-neon-green" />
                  contato@vivabememelhor.com
                </a>
                <a href="https://wa.me/5541987905638?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20VELMO%20BLACK." target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={14} className="text-neon-green" />
                  41 98790-5638
                </a>
                <div className="flex flex-col items-center md:items-start gap-2 mt-2">
                  <img src="https://i.postimg.cc/ykNGQ7wc/qr.png" alt="QR Code WhatsApp" className="w-24 h-24 border border-white/10 rounded-sm" />
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 uppercase tracking-widest">
                    <MessageCircle size={12} className="text-neon-green" />
                    Fale conosco
                  </div>
                </div>
              </div>
            </div>

            {/* Links Column */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-2">Links Úteis</h4>
              <div className="flex flex-col items-center md:items-start gap-3 text-sm text-slate-400 uppercase tracking-widest text-[11px]">
                <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col gap-8">
            <div className="text-[10px] text-slate-600 max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">
              AVISO LEGAL: Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados individuais podem variar. <br className="hidden md:block" />
              Consulte seu médico antes de iniciar qualquer mudança em sua rotina nutricional.
            </div>
            <div className="text-[9px] text-slate-800 uppercase tracking-[0.4em] text-center">
              {new Date().getFullYear()} VELMO BLACK DRINKS — TODOS OS DIREITOS RESERVADOS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/privacidade" element={<Privacy />} />
      </Routes>
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
