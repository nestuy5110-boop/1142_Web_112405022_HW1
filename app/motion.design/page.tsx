import React from 'react';


const projects = [
  {
    id: 1,
    title: "113年度政大阿卡貝拉社期末成發《阿卡Demy》",
    description: "在社群碎片化閱讀環境中，捕捉住受眾注意力提升資訊留存率，並將故事前情提要交代清晰。",
    tags: ["#前導片", "#動畫", "#圖文敘事"],
    imageUrl: "/demy.png",
    url:"https://drive.google.com/file/d/181i6XqEmQ3rUENBQTR314XBtS8ihZFmZ/view?usp=drive_link"
  },
  {
    id: 2,
    title: "《 Numb Little Bug 》",
    description: "隨著音樂與歌詞的起伏，將歌曲中的資訊進行拆解，同步歌詞將元素視覺化，提升感官體驗。",
    tags: ["#音樂動畫MV", "#圖文敘事", "#After Effect"],
    imageUrl: "/bug.png",
    url:"https://drive.google.com/file/d/1DWWDebyNq93iHvMjBkRc5ChZnv7RkmxB/view?usp=drive_link"
  },
  {
    id: 3,
    title: "課堂模仿作業",
    description: "依據老師提供的影片模仿練習軟體AE。",
    tags: ["#課堂", "#動態運動", "#After Effect"],
    imageUrl: "/assign.png",
    url:"https://drive.google.com/file/d/1dXdN8D3AFLDB_-evKGuZphyxQcGGD49M/view?usp=drive_link"
  },
  
];
// ============================

export default function MotionDesignPage() {
  return (
    // 整個頁面的容器，bg-gray-50 是淺灰色背景，min-h-screen 確保高度夠長可下滑
    <div className="min-h-screen bg-white/90 text-gray-800 w-full ml-0 mr-0">
      
      {/* 頂部標題與介紹區 */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          {/* 大標題 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#3f2d20]">
            MOTION.DESIGN
          </h1>
        {/* 介紹文字 */}
        <p className="text-base md:text-lg leading-relaxed text-[#6c584c]">
        讓靜態視覺設計在時間軸上躍動，掌控動態的位移與節奏，將視覺衝擊力轉化為更具渲染力的感官體驗。
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