import { ShieldCheck, PawPrint, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white">
                <PawPrint className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Space<span className="text-orange-500">Pet</span>
              </span>
            </div>
            <p className="mt-3 text-xs text-stone-400 max-w-md leading-relaxed">
              Sua loja especializada em bem-estar animal. Produtos selecionados para oferecer o máximo de conforto, diversão e saúde para o seu cão e gato.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Checkout Oficial com Proteção de Dados Stripe</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-stone-200 mb-3">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Brinquedos Interativos</li>
              <li>Camas Impermeáveis</li>
              <li>Coleiras e Guias em H</li>
              <li>Comedouros Elevados</li>
              <li>Mordedores Benebone</li>
            </ul>
          </div>

          {/* Col 3: Safe Payment Info */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-stone-200 mb-3">
              Segurança & Pagamentos
            </h4>
            <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60 text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Lock className="w-3.5 h-3.5 text-orange-400" />
                <span>Ambiente Seguro Stripe</span>
              </div>
              <p className="text-[11px] leading-snug">
                Os pagamentos são efetuados diretamente na plataforma segura da Stripe. Aceitamos todos os cartões de crédito, Pix e boleto.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Space Pet. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Privacidade</span>
            <span>•</span>
            <span>Termos de Compra</span>
            <span>•</span>
            <span>Garantia de Entrega</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
