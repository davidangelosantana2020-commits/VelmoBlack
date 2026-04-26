import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest">
          <ChevronLeft size={16} />
          Voltar para Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-tight italic">
          Política de <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Privacidade</span>
        </h1>

        <div className="space-y-8 text-slate-400 leading-relaxed text-sm">
          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">1. Coleta de Informações</h2>
            <p>
              Coletamos informações quando você se registra em nosso site, faz um pedido ou assina nossa newsletter. As informações coletadas incluem seu nome, endereço de e-mail, número de telefone e dados do cartão de crédito.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">2. Uso das Informações</h2>
            <p>
              Qualquer informação que coletamos de você pode ser usada para personalizar sua experiência, melhorar nosso site, melhorar o atendimento ao cliente e processar transações.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">3. Proteção de Dados</h2>
            <p>
              Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Usamos criptografia de ponta para proteger dados sensíveis transmitidos on-line.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">4. Divulgação a Terceiros</h2>
            <p>
              Não vendemos, trocamos ou transferimos para terceiros suas informações de identificação pessoal. Isso não inclui terceiros confiáveis que nos auxiliam na operação de nosso site e na condução de nossos negócios, desde que essas partes concordem em manter essas informações confidenciais.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">5. Consentimento</h2>
            <p>
              Ao usar nosso site, você consente com nossa política de privacidade.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
