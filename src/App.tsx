import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Product, SortOption } from './types';
import { Navbar } from './components/Navbar';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { TrustBanner } from './components/TrustBanner';
import { Footer } from './components/Footer';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todas' || product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0; // default order
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900">
      {/* Top Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalProducts={PRODUCTS.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-white p-8 sm:p-12 mb-8 shadow-lg shadow-orange-500/15">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Seleção Exclusiva para Cães & Gatos</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              O melhor para o bem-estar e diversão do seu pet
            </h1>
            <p className="mt-4 text-orange-100 text-sm sm:text-base leading-relaxed">
              Brinquedos interativos, camas ergonômicas, coleiras confortáveis, comedouros elevados e mordedores resistentes com pagamento 100% seguro via Stripe.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-white/90">
              <div className="flex items-center gap-1.5 bg-black/15 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Checkout Direto & Confiável</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/15 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <HeartHandshake className="w-4 h-4 text-amber-200" />
                <span>Garantia de Satisfação</span>
              </div>
            </div>
          </div>

          {/* Decorative background shapes */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute right-12 top-8 w-40 h-40 rounded-full bg-amber-300/20 blur-xl pointer-events-none" />
        </section>

        {/* Filter and Sorting Header */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalFiltered={filteredProducts.length}
        />

        {/* Products Grid */}
        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
              <p className="text-lg font-bold text-stone-800">Nenhum produto encontrado</p>
              <p className="text-sm text-stone-500 mt-1">
                Tente ajustar a busca ou escolher outra categoria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todas');
                }}
                className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>

        {/* Trust & Guarantee Banner */}
        <TrustBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
