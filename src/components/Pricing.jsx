import React, { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter Pack',
      description: 'Sangat cocok untuk kedai kopi kecil, waralaba tunggal, atau kafe rintisan.',
      tables: 'Maksimal 8 Meja',
      priceMonthly: 399000,
      priceAnnual: 319000,
      features: [
        'Aplikasi Voice AI & Menu Touch',
        'Integrasi 1 Mesin Kasir / POS',
        'Konfigurasi Bahasa Indonesia Standar',
        'Layanan Panggilan Pelayan Digital',
        'Support Email & WhatsApp (Jam Kerja)',
        'Update Sistem Otomatis'
      ],
      cta: 'Mulai Starter',
      featured: false
    },
    {
      name: 'Pro Cafe',
      description: 'Solusi paling populer untuk kafe berskala menengah dengan trafik harian tinggi.',
      tables: '9 - 25 Meja',
      priceMonthly: 799000,
      priceAnnual: 639000,
      features: [
        'Semua fitur Starter Pack',
        'Hingga 25 Meja Terkoneksi',
        'Integrasi KDS Layar Dapur Utama',
        'Custom Kategori Alergen & Diet Menu',
        'Prioritas Integrasi Multi-Kasir POS',
        'Owner Dashboard & Analitik Penjualan',
        'Dedicated Support 24/7'
      ],
      cta: 'Coba Pro Gratis',
      featured: true
    },
    {
      name: 'Enterprise / Franchise',
      description: 'Untuk grup restoran skala besar, multi-outlet, dan kebutuhan kustomisasi penuh.',
      tables: 'Meja Tidak Terbatas',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      features: [
        'Semua fitur Pro Cafe',
        'Manajemen Multi-Outlet Pusat',
        'Integrasi POS Kustom / API Internal',
        'Latihan Model AI Suara Khusus Kafe Anda',
        'Instalasi Server Lokal (On-Premise) Opsional',
        'Service Level Agreement (SLA) Resmi',
        'Account Manager Pribadi'
      ],
      cta: 'Hubungi Sales',
      featured: false
    }
  ];

  return (
    <section id="harga" class="py-20 md:py-28 bg-slate-50 border-b border-slate-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div class="max-w-3xl mx-auto text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-brand-emerald text-xs font-bold uppercase tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-brand-emerald">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v.375c0 .621.504 1.125 1.125 1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
            </svg>
            SKEMA HARGA
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-obsidian tracking-tight">
            Investasi Terjangkau untuk Hasil Maksimal
          </h2>
          <p class="text-slate-600 font-medium max-w-2xl mx-auto text-sm md:text-base">
            Tanpa biaya tersembunyi. Pilih paket sesuai kapasitas meja kafe Anda dan tingkatkan omzet restoran mulai hari ini.
          </p>
        </div>

        {/* Annual Toggle Switch */}
        <div class="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <span class={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-brand-obsidian' : 'text-slate-400'}`}>
            Tagihan Bulanan
          </span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            class="relative inline-flex h-6.5 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:ring-offset-2"
            style={{ backgroundColor: isAnnual ? '#059669' : '#CBD5E1' }}
            role="switch"
            aria-checked={isAnnual}
          >
            <span 
              class="pointer-events-none inline-block h-5.5 w-5.5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              style={{ transform: isAnnual ? 'translateX(22px)' : 'translateX(0px)' }}
            ></span>
          </button>
          <span class={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${isAnnual ? 'text-brand-emerald' : 'text-slate-400'}`}>
            Tagihan Tahunan 
            <span class="text-[10px] font-bold bg-brand-emerald/10 text-brand-emerald px-2 py-0.5 rounded-full border border-brand-emerald/20">
              Hemat 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isCustom = typeof plan.priceMonthly === 'string';
            const displayPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            
            return (
              <div 
                key={index}
                class={`bg-white rounded-2xl border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.featured 
                    ? 'border-brand-emerald ring-2 ring-brand-emerald/20 shadow-xl lg:scale-[1.03] z-10' 
                    : 'border-slate-200/80 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <span class="absolute -top-3.5 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-white bg-brand-emerald px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Paling Populer
                  </span>
                )}

                {/* Card Header */}
                <div class="p-6 md:p-8 border-b border-slate-100">
                  <h3 class="text-lg font-bold text-brand-obsidian">{plan.name}</h3>
                  <p class="text-xs text-slate-500 font-medium mt-2 leading-relaxed min-h-[40px]">{plan.description}</p>
                  
                  <div class="mt-5">
                    <span class="text-xs text-slate-400 font-bold block">{plan.tables}</span>
                    <div class="flex items-baseline gap-1 mt-2">
                      {isCustom ? (
                        <span class="text-2xl md:text-3xl font-black text-brand-obsidian">{displayPrice}</span>
                      ) : (
                        <>
                          <span class="text-xs font-bold text-slate-500">Rp</span>
                          <span class="text-2xl md:text-3xl font-black text-brand-obsidian">
                            {displayPrice.toLocaleString('id-ID')}
                          </span>
                          <span class="text-xs font-semibold text-slate-400">/bulan</span>
                        </>
                      )}
                    </div>
                    {!isCustom && (
                      <span class="text-[10px] text-slate-400 font-medium block mt-1">
                        {isAnnual ? `* Ditagih Rp ${(displayPrice * 12).toLocaleString('id-ID')}/tahun` : '* Batalkan kapan saja'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div class="p-6 md:p-8 flex-1 space-y-4">
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Fitur yang didapat:</span>
                  <ul class="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} class="flex items-start gap-2.5 text-xs text-slate-650 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 text-brand-emerald shrink-0 mt-0.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span class="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div class="p-6 md:p-8 pt-0">
                  <a
                    href="#cta-form"
                    class={`block w-full text-center py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      plan.featured
                        ? 'bg-brand-amber hover:bg-brand-amber-hover text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
