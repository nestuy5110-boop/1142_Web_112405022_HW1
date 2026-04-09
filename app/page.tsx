import Link from "next/link"; // <--- 關鍵！必須引入這個才能用 Link

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full h-full text-center px-8">
      
      {/* 標題區 */}
      <div className="space-y-4">
        <h1 className="text-6xl md:text-7xl font-black text-[#472c1b] tracking-tighter">
          PORTFOLIO.
        </h1>
        <p className="text-xl text-[#b08968] font-medium tracking-widest uppercase">
          YuTsen Lin
        </p>
      </div>

      {/* 裝飾線 */}
      <div className="w-12 h-1 bg-[#e6ccb2] my-10"></div>


      {/* 進入按鈕 */}
      <Link href="/about">
        <button className="group relative px-12 py-4 bg-[#7f5539] text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(127,85,57,0.4)]">
          <span className="relative z-10">CLICK TO EXPLORE.</span>
          <div className="absolute inset-0 bg-[#472c1b] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </Link>

    </div>
  );
}
