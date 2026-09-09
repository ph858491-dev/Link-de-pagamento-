import { useState, MouseEvent } from 'react';
import { Product } from '../types';
import { Star, ShieldCheck, ExternalLink, Info, Check, Sparkles } from 'lucide-react';

interface ProductCardProps {
  key?: string;
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Backup fallback placeholder in case third-party CDN encounters network blocks
  const fallbackImage = `https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80`;

  const handleCopyLink = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(product.paymentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Product Image Container */}
      <div className="relative w-full pt-[85%] bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onOpenDetails(product)}>
        <img
          src={imageError ? fallbackImage : product.imageUrl}
          alt={product.name}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 bg-white"
          loading="lazy"
        />

        {/* Highlight badge */}
        {product.highlight && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>{product.highlight}</span>
          </div>
        )}

        {/* Category Pill on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end pointer-events-none">
          <span className="bg-stone-900/80 backdrop-blur-sm text-stone-100 text-[11px] font-medium px-2.5 py-1 rounded-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating || 5)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-stone-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-700">{product.rating?.toFixed(1)}</span>
            <span className="text-xs text-stone-400">({product.reviewsCount} avaliações)</span>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-lg text-stone-900 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-stone-600 text-sm mt-1.5 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>

          {/* Quick Key Features */}
          {product.features && product.features.length > 0 && (
            <ul className="mt-3 space-y-1 text-xs text-stone-500 border-t border-stone-100 pt-2.5">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="truncate">{product.features[0]}</span>
              </li>
              {product.features[1] && (
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="truncate">{product.features[1]}</span>
                </li>
              )}
            </ul>
          )}
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 pt-4 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-stone-400 block font-medium">Preço à vista</span>
              <span className="text-2xl font-extrabold text-stone-900 tracking-tight">
                {product.formattedPrice}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                Em até 3x sem juros
              </span>
              <span className="text-[10px] text-stone-400 block mt-0.5">no cartão ou Pix</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <a
              id={`buy-button-${product.id}`}
              href={product.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-600 hover:bg-orange-700 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all text-sm"
            >
              <span>Comprar Agora</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between gap-2 pt-1 text-xs text-stone-500">
              <button
                id={`details-button-${product.id}`}
                onClick={() => onOpenDetails(product)}
                className="flex items-center gap-1 hover:text-stone-900 transition-colors py-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Ver detalhes</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1 text-stone-400 hover:text-orange-600 transition-colors py-1"
                title="Copiar link de pagamento direto"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Link copiado!</span>
                  </>
                ) : (
                  <span>Copiar link</span>
                )}
              </button>
            </div>
          </div>

          {/* Stripe Badge Note */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
            <span>Pagamento seguro processado pelo Stripe</span>
          </div>
        </div>
      </div>
    </article>
  );
}
