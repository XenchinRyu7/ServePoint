import React, { useState } from 'react';

export default function EcosystemTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'Table Assistant App',
      subtitle: 'Untuk Pelanggan',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      id: 1,
      title: 'Kitchen Display (KDS)',
      subtitle: 'Untuk Dapur / Barista',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Owner Dashboard',
      subtitle: 'Untuk Owner Resto',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="ekosistem" class="py-20 md:py-28 bg-white border-b border-slate-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div class="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-brand-emerald text-xs font-bold uppercase tracking-wider">
            ✨ EKOSISTEM MENYELURUH
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-obsidian tracking-tight">
            Satu Platform, Sinkronisasi Sempurna
          </h2>
          <p class="text-slate-650 font-medium text-slate-600 max-w-2xl mx-auto">
            Dari genggaman tangan pelanggan hingga layar dapur dan dasbor pemilik, data order mengalir lancar tanpa salah paham.
          </p>
        </div>

        {/* Flat Segmented Tab Switcher (Linear/Stripe style) */}
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: Buttons */}
          <div class="w-full lg:w-1/3 flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                class={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                  activeTab === tab.id
                    ? 'bg-slate-50 border-slate-300 shadow-sm text-brand-obsidian'
                    : 'bg-white border-slate-200/80 text-slate-550 hover:bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <div class={`h-10 w-10 rounded-lg flex items-center justify-center border ${
                  activeTab === tab.id
                    ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}>
                  {tab.icon}
                </div>
                <div>
                  <div class="font-bold text-sm tracking-tight">{tab.title}</div>
                  <div class="text-xs text-slate-500 font-medium mt-0.5">{tab.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Showcase Mockup Screen */}
          <div class="w-full lg:w-2/3 bg-slate-50 rounded-2xl border border-slate-200/80 p-5 md:p-8 shadow-sm min-h-[380px] flex flex-col justify-between">
            {activeTab === 0 && (
              <div class="space-y-6 animate-fade-in">
                {/* Header info */}
                <div class="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <h4 class="text-base font-bold text-brand-obsidian">Aplikasi Tablet Meja (Pelanggan)</h4>
                    <p class="text-xs text-slate-500 font-medium mt-0.5">Layar interaktif yang diletakkan di setiap meja makan.</p>
                  </div>
                  <span class="text-xs font-bold text-brand-emerald bg-emerald-50 px-2.5 py-1 rounded border border-emerald-150">Active on Table 08</span>
                </div>

                {/* Simulated App Content */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column: Speak Indicator */}
                  <div class="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm space-y-4">
                    <div class="flex items-center gap-2.5">
                      <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald"></span>
                      </span>
                      <span class="text-xs font-bold text-slate-700 tracking-wider">ASISTEN SUARA AKTIF</span>
                    </div>
                    <div class="text-xs text-slate-500 leading-relaxed font-semibold italic bg-slate-50 p-3 rounded-lg border border-slate-200/40">
                      "Saya mau pesan Espresso Macchiato single satu, Avocado Toast gapake bawang bombay, sama Nasi Goreng Wagyu pedesnya sedang."
                    </div>
                    <div class="text-[10px] text-slate-400 font-medium">✓ Memahami instruksi "gapake bawang bombay" & tingkat kepedasan.</div>
                  </div>

                  {/* Right Column: Dynamic Cart Mockup */}
                  <div class="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                    <div class="space-y-2">
                      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Item Terdeteksi</div>
                      
                      <div class="space-y-1.5">
                        <div class="flex justify-between text-xs font-semibold text-slate-800">
                          <span>1x Espresso Macchiato</span>
                          <span>Rp 28.000</span>
                        </div>
                        <div class="flex justify-between text-xs font-semibold text-slate-800">
                          <span>1x Avocado Toast</span>
                          <span>Rp 42.000</span>
                        </div>
                        <div class="text-[10px] text-brand-amber font-medium italic -mt-1">* Request: Tanpa bawang bombay</div>
                        <div class="flex justify-between text-xs font-semibold text-slate-800">
                          <span>1x Nasi Goreng Wagyu</span>
                          <span>Rp 75.000</span>
                        </div>
                        <div class="text-[10px] text-brand-amber font-medium italic -mt-1">* Request: Pedas Sedang</div>
                      </div>
                    </div>

                    <div class="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-xs">
                      <span class="text-slate-500 font-medium">Total (3 Item)</span>
                      <span class="font-extrabold text-brand-obsidian text-sm">Rp 145.000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div class="space-y-6 animate-fade-in">
                {/* Header info */}
                <div class="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <h4 class="text-base font-bold text-brand-obsidian">Kitchen Display System (KDS)</h4>
                    <p class="text-xs text-slate-500 font-medium mt-0.5">Layar panduan barista & juru masak di dapur.</p>
                  </div>
                  <span class="text-xs font-bold text-brand-amber bg-orange-50 px-2.5 py-1 rounded border border-orange-150">3 Antrean Aktif</span>
                </div>

                {/* Simulated KDS Tickets */}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Ticket 1 */}
                  <div class="bg-white rounded-xl border-t-4 border-t-red-500 border-x border-b border-slate-200/80 p-3 shadow-sm flex flex-col justify-between h-[180px]">
                    <div>
                      <div class="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>MEJA 08</span>
                        <span class="text-red-500 animate-pulse">BARU (1m)</span>
                      </div>
                      <div class="mt-2.5 space-y-1">
                        <div class="text-xs font-bold text-slate-800">1x Espresso Macchiato</div>
                        <div class="text-xs font-bold text-slate-800">1x Avocado Toast</div>
                        <div class="text-[9px] text-brand-amber font-bold italic">- Tanpa bawang bombay</div>
                        <div class="text-xs font-bold text-slate-800">1x Nasi Goreng Wagyu</div>
                        <div class="text-[9px] text-brand-amber font-bold italic">- Pedas Sedang</div>
                      </div>
                    </div>
                    <button class="w-full mt-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-[10px] font-bold uppercase transition-colors">
                      Mulai Masak
                    </button>
                  </div>

                  {/* Ticket 2 */}
                  <div class="bg-white rounded-xl border-t-4 border-t-brand-orange border-x border-b border-slate-200/80 p-3 shadow-sm flex flex-col justify-between h-[180px]">
                    <div>
                      <div class="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>MEJA 12</span>
                        <span class="text-brand-orange">DIPROSES (6m)</span>
                      </div>
                      <div class="mt-2.5 space-y-1">
                        <div class="text-xs font-bold text-slate-800">1x Spaghetti Carbonara</div>
                        <div class="text-[9px] text-brand-amber font-bold italic">- Kurang asin</div>
                        <div class="text-xs font-bold text-slate-800">2x Ice Peach Tea</div>
                        <div class="text-xs font-bold text-slate-800">1x Garlic Bread</div>
                      </div>
                    </div>
                    <button class="w-full mt-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-[10px] font-bold uppercase transition-colors">
                      Selesaikan
                    </button>
                  </div>

                  {/* Ticket 3 */}
                  <div class="bg-slate-100 rounded-xl border-t-4 border-t-slate-400 border-x border-b border-slate-200 p-3 shadow-sm flex flex-col justify-between h-[180px] opacity-70">
                    <div>
                      <div class="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>MEJA 03</span>
                        <span class="text-slate-500">SELESAI (12m)</span>
                      </div>
                      <div class="mt-2.5 space-y-1 line-through text-slate-400">
                        <div class="text-xs font-medium">1x Caffe Latte</div>
                        <div class="text-xs font-medium">1x Croissant Butter</div>
                      </div>
                    </div>
                    <div class="text-center py-1.5 text-[10px] font-bold text-brand-emerald bg-emerald-50 rounded border border-emerald-100 uppercase">
                      ✓ Selesai
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div class="space-y-6 animate-fade-in">
                {/* Header info */}
                <div class="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <h4 class="text-base font-bold text-brand-obsidian">Owner Analytics Dashboard</h4>
                    <p class="text-xs text-slate-500 font-medium mt-0.5">Analisis omzet, efisiensi meja, dan produk terlaris.</p>
                  </div>
                  <span class="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">Bulan Ini</span>
                </div>

                {/* Dashboard Metrics grid */}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Metric 1 */}
                  <div class="bg-white p-4 rounded-xl border border-slate-200/85 shadow-sm">
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Omzet Harian Rata-rata</span>
                    <div class="text-xl font-extrabold text-brand-obsidian mt-1">Rp 12.8M</div>
                    <span class="text-[9px] font-semibold text-brand-emerald flex items-center gap-1 mt-0.5">
                      ↑ +18.4% vs Bulan Lalu
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div class="bg-white p-4 rounded-xl border border-slate-200/85 shadow-sm">
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Table Turnover Rate</span>
                    <div class="text-xl font-extrabold text-brand-obsidian mt-1">+26.5%</div>
                    <span class="text-[9px] font-semibold text-brand-emerald flex items-center gap-1 mt-0.5">
                      ↑ Hemat 12 Menit/Order
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div class="bg-white p-4 rounded-xl border border-slate-200/85 shadow-sm">
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Menu Terlaris</span>
                    <div class="text-xs font-extrabold text-brand-obsidian mt-1.5">1. Kopi Susu Gula Aren</div>
                    <div class="text-[10px] text-slate-500 font-semibold">2. Salmon Mentai Rice</div>
                  </div>
                </div>

                {/* Small Peak Hours chart simulation */}
                <div class="bg-white p-4 rounded-xl border border-slate-200/85 shadow-sm space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Beban Antrean Peak Hours (12:00 - 14:00 & 18:00 - 20:00)</span>
                    <span class="text-[9px] text-brand-emerald font-semibold">Sangat Lancar (0 Antrean Botol Leher)</span>
                  </div>
                  <div class="h-6 flex items-end gap-1 pt-2">
                    <div class="w-full h-[20%] bg-slate-200 rounded-sm"></div>
                    <div class="w-full h-[30%] bg-slate-200 rounded-sm"></div>
                    <div class="w-full h-[60%] bg-slate-300 rounded-sm"></div>
                    <div class="w-full h-[90%] bg-brand-emerald rounded-sm"></div>
                    <div class="w-full h-[85%] bg-brand-emerald rounded-sm"></div>
                    <div class="w-full h-[40%] bg-slate-200 rounded-sm"></div>
                    <div class="w-full h-[50%] bg-slate-200 rounded-sm"></div>
                    <div class="w-full h-[95%] bg-brand-emerald rounded-sm"></div>
                    <div class="w-full h-[70%] bg-brand-emerald rounded-sm"></div>
                    <div class="w-full h-[20%] bg-slate-200 rounded-sm"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
