import Link from "next/link";

export default function Home() {
  return (
    // 這裡的容器會被放入 layout.tsx 的 {children} 中，所以背景會是透明的
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center p-8">
      
      {/* 1. 歡迎標題 */}
      <h1 className="text-5xl md:text-6xl font-black text-[#472c1b] mb-6 tracking-tighter">
        HELLO, <br />
        I AM YUTSEN.
      </h1>

      {/* 2. 簡單的一句話介紹 */}
      <p className="text-lg text-[#b08968] max-w-md mb-10 leading-relaxed">
        一名熱衷於視覺敘事與跨領域實驗的設計師。
        歡迎來到我的數位作品集，探索關於平面、動態與創意的無限可能。
      </p>

      {/* 3. 引導按鈕：引導人家去點 About Me */}
      <Link href="/about">
        <button className="bg-[#7f5539] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#472c1b] hover:scale-105 transition-all duration-300">
          ENTER PORTFOLIO
        </button>
      </Link>

      {/* 4. 裝飾性的小元素 (可選) */}
      <div className="mt-20 flex gap-4 opacity-30">
        <span className="w-2 h-2 bg-[#7f5539] rounded-full"></span>
        <span className="w-2 h-2 bg-[#7f5539] rounded-full"></span>
        <span className="w-2 h-2 bg-[#7f5539] rounded-full"></span>
      </div>
    </div>
  );
}
