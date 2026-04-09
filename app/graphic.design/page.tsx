import React from 'react';


const projects = [
  {
    id: 1,
    title: "114年度麥高芬劇團公演《我為你押韻》",
    description: "在公演中擔任主視覺的角色，以拼貼風格出發，將劇中元素透過視覺設計轉化帶給目標觀眾，吸引其前來看戲。",
    tags: ["#主視覺", "#社群宣傳", "#文宣小物", "#procreate"],
    imageUrl: "/我押.PNG",
    url: "https://drive.google.com/file/d/14ei4A5-OeGfv0WxCfYxVcrcdq-l7xy3F/view?usp=drive_link"
  },
  {
    id: 2,
    title: "113年度政大阿卡貝拉社期末成發《阿卡Demy》",
    description: "宣傳海報主要圍繞活動中串場劇情——碎裂的貝拉石為基礎，將神秘的氣氛帶給目標觀眾。",
    tags: ["#主視覺", "#社群宣傳", "#procreate"],
    imageUrl: "/阿卡demy.PNG",
    url:"https://www.instagram.com/nccu_acappellaclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    id: 3,
    title: "113年度麥高芬劇團招新《晉級的劇人》",
    description: "海報圍繞主標題熱血、努力、積極的核心概念，融入劇場製作中主要的六個組別：表導、舞台、服化、燈光、音效、宣傳等組別。",
    tags: ["#主視覺", "#社群宣傳", "#文宣小物", "#procreate"],
    imageUrl: "/劇人banner.JPG",
    url: "https://www.instagram.com/nccu_theater?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    id: 4,
    title: "1141政大阿卡貝拉社小成發《政卡酒館》",
    description: "結合「政卡酒館」的核心主題理念，結合溫馨、輕鬆的氛圍創作。",
    tags: ["#主視覺", "#社群宣傳", "#Banner", "#canva"],
    imageUrl: "/政卡酒館.PNG",
    url:"https://www.instagram.com/nccu_acappellaclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    id: 5,
    title: "1142政大阿卡貝拉社《領航之聲》歌唱大賽",
    description: "結合「領航之聲」的核心主題理念，創作出宣傳Banner。",
    tags: ["#主視覺", "#社群宣傳", "#Banner", "#canva"],
    imageUrl: "/領航之聲.PNG",
    url:"https://www.instagram.com/nccu_acappellaclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    id: 6,
    title: "《家用機器人使用手札》",
    description: "圍繞著主題「保母機器人」發想。設計出三個功能與個性截然不同的機器人角色與他們的故事。",
    tags: ["#角色設計", "#故事發想", "#手冊排版", "#Indesign"],
    imageUrl: "/機器人.png",
    url:"https://drive.google.com/file/d/1igJFppByJz9bsiXZ7nl8MKalxfkHaYf7/view?usp=drive_link"
  },
];
// ============================

export default function GraphicDesignPage() {
  return (
    // 整個頁面的容器，bg-gray-50 是淺灰色背景，min-h-screen 確保高度夠長可下滑
    <div className="min-h-screen bg-white/90 text-gray-800 w-full ml-0 mr-0">
      
      {/* 頂部標題與介紹區 */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          {/* 大標題 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#3f2d20]">
            GRAPHIC.DESIGN
          </h1>
        {/* 介紹文字 */}
        <p className="text-base md:text-lg leading-relaxed text-[#6c584c]">
          歡迎123
        </p>

      </div>
      

      {/* 項目網格區 - 一排兩個 (md:grid-cols-2) */}
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* 使用 map 循環生成每一個方框 */}
          {projects.map((project) => (
            <a 
            key={project.id} 
            href={project.url}       // <--- 這裡會自動讀取每個項目不同的網址
            target="_blank"          // <--- 用新視窗開啟
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[16/9] cursor-pointer">

              {/* 1. 底層圖片 */}
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* 2. 黑色遮罩層 (預設透明，滑鼠靠近時變暗) */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                
                {/* 3. 滑鼠靠近時顯現的內容 */}
                {/* 標題 */}
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                
                {/* 描述 */}
                <p className="mt-3 text-sm text-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                
                {/* 標籤 # (跟 About Me 一樣的感覺) */}
                <div className="mt-5 flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>
      
    </div>
  );
}