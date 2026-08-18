import React, { useState } from 'react';

export default function EcosystemTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'Table Assistant App',
      subtitle: 'Untuk Pelanggan (RAG & Gizi)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      id: 1,
      title: 'Kitchen Display (KDS)',
      subtitle: 'Untuk Dapur / Barista',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Owner & Custom RAG Admin',
      subtitle: 'Untuk Owner & Manager Resto',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="ekosistem" className="py-20 md:py-28 bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-brand-emerald text-xs font-bold uppercase tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-brand-emerald">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            EKOSISTEM MENYELURUH
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-obsidian tracking-tight">
            Satu Platform, Sinkronisasi Data & Gizi Sempurna
          </h2>
          <p className="text-slate-600 font-medium text-slate-600 max-w-2xl mx-auto">
            Dari tablet pelanggan yang bisa konsultasi kalori gym, hingga dasbor owner untuk upload data RAG dan monitor omzet.
          </p>
        </div>

        {/* Flat Segmented Tab Switcher */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: Buttons */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                  activeTab === tab.id
                    ? 'bg-slate-50 border-slate-300 shadow-sm text-brand-obsidian'
                    : 'bg-white border-slate-200/80 text-slate-550 hover:bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center border ${
                  activeTab === tab.id
                    ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}>
                  {tab.icon}
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight">{tab.title}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{tab.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Showcase Mockup Screen */}
          <div className="w-full lg:w-2/3 bg-slate-50 rounded-2xl border border-slate-200/80 p-5 md:p-8 shadow-sm min-h-[380px] flex flex-col justify-between">
            {activeTab === 0 && (
              <div className="space-y-6 animate-fade-in">
                {/* Header info */}
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <h4 className="text-base font-bold text-brand-obsidian">Aplikasi Tablet Meja (Pelanggan)</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Asisten suara cerdas dengan info gizi & konsultasi fitness.</p>
                  </div>
                  <span className="text-xs font-bold text-brand-emerald bg-emerald-50 px-2.5 py-1 rounded border border-emerald-150">Active on Table 08</span>
                </div>

                {/* Simulated App Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column: Voice & RAG Query */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald"></span>
                      </span>
                      <span className="text-xs font-bold text-slate-700 tracking-wider">AI RAG & GYM ASSISTANT</span>
                    </div>
                    <div className="text-xs text-slate-700 leading-relaxed font-semibold italic bg-slate-50 p-3 rounded-lg border border-slate-200/40">
                      "Mbak AI, ada rekomendasi menu tinggi protein (&gt;30g) setelah gym? Terus berapa kalori &amp; karbohidratnya?"
                    </div>
                    <div className="text-[11px] text-emerald-800 font-medium bg-emerald-50 p-2.5 rounded-lg border border-emerald-150 flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
                      </svg>
                      <span><b>Jawaban AI:</b> "Grilled Salmon Grain Bowl memiliki <b>38g Protein</b>, <b>520 kcal</b>, dan 34g Karbo. Dressing dipisah menghemat 90 kcal."</span>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Cart & Macros */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Item & Makronutrisi Terdeteksi</div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold text-slate-800">
                          <span>1x Grilled Salmon Grain Bowl</span>
                          <span>Rp 68.000</span>
                        </div>
                        <div className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-100 flex justify-between">
                          <span>38g Protein</span>
                          <span>520 kcal</span>
                          <span>34g Karbo</span>
                        </div>

                        <div className="flex justify-between text-xs font-semibold text-slate-800 pt-1">
                          <span>1x Cold Pressed Green Juice</span>
                          <span>Rp 32.000</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium italic -mt-1">* Catatan: Tanpa Tambahan Gula</div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Total (2 Item)</span>
                      <span className="font-extrabold text-brand-obsidian text-sm">Rp 100.000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-6 animate-fade-in">
                {/* Header info */}
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <h4 className="text-base font-bold text-brand-obsidian">Kitchen Display System (KDS)</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Layar panduan barista & juru masak lengkap dengan spesifikasi gizi.</p>
                  </div>
                  <span className="text-xs font-bold text-brand-amber bg-orange-50 px-2.5 py-1 rounded border border-orange-150">3 Antrean Aktif</span>
                </div>

                {/* Simulated KDS Tickets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Ticket 1 */}
                  <div className="bg-white rounded-xl border-t-4 border-t-red-500 border-x border-b border-slate-200/80 p-3 shadow-sm flex flex-col justify-between h-[190px]">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>MEJA 08 (GYM CUSTOMER)</span>
                        <span className="text-red-500 animate-pulse">BARU (1m)</span>
                      </div>
                      <div className="mt-2.5 space-y-1">
                        <div className="text-xs font-bold text-slate-800">1x Grilled Salmon Grain Bowl</div>
                        <div className="text-[9px] text-brand-emerald font-bold italic">- Dressing Olive Oil Dipisah</div>
                        <div className="text-xs font-bold text-slate-800">1x Cold Pressed Juice</div>
                        <div className="text-[9px] text-brand-amber font-bold italic">- No Sugar</div>
                      </div>
                    </div>
                    <button className="w-full mt-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-[10px] font-bold uppercase transition-colors">
                      Mulai Masak
                    </button>
                  </div>

                  {/* Ticket 2 */}
                  <div className="bg-white rounded-xl border-t-4 border-t-brand-orange border-x border-b border-slate-200/80 p-3 shadow-sm flex flex-col justify-between h-[190px]">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>MEJA 12</span>
                        <span className="text-brand-orange">DIPROSES (6m)</span>
                      </div>
                      <div className="mt-2.5 space-y-1">
                        <div className="text-xs font-bold text-slate-800">1x Chicken Breast Avocado</div>
                        <div className="text-[9px] text-brand-amber font-bold italic">- Extra Protein Portion</div>
                        <div className="text-xs font-bold text-slate-800">2x Ice Peach Tea</div>
                      </div>
                    </div>
                    <button className="w-full mt-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-[10px] font-bold uppercase transition-colors">
                      Selesaikan
                    </button>
                  </div>

                  {/* Ticket 3 */}
                  <div className="bg-slate-100 rounded-xl border-t-4 border-t-slate-400 border-x border-b border-slate-200 p-3 shadow-sm flex flex-col justify-between h-[190px] opacity-70">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>MEJA 03</span>
                        <span className="text-slate-500">SELESAI (12m)</span>
                      </div>
                      <div className="mt-2.5 space-y-1 line-through text-slate-400">
                        <div className="text-xs font-medium">1x Caffe Latte</div>
                        <div className="text-xs font-medium">1x Croissant Butter</div>
                      </div>
                    </div>
                    <div className="text-center py-1.5 text-[10px] font-bold text-brand-emerald bg-emerald-50 rounded border border-emerald-100 uppercase">
                      ✓ Selesai
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-6 animate-fade-in">
                {/* Header info */}
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <h4 className="text-base font-bold text-brand-obsidian">Owner Dashboard & Custom RAG Manager</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Upload basis data gizi, atur flow jawaban AI, & pantau omzet.</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Custom RAG Active</span>
                </div>

                {/* Dashboard RAG Manager grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* RAG Upload Card */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Upload Knowledge Base</span>
                    <div className="text-xs font-extrabold text-brand-obsidian">menu_gizi_resep_2026.xlsx</div>
                    <div className="text-[9px] text-brand-emerald font-bold">✓ 24 Menu & Macro Facts Uploaded</div>
                  </div>

                  {/* Flow Answer Customizer */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Custom Flow AI Rules</span>
                    <div className="text-xs font-extrabold text-brand-obsidian">Strict Gym Recommendation</div>
                    <div className="text-[9px] text-purple-700 font-bold">Tone: Ramah & Sporty</div>
                  </div>

                  {/* Sales Metric */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Omzet Komunitas Health</span>
                    <div className="text-xl font-extrabold text-brand-obsidian">+34.2%</div>
                    <div className="text-[9px] text-brand-emerald font-bold">↑ Segmen Gym Diners Naik</div>
                  </div>
                </div>

                {/* Upload Action Strip Simulation */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-100 text-brand-emerald flex items-center justify-center font-bold text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-emerald-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 7.5v9.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Unggah File Gizi / FAQ Baru</div>
                      <div className="text-[10px] text-slate-400">Mendukung format XLSX, CSV, PDF, atau TXT</div>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-brand-emerald hover:bg-emerald-600 text-white font-bold text-xs rounded-lg shadow-sm transition-colors">
                    Upload & Sync AI
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
