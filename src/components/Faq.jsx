import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Bagaimana cara admin meng-upload data menu, gizi & resep (Custom RAG)?',
      a: 'Sangat mudah! Di dasbor admin ServePoint, Anda cukup mengunggah file spreadsheet (.xlsx/.csv) atau PDF yang berisi daftar menu, takaran bahan, informasi gizi (kalori, protein, karbo, lemak), dan FAQ resto Anda. AI RAG Engine kami akan otomatis memproses data tersebut dalam beberapa detik tanpa koding sama sekali.'
    },
    {
      q: 'Apakah AI ServePoint bisa menjawab pertanyaan nutrisi untuk pelanggan gym atau diet?',
      a: 'Ya, ini salah satu nilai plus utama ServePoint. Pelanggan yang sedang gym, bulking, cutting, atau menjalani diet khusus (seperti Keto, Defisit Kalori, Low-Carb, Gluten-Free) bisa bertanya langsung via suara di tablet meja. AI akan menghitung dan merekomendasikan kombinasi porsi & menu yang sesuai target makronutrisi mereka.'
    },
    {
      q: 'Apakah admin restoran bisa mengatur sendiri gaya bahasa & kustomisasi jawaban AI?',
      a: 'Bisa! Admin dapat mengatur "Custom Flow Rules" di Dasbor Owner. Anda bisa memilih nada bicara AI (ramah, formal, santai, atau sporty), menambahkan promosi khusus yang wajib disarankan, serta mengatur respons otomatis saat ada permintaan kustom pelanggan (seperti alergen atau request dipisah sauce).'
    },
    {
      q: 'Bagaimana AI menangani kebisingan di kafe yang ramai?',
      a: 'Tablet meja ServePoint dipasangkan filter peredam bising (AI Noise-Cancellation) & directional microphone array. Algoritma AI menyaring musik latar, dentingan gelas, dan obrolan meja sebelah sehingga hanya memproses ucapan pelanggan yang duduk tepat di depan tablet.'
    },
    {
      q: 'Berapa lama waktu pemasangan & integrasi POS?',
      a: 'Hanya butuh 15 menit untuk mengaktifkan integrasi POS (Point-of-Sale). Sistem kami terhubung secara cloud. Cukup masukkan kredensial POS Anda di admin panel ServePoint, maka seluruh daftar menu, kategori makanan, dan data meja langsung tersinkronisasi otomatis.'
    },
    {
      q: 'Apakah saya harus menggunakan tablet khusus dari ServePoint?',
      a: 'Tidak. Anda bisa menggunakan tablet Android atau iPad standar yang sudah dimiliki untuk menghemat biaya. Jika membutuhkan, kami juga menawarkan paket bundling tablet F&B premium dengan casing kokoh anti-benturan & dudukan meja dengan sistem keamanan khusus.'
    },
    {
      q: 'POS apa saja yang sudah didukung secara resmi?',
      a: 'Kami terintegrasi penuh dengan 15+ POS terpopuler di Indonesia, seperti Moka POS, Pawoon, Olsera, Esensi, Majoo, dan Pawoon Pro. Jika Anda menggunakan sistem POS internal kustom, tim engineering kami siap membuatkan jalur API khusus.'
    },
    {
      q: 'Bagaimana jika koneksi internet Wi-Fi di kafe mati?',
      a: 'ServePoint memiliki teknologi "Local Sync Backup". Saat internet terputus, tablet akan beralih ke mode jaringan lokal (intranet) untuk terus mencatat pesanan dan mengirimkannya langsung ke printer dapur. Data transaksi akan otomatis tersinkron ke cloud begitu Wi-Fi kembali online.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-brand-emerald text-xs font-bold uppercase tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-brand-emerald">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.707V19a5.976 5.976 0 01-1.336-3.75C3 10.7 7.03 7 12 7s9 3.7 9 8.25z" />
            </svg>
            TANYA JAWAB
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-obsidian tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 font-medium max-w-xl mx-auto text-xs md:text-sm">
            Temukan jawaban cepat seputar Custom RAG, informasi gizi fitness, dan teknologi ServePoint.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 border-t border-slate-200/60 pt-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="border-b border-slate-200/60 pb-4 transition-colors"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-bold text-brand-obsidian group-hover:text-brand-emerald transition-colors">
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0 flex items-center justify-center h-7 w-7 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 transition-transform">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2.5" 
                      stroke="currentColor" 
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
                
                {/* Accordion content */}
                <div 
                  className={`grid transition-all duration-250 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-200/40">
                      {faq.a}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
