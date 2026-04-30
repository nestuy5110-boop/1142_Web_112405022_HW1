import React from 'react';


const projects = [
  {
    id: 1,
    title: "113年度政大阿卡貝拉社期末成發《阿卡Demy》",
    description: "擔任活動總導演，負責從創意發想、執行，到活動現場的每一個細節。",
    tags: ["#活動籌辦", "#跨校聯合", "#創意策略"],
    imageUrl: "/cademy.png",
    url:"https://drive.google.com/file/d/1GjkkerKnXfS6q1-jDmLxsJOH75JxvJGd/view?usp=drive_link"
  },
  {
    id: 2,
    title: "傳院不分系迎新宿營｜活動組",
    description: "撰寫並執行RPG大地遊戲之沈浸式體驗劇本，兼顧邏輯完整性、跑關的時間控管，且引人入勝。",
    tags: ["#活動籌辦", "#RPG沈浸式劇本", "#創意遊戲"],
    imageUrl: "/dyo.png",
    url:"https://drive.google.com/file/d/10YIOUFsHdRZ5S9fzVOG6UPsHfs4V4d9k/view?usp=drive_link"
  },
  {
    id: 3,
    title: "112年度麥高芬劇團《寂寞芳心俱樂部》｜舞台 ",
    description: "透過道具的堆疊，在空白的舞台上編織人情味，彷彿真有人棲居其間的真實場景。",
    tags: ["#劇場工作", "#手工木工", "#團隊合作"],
    imageUrl: "/jifan.JPG",
    url:"https://www.instagram.com/nccu_theater?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  
  {
    id: 4,
    title: "113年度麥高芬劇團《可以睡覺》｜宣傳",
    description: "負責線上宣傳企劃，轉譯舞台上的創作語言，讓故事在社群發酵，精準傳達劇作精神給目標受眾。",
    tags: ["#劇場工作", "#社群宣傳", "#團隊合作"],
    imageUrl: "/sleep.JPEG",
    url:"hhttps://www.instagram.com/nccu_theater?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    id: 5,
    title: "2025全國Future Young Lions｜優選 ",
    description: "小組針對「肥胖是一種疾病」展開了無數次的發散與聚攏思考，最終取得比賽優勝。",
    tags: ["#競賽", "#創意發想", "#團隊合作"],
    imageUrl: "/contest.png",
    url:"https://drive.google.com/file/d/1YRWavFGgAHCAHxd2jxHtvA8vvimla-jL/view?usp=drive_link"
  },
  {
    id: 6,
    title: "《插座神偷》App Demo",
    description: "設計、模擬真實的使用者路徑，也透過Framer架設了一個虛構網站用以傳達我們製作的內容與初衷。",
    tags: ["#UIUX", "#使用者路徑", "#網站架設"],
    imageUrl: "/thief.png",
    url:"https://sockethief.framer.website/#hero"
  },
  
  
  
];
// ============================

export default function OthersPage() {
  return (
    // 整個頁面的容器，bg-gray-50 是淺灰色背景，min-h-screen 確保高度夠長可下滑
    <div className="min-h-screen bg-white/90 text-gray-800 w-full ml-0 mr-0">
      
      {/* 頂部標題與介紹區 */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          {/* 大標題 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#3f2d20]">
            OTHERs.
          </h1>
        {/* 介紹文字 */}
        <p className="text-base md:text-lg leading-relaxed text-[#6c584c]">
        不設限的創意實驗室。（譯：很多神奇又古怪的技能和活動經驗）
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