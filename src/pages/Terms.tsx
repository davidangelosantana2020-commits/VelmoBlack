import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest">
          <ChevronLeft size={16} />
          Voltar para Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-tight italic">
          Termos de <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Uso</span>
        </h1>

        <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou adquirir nossos produtos.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">2. Uso do Site</h2>
            <p>
              O conteúdo deste site é para sua informação geral e uso apenas. Ele está sujeito a alterações sem aviso prévio. O uso de qualquer informação ou material neste site é inteiramente por sua conta e risco, pelo qual não seremos responsáveis.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">3. Produtos e Preços</h2>
            <p>
              Esforçamo-nos para exibir com a maior precisão possível as cores e imagens de nossos produtos. Não podemos garantir que a exibição de qualquer cor no monitor do seu computador seja precisa. Reservamo-nos o direito de limitar as vendas de nossos produtos a qualquer pessoa, região geográfica ou jurisdição.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">4. Propriedade Intelectual</h2>
            <p>
              Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não se limita ao design, layout, aparência e gráficos. A reprodução é proibida, exceto de acordo com o aviso de direitos autorais, que faz parte destes termos e condições.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">5. Limitação de Responsabilidade</h2>
            <p>
              O Velmo Black Drink e seus representantes não serão responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso do produto ou da incapacidade de usá-lo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
