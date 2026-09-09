import { useState } from 'react';
import { Product } from '../types';
import { X, ExternalLink, ShieldCheck, Truck, Check, Star, RefreshCw, Lock } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [imageError, setImageError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const fallbackImage = `https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(product.paymentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-modal-content"
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Column */}
          <div className="bg-stone-100 p-6 flex flex-col items-center justify-center relative min-h-[300px]">
            <img
              src={imageError ? fallbackImage : product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="max-h-72 w-full object-contain rounded-xl"
            />
            <span className="mt-3 text-xs font-semibold text-stone-500 uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          {/* Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Reviews */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-700">
                  {product.rating?.toFixed(1)} / 5.0
                </span>
                <span className="text-xs text-stone-400">
                  ({product.reviewsCount} opiniões)
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-stone-900">{product.name}</h2>

              {/* Description */}
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Features checklist */}
              {product.features && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider">
                    Destaques do Produto
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Guarantees */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-stone-700" />
                  <span>Envio com Rastreio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-stone-700" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            {/* Price & Checkout Action */}
            <div className="mt-6 pt-4 border-t border-stone-100">
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <span className="text-xs text-stone-400 block font-medium">Preço</span>
                  <span className="text-3xl font-black text-stone-900 tracking-tight">
                    {product.formattedPrice}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  Pronta Entrega
                </span>
              </div>

              <a
                id={`modal-checkout-button-${product.id}`}
                href={product.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all text-sm"
              >
                <Lock className="w-4 h-4" />
                <span>Pagar Agora no Stripe</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Stripe Secure 256-bit SSL</span>
                </div>
                <button
                  onClick={handleCopyLink}
                  className="hover:text-orange-600 transition-colors"
                >
                  {copiedLink ? 'Link copiado!' : 'Copiar link do checkout'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
