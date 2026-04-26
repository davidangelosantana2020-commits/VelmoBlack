import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Mail, Phone, Instagram, Facebook, Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      created_at: new Date().toISOString(),
    };

    try {
      const { error: supabaseError } = await supabase
        .from('contacts')
        .insert([data]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError('Houve um erro ao enviar sua mensagem. Verifique se as credenciais do Supabase estão configuradas.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest">
          <ChevronLeft size={16} />
          Voltar para Home
        </Link>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight italic">
              Entre em <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Contato</span>
            </h1>
            <p className="text-slate-400 mb-12 text-sm leading-relaxed">
              Tem alguma dúvida sobre o Velmo Black ou sobre seu pedido? Nossa equipe está pronta para te atender.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">E-mail</p>
                  <p className="text-sm font-bold">contato@vivabememelhor.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">WhatsApp</p>
                  <p className="text-sm font-bold">41 98790-5638</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center text-neon-green mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wider">Mensagem Enviada!</h3>
                <p className="text-slate-400 text-sm">Obrigado pelo contato. Em breve nossa equipe retornará sua mensagem.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">Nome Completo</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-neon-green transition-colors"
                    placeholder="Seu nome aqui"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">E-mail</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-neon-green transition-colors"
                    placeholder="exemplo@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1">Mensagem</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-neon-green transition-colors resize-none"
                    placeholder="Como podemos te ajudar?"
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-[11px] bg-red-500/10 p-3 rounded-lg border border-red-500/20 italic">
                    {error}
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-neon-green text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
