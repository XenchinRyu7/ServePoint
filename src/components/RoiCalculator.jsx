import React, { useState, useMemo } from 'react';

export default function RoiCalculator() {
  const [tables, setTables] = useState(12);
  const [dailyOrders, setDailyOrders] = useState(80);

  // Dynamic calculations based on local Indonesian F&B metrics
  const calculations = useMemo(() => {
    // Average staff time saved per order: 4 minutes
    // Average cost saved due to reduced order errors, faster billing, and server efficiency: Rp 2,200 per order
    const monthlyOrders = dailyOrders * 30;
    
    // Base savings from order-taking efficiency and food waste reduction
    let baseSavings = monthlyOrders * 2200 * (tables / 10);

    // Operational staff reallocation benefit (equivalent salary savings for waiter efficiency)
    // 1 waiter salary average: Rp 4,200,000
    let staffSavings = 0;
    if (tables >= 30) {
      staffSavings = 8400000; // 2 staff salary
    } else if (tables >= 15) {
      staffSavings = 4200000; // 1 staff salary
    } else if (tables >= 8) {
      staffSavings = 2100000; // Half-time optimization
    }

    const totalSavings = Math.round(baseSavings + staffSavings);
    
    // Table turnover improvement: 25% faster table clearing and order placement
    // Which leads to extra capacity. Let's calculate extra potential orders/day.
    const extraDailyRevenue = Math.round(dailyOrders * 0.15 * 45000); // 15% extra orders, average bill Rp 45.000
    const extraMonthlyRevenue = extraDailyRevenue * 30;

    return {
      savings: totalSavings,
      turnover: '+25%',
      extraRevenue: extraMonthlyRevenue,
      minutesSaved: Math.round(dailyOrders * 4 * 30 / 60) // Monthly hours saved
    };
  }, [tables, dailyOrders]);

  return (
    <section id="roi-kalkulator" class="py-20 md:py-28 bg-slate-50 border-b border-slate-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-brand-emerald text-xs font-bold uppercase tracking-wider">
            📊 KALKULATOR ROI
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-brand-obsidian tracking-tight">
            Hitung Potensi Penghematan Kafe Anda
          </h2>
          <p class="text-slate-600 font-medium max-w-2xl mx-auto text-sm md:text-base">
            Sesuaikan parameter operasional restoran Anda di bawah ini dan lihat seberapa besar efisiensi yang dapat dihasilkan oleh ServePoint AI setiap bulannya.
          </p>
        </div>

        {/* Interactive Widget Box */}
        <div class="max-w-5xl mx-auto bg-white border border-slate-200/80 rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Sliders */}
          <div class="lg:col-span-7 p-6 md:p-10 space-y-8">
            <h3 class="text-lg font-bold text-brand-obsidian border-b border-slate-100 pb-4">
              Konfigurasi Operasional Kafe
            </h3>

            {/* Slider 1: Jumlah Meja */}
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label htmlFor="tables-range" class="text-sm font-bold text-slate-700">Jumlah Meja Makan</label>
                <span class="text-sm font-extrabold text-brand-emerald bg-emerald-50 px-3 py-1 rounded-md border border-emerald-150">
                  {tables} Meja
                </span>
              </div>
              <input
                id="tables-range"
                type="range"
                min="1"
                max="50"
                value={tables}
                onChange={(e) => setTables(parseInt(e.target.value))}
                class="w-full h-2 bg-slate-150 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
              />
              <div class="flex justify-between text-[10px] font-bold text-slate-400">
                <span>1 Meja</span>
                <span>25 Meja</span>
                <span>50 Meja</span>
              </div>
            </div>

            {/* Slider 2: Rata-rata Pesanan Harian */}
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <label htmlFor="orders-range" class="text-sm font-bold text-slate-700">Rata-rata Order / Meja / Hari</label>
                <span class="text-sm font-extrabold text-brand-emerald bg-emerald-50 px-3 py-1 rounded-md border border-emerald-150">
                  {dailyOrders} Pesanan
                </span>
              </div>
              <input
                id="orders-range"
                type="range"
                min="10"
                max="300"
                value={dailyOrders}
                onChange={(e) => setDailyOrders(parseInt(e.target.value))}
                class="w-full h-2 bg-slate-150 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
              />
              <div class="flex justify-between text-[10px] font-bold text-slate-400">
                <span>10 Order</span>
                <span>150 Order</span>
                <span>300 Order</span>
              </div>
            </div>

            {/* Note */}
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200/50 flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-brand-orange shrink-0 mt-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p class="text-[11px] text-slate-500 font-medium leading-relaxed">
                Asumsi hitungan didasarkan pada survei internal F&B Indonesia: penghematan 4 menit per order, pengurangan error salah catat 95%, dan kenaikan turnover meja saat peak hours.
              </p>
            </div>
          </div>

          {/* Right Column: Output Stats */}
          <div class="lg:col-span-5 bg-brand-obsidian text-white p-6 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <h3 class="text-slate-400 text-xs font-bold tracking-widest uppercase mb-6">
                Estimasi Hasil Keuntungan
              </h3>
              
              <div class="space-y-6">
                {/* Stat 1: Operational Savings */}
                <div>
                  <span class="text-xs text-slate-400 font-semibold block">Potensi Hemat Biaya Operasional</span>
                  <div class="text-2xl md:text-3xl font-black text-brand-emerald mt-1.5">
                    Rp {calculations.savings.toLocaleString('id-ID')} <span class="text-xs text-slate-400 font-normal">/bulan</span>
                  </div>
                </div>

                {/* Stat 2: Table Turnover */}
                <div class="grid grid-cols-2 gap-4 border-t border-slate-800 pt-5">
                  <div>
                    <span class="text-[11px] text-slate-400 font-semibold block">Kenaikan Table Turnover</span>
                    <div class="text-xl font-bold text-white mt-1">
                      {calculations.turnover}
                    </div>
                  </div>
                  <div>
                    <span class="text-[11px] text-slate-400 font-semibold block">Waktu Kerja Staf Dihemat</span>
                    <div class="text-xl font-bold text-white mt-1">
                      {calculations.minutesSaved} Jam <span class="text-xs text-slate-400 font-normal">/bln</span>
                    </div>
                  </div>
                </div>

                {/* Stat 3: Extra Potential Revenue */}
                <div class="border-t border-slate-800 pt-5">
                  <span class="text-xs text-slate-400 font-semibold block">Potensi Tambahan Omzet Meja</span>
                  <div class="text-lg font-bold text-brand-orange mt-1">
                    + Rp {calculations.extraRevenue.toLocaleString('id-ID')} <span class="text-xs text-slate-400 font-normal">/bulan</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-800">
              <a 
                href="#cta-form" 
                class="block w-full py-3.5 px-4 bg-brand-orange hover:bg-brand-amber text-center text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-orange-950/20"
              >
                Ambil Slot Demo Sekarang
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
