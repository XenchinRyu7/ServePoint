import React, { useState, useEffect } from 'react';

const MENU_ITEMS = {
  carbonara: { name: 'Spaghetti Carbonara', price: 55000, note: 'Kurang asin' },
  peachTea: { name: 'Ice Peach Tea', price: 22000, qty: 2 },
  garlicBread: { name: 'Garlic Bread', price: 25000 },
};

export default function DeviceMockup() {
  const [step, setStep] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [transcript, setTranscript] = useState([]);
  const [isListening, setIsListening] = useState(true);
  const [notification, setNotification] = useState(null);
  const [wifiShow, setWifiShow] = useState(false);
  const [staffCalled, setStaffCalled] = useState(false);

  // Conversation simulation script
  useEffect(() => {
    let timer;
    
    const runSimulation = () => {
      // Step 0: Initial prompt
      if (step === 0) {
        setIsListening(false);
        setTranscript([
          { sender: 'ai', text: 'Selamat siang! Silakan sebutkan pesanan Anda untuk Meja 12.' }
        ]);
        setCart([]);
        setTotal(0);
        
        timer = setTimeout(() => {
          setStep(1);
        }, 3000);
      } 
      // Step 1: Customer speaks order
      else if (step === 1) {
        setIsListening(true);
        setTranscript(prev => [
          ...prev,
          { sender: 'user', text: 'Halo, saya mau pesan Spaghetti Carbonara satu, jangan terlalu asin ya. Terus es teh leci-nya dua.' }
        ]);
        
        timer = setTimeout(() => {
          setStep(2);
        }, 4000);
      } 
      // Step 2: AI Processes order and adds items
      else if (step === 2) {
        setIsListening(false);
        setTranscript(prev => [
          ...prev,
          { sender: 'ai', text: 'Siap! Menambahkan 1 Spaghetti Carbonara (Catatan: Kurang asin) & 2 Ice Peach Tea ke keranjang belanja Anda. Ada tambahan lagi?' }
        ]);
        
        // Animate adding items
        setCart([
          { name: '1x Spaghetti Carbonara', price: 55000, note: 'Kurang asin' },
          { name: '2x Ice Peach Tea', price: 44000 }
        ]);
        setTotal(99000);
        
        timer = setTimeout(() => {
          setStep(3);
        }, 45000 / 10); // Around 4.5s
      } 
      // Step 3: Customer adds Garlic Bread
      else if (step === 3) {
        setIsListening(true);
        setTranscript(prev => [
          ...prev,
          { sender: 'user', text: 'Sama tambah Garlic Bread satu porsi buat sharing ya.' }
        ]);
        
        timer = setTimeout(() => {
          setStep(4);
        }, 3500);
      } 
      // Step 4: AI updates cart
      else if (step === 4) {
        setIsListening(false);
        setTranscript(prev => [
          ...prev,
          { sender: 'ai', text: 'Dicatat! Menambahkan 1 Garlic Bread ke keranjang. Apakah pesanannya sudah benar dan siap dikirim ke dapur?' }
        ]);
        
        setCart(prev => [
          ...prev,
          { name: '1x Garlic Bread', price: 25000 }
        ]);
        setTotal(124000);
        
        timer = setTimeout(() => {
          setStep(5);
        }, 4500);
      } 
      // Step 5: Order confirmed and sent
      else if (step === 5) {
        setIsListening(false);
        setTranscript(prev => [
          ...prev,
          { sender: 'ai', text: 'Terima kasih! Pesanan Anda telah dikonfirmasi dan dikirim langsung ke KDS dapur. Estimasi waktu penyajian 15 menit.' }
        ]);
        
        timer = setTimeout(() => {
          // Restart loop
          setStep(0);
        }, 6000);
      }
    };

    runSimulation();

    return () => clearTimeout(timer);
  }, [step]);

  // Handle staff helper click
  const handleCallStaff = () => {
    if (staffCalled) return;
    setStaffCalled(true);
    setNotification('Pelayan telah dipanggil ke Meja 12. Mohon tunggu sebentar.');
    setTimeout(() => {
      setNotification(null);
      setStaffCalled(false);
    }, 4000);
  };

  // Handle WiFi helper click
  const handleWifiInfo = () => {
    setWifiShow(true);
    setTimeout(() => {
      setWifiShow(false);
    }, 5000);
  };

  return (
    <div class="relative w-full max-w-lg mx-auto">
      {/* Visual Table Stand Shadow */}
      <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-slate-300/40 blur-xl rounded-full z-0"></div>
      
      {/* Physical Stand Holder */}
      <div class="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-16 bg-slate-200 border-x border-t border-slate-300 rounded-t-2xl shadow-inner z-0 flex justify-center items-start pt-2">
        <div class="w-12 h-2 bg-slate-400/50 rounded-full"></div>
      </div>

      {/* Main Tablet Frame */}
      <div class="relative z-10 bg-slate-900 p-4 rounded-[28px] border-4 border-slate-800 shadow-xl overflow-hidden">
        {/* Camera Lens dot */}
        <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-700 rounded-full flex items-center justify-center">
          <div class="w-1 h-1 bg-blue-900 rounded-full"></div>
        </div>

        {/* Screen Bezel Area */}
        <div class="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/50 text-slate-100 flex flex-col h-[480px]">
          
          {/* Status Bar */}
          <div class="bg-slate-900 px-4 py-1.5 flex items-center justify-between text-[11px] text-slate-400 font-semibold tracking-wider border-b border-slate-800/40">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3.5 h-3.5 text-brand-emerald">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.375 9a3.75 3.75 0 117.5 0v3a3.75 3.75 0 01-7.5 0V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 11.25a7.5 7.5 0 11-15 0" />
              </svg>
              MEJA 12 - LIVE AI
            </span>
            <div class="flex items-center gap-2">
              <span class="inline-block h-1.5 w-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
              <span>12:45</span>
              <span>98%</span>
            </div>
          </div>

          {/* Alert Notification System */}
          {notification && (
            <div class="bg-brand-emerald text-white text-xs font-semibold py-2 px-4 text-center animate-fade-in flex items-center justify-center gap-2">
              <span>{notification}</span>
            </div>
          )}

          {wifiShow && (
            <div class="bg-brand-amber text-white text-xs font-semibold py-2 px-4 text-center animate-fade-in flex flex-col justify-center items-center">
              <span class="flex items-center gap-1">WiFi: <strong class="underline">ServePoint_Guest</strong></span>
              <span>Password: <strong>kopiAI2026</strong></span>
            </div>
          )}

          {/* Screen Body Grid */}
          <div class="flex-1 grid grid-cols-5 overflow-hidden">
            {/* Left Chat Screen (3 columns) */}
            <div class="col-span-3 border-r border-slate-800/40 flex flex-col bg-slate-950 p-3 h-full justify-between">
              
              {/* Dialogue History Container */}
              <div class="flex-1 overflow-y-auto space-y-2.5 pr-1 py-1 flex flex-col justify-end">
                {transcript.map((msg, index) => (
                  <div 
                    key={index}
                    class={`flex flex-col max-w-[90%] transition-all duration-300 animate-slide-up ${
                      msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                    }`}
                  >
                    <span class="text-[9px] text-slate-500 uppercase tracking-widest mb-0.5">
                      {msg.sender === 'user' ? 'Anda' : 'ServePoint AI'}
                    </span>
                    <div 
                      class={`px-3 py-2 text-xs rounded-xl leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-slate-800 text-slate-100 rounded-tr-none border border-slate-700/50'
                          : 'bg-slate-900 text-slate-200 rounded-tl-none border border-slate-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Sound Wave Bar */}
              <div class="border-t border-slate-800/30 pt-3 mt-2 flex flex-col items-center justify-center bg-slate-900/40 p-2 rounded-xl">
                {isListening ? (
                  <div class="flex flex-col items-center gap-1.5">
                    {/* Active Wave */}
                    <div class="flex items-center gap-1 h-6">
                      <div class="w-1 h-3 bg-brand-emerald rounded-full animate-[bounce_0.8s_infinite_100ms]"></div>
                      <div class="w-1 h-5 bg-brand-emerald rounded-full animate-[bounce_0.8s_infinite_200ms]"></div>
                      <div class="w-1 h-6 bg-emerald-400 rounded-full animate-[bounce_0.8s_infinite_300ms]"></div>
                      <div class="w-1 h-4 bg-brand-emerald rounded-full animate-[bounce_0.8s_infinite_400ms]"></div>
                      <div class="w-1 h-2 bg-brand-emerald rounded-full animate-[bounce_0.8s_infinite_500ms]"></div>
                    </div>
                    <span class="text-[9px] text-brand-emerald font-semibold uppercase tracking-widest animate-pulse">Mendengarkan...</span>
                  </div>
                ) : (
                  <div class="flex flex-col items-center gap-1.5">
                    {/* Idle Wave */}
                    <div class="flex items-center gap-1 h-6 opacity-30">
                      <div class="w-1 h-1.5 bg-slate-500 rounded-full"></div>
                      <div class="w-1 h-1.5 bg-slate-500 rounded-full"></div>
                      <div class="w-1 h-1.5 bg-slate-500 rounded-full"></div>
                      <div class="w-1 h-1.5 bg-slate-500 rounded-full"></div>
                      <div class="w-1 h-1.5 bg-slate-500 rounded-full"></div>
                    </div>
                    <span class="text-[9px] text-slate-500 uppercase tracking-widest">Memproses Suara...</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Cart Screen (2 columns) */}
            <div class="col-span-2 bg-slate-900/60 p-3 flex flex-col justify-between h-full">
              <div>
                <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Keranjang</span>
                  <span class="text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 px-1.5 py-0.5 rounded">
                    Meja 12
                  </span>
                </h3>

                {/* Cart list items */}
                {cart.length === 0 ? (
                  <div class="h-48 flex flex-col items-center justify-center text-center opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mb-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375 0 11-.75 0 .375 0 01.75 0zm7.5 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                    </svg>
                    <span class="text-[10px]">Keranjang Kosong</span>
                  </div>
                ) : (
                  <div class="space-y-2 overflow-y-auto max-h-[220px]">
                    {cart.map((item, idx) => (
                      <div key={idx} class="bg-slate-950/80 p-2 rounded-lg border border-slate-800/40 text-[11px] animate-fade-in flex flex-col justify-between">
                        <div class="flex justify-between items-start">
                          <span class="font-semibold text-slate-200">{item.name}</span>
                          <span class="font-bold text-brand-emerald">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                        {item.note && (
                          <span class="text-[9px] text-brand-amber font-medium italic mt-0.5">
                            * {item.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Total and Order Button */}
              <div class="border-t border-slate-800/50 pt-3">
                <div class="flex items-center justify-between text-xs mb-3">
                  <span class="text-slate-400 font-medium">Total Estimasi</span>
                  <span class="text-sm font-extrabold text-white">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
                <div class="flex flex-col gap-1.5">
                  <span class="text-[9px] text-center text-slate-500 tracking-wider">
                    {step === 5 ? 'Status: Diproses Dapur' : 'Status: Menunggu Konfirmasi'}
                  </span>
                  <div class="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-brand-emerald transition-all duration-500" 
                      style={{ width: `${(step / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tactile Action Buttons in Tablet Footer */}
          <div class="bg-slate-900 border-t border-slate-800/40 p-2 flex items-center justify-between gap-2.5">
            <button 
              onClick={handleCallStaff}
              disabled={staffCalled}
              class={`flex-1 py-2 px-3 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-1 ${
                staffCalled 
                  ? 'bg-slate-850 text-slate-500 border border-slate-800 cursor-not-allowed'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.008v.008H9V10zm3 0h.008v.008H12V10zm3 0h.008v.008H15V10z" />
              </svg>
              Panggil Pelayan
            </button>
            <button 
              onClick={handleWifiInfo}
              class="flex-1 bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 py-2 px-3 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.286 7.286a6 6 0 018.428 0m-6.314 2.121a3 3 0 014.2 0m-2.1 2.121h.01" />
              </svg>
              Info Wi-Fi
            </button>
          </div>

        </div>
      </div>
      
      {/* Decorative reflection element (no heavy blur, clean styling) */}
      <div class="absolute inset-y-0 right-4 w-12 bg-white/2 skew-x-12 pointer-events-none z-20"></div>
    </div>
  );
}
