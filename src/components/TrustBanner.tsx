import { ShieldCheck, Truck, Clock, CreditCard } from 'lucide-react';

export function TrustBanner() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'Pagamento Seguro',
      description: 'Processado oficialmente pela Stripe com criptografia SSL ponta a ponta.'
    },
    {
      icon: Truck,
      title: 'Envio Rápido',
      description: 'Despacho com código de rastreamento para todo o território nacional.'
    },
    {
      icon: CreditCard,
      title: 'Múltiplas Formas',
      description: 'Pague no Cartão de Crédito em até 12x, Pix instantâneo ou Boleto.'
    },
    {
      icon: Clock,
      title: 'Garantia de 30 Dias',
      description: 'Satisfação garantida ou seu dinheiro de volta sem complicações.'
    }
  ];

  return (
    <section className="bg-white rounded-3xl border border-stone-200/80 p-6 md:p-8 my-10 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-stone-900">{item.title}</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
