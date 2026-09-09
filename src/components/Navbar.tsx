import { ShoppingBag, ShieldCheck, Search, PawPrint } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalProducts: number;
}

export function Navbar({ searchQuery, onSearchChange, totalProducts }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top micro bar for trust */}
      <div className="bg-emerald-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
            <span className="font-medium">Checkout Oficial Stripe • Seus dados 100% protegidos</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-emerald-100 text-[11px]">
            <span>🚚 Envio com rastreio para todo o Brasil</span>
            <span>⭐ Satisfação Garantida</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
              <PawPrint className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-stone-900">
                  Space<span className="text-orange-600">Pet</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-orange-100 text-orange-700">
                  Brasil
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden sm:block">Acessórios e brinquedos premium</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-2">
            <div className="relative">
              <input
                id="search-input"
                type="text"
                placeholder="Buscar por produto, categoria..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-stone-100 hover:bg-stone-50 focus:bg-white text-stone-900 text-sm pl-10 pr-4 py-2 rounded-xl border border-transparent focus:border-orange-500 focus:outline-none transition-all placeholder:text-stone-400"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="text-xs text-stone-400 hover:text-stone-700 absolute right-3 top-1/2 -translate-y-1/2 px-1"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Products Count Indicator & Stripe Tag */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium">
              <ShoppingBag className="w-4 h-4 text-orange-600" />
              <span>{totalProducts} produtos disponíveis</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
