"use client"; 

import React, { useState } from 'react';

// === 圖片與資料設定區 ===
const photos = [
  "/life1.jpg",
  "/life2.jpg", 
  "/life3.jpg", 
  "/life4.jpg", 
  "/life5.jpg",  
];

const toolData = {
  graphic: [
    { name: "Ps", src: "/ps.png" },
    { name: "Ai", src: "/ai.png" },
    { name: "Id", src: "/id.png" },
    { name: "Figma", src: "/figma.png" },
    { name: "Canva", src: "/canva.png" },
  ],
  motion: [
    { name: "Ae", src: "/ae.png" },
    { name: "DaVinci", src: "/davinci.png" },
    { name: "CapCut", src: "/capcut.png" },
    { name: "Procreate", src: "/procreate.png" },
  ]
};

export default function AboutMePage() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePhotoClick = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="min-h-full w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-16 px-8 flex flex-col gap-20">
        
        {/* === 上半部：自介 & 個性標籤 與 撲克牌照片 === */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* 左側：自介與垂直個性標籤 */}
          <div className="flex-[1.5] space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-[#472c1b] mb-6">ABOUT.ME</h1>
              <p className="text-lg leading-relaxed text-[#6c584c]">
                嗨！我是林昱岑，目前就讀於政治大學的廣告學系三年級。雖然我的專攻是設計，但我認為我並沒有那麼純種（？），自我認同上我會說我是一名具備視覺武器的創意人。
              </p>
            </div>

            {/* 個性標籤 */}
            <div className="max-w-md">
              <h2 className="text-sm font-bold text-[#b08968] uppercase tracking-widest mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#b08968] rounded-full mr-2"></span>
                PERSONALITY.
              </h2>
              <div className="space-y-6">
                {[
                  { label: "跨領域學習與好奇心", value: "90%" },
                  { label: "活潑開朗積極主動", value: "85%" },
                  { label: "創意腦筋急轉彎", value: "70%" },
                  { label: "流行音樂愛好者", value: "90%" },
                  { label: "皮克敏資深玩家", value: "20%" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between items-end mb-1.5">
                      <span className="text-[#472c1b] font-medium text-sm">{stat.label}</span>
                      <span className="text-xs text-[#b08968] font-bold">{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-100 h-[2px]">
                      <div className="bg-[#b08968] h-full transition-all duration-1000" style={{ width: stat.value }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 右側：撲克牌疊放照片區 */}
          <div className="flex-1 w-full mt-10 md:mt-0 flex justify-center items-center">
            <div 
              onClick={handlePhotoClick}
              className="relative w-full max-w-[300px] aspect-[3/4] cursor-pointer group"
            >
              {/* 底層裝飾 */}
              <div className="absolute inset-0 bg-gray-200 rounded-[2rem] shadow-sm translate-x-4 translate-y-4 -rotate-3 border border-[#ede0d4]"></div>
              <div className="absolute inset-0 bg-gray-100 rounded-[2rem] shadow-md translate-x-2 translate-y-2 rotate-2 border border-[#ede0d4]"></div>

              {/* 主圖片層 */}
              <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[#ede0d4] transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  key={photoIndex}
                  src={photos[photoIndex]} 
                  alt="My Life" 
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
              </div>

              {/* 點擊提示 */}
              <div className="absolute -bottom-4 -right-4 bg-[#7f5539] text-white text-[10px] px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Next Photo ↻
              </div>
            </div>
          </div>
        </div>

        {/* === 下半部：工具分類 (左) 與 學習進度 (右) 並排 === */}
        <div className="border-t border-gray-100 pt-20 flex flex-col md:flex-row gap-16">
          
          {/* 左半部：工具分類圈圈 */}
          <div className="flex-[1.2]">
            <h2 className="text-sm font-bold text-[#b08968] uppercase tracking-widest mb-8 flex items-center">
              <span className="w-2 h-2 bg-[#b08968] rounded-full mr-2"></span>
              TOOLs.
            </h2>
            
            <div className="space-y-8">
              {/* 平面設計類 */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">GRAPHIC. / PHOTO. / UI.</h3>
                <div className="flex flex-wrap gap-4">
                  {toolData.graphic.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full border border-[#ede0d4] overflow-hidden hover:scale-110 transition-all bg-white flex items-center justify-center p-1 shadow-sm">
                        <img src={tool.src} alt={tool.name} className="w-full h-full rounded-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 動態影像與繪圖類 */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">MOTION. / VIDEO. / ART.</h3>
                <div className="flex flex-wrap gap-4">
                  {toolData.motion.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full border border-[#ede0d4] overflow-hidden hover:scale-110 transition-all bg-white flex items-center justify-center p-1 shadow-sm">
                        <img src={tool.src} alt={tool.name} className="w-full h-full rounded-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右半部：學習進度 (In Progress) */}
          <div className="flex-1">
            <h2 className="text-sm font-bold text-[#b08968] uppercase tracking-widest mb-8 flex items-center">
              <span className="w-2 h-2 bg-[#b08968] rounded-full mr-2"></span>
              IN PROGRESS.
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "JLPT N3 日本語能力試驗", progress: "60%" },
                { title: "Next.js 網頁開發實作", progress: "10%" },
                { title: "軟體熟練運用", progress: "65%" },
                { title: "大臺北地區完全適應", progress: "25%" }
              ].map((item) => (
                <div key={item.title}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[#472c1b] font-medium text-sm">{item.title}</span>
                    <span className="text-xs text-[#b08968] font-bold">{item.progress}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-[2px]">
                    <div className="bg-[#e6ccb2] h-full transition-all duration-1000" style={{ width: item.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}