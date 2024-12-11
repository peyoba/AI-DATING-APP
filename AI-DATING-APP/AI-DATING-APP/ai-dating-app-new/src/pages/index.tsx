import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">
          AI婚恋契合度预测平台
        </h1>
        
        <Image
          src="/images/default-avatar.png"
          alt="Logo"
          width={180}
          height={180}
          priority
        />
        
        <p className="text-lg text-center sm:text-left">
          基于AI的智能婚恋关系评估平台，通过科学的模型算法，帮助您更好地了解和经营感情关系
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/assessment"
          >
            开始测试
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
          >
            了解更多
          </a>
        </div>
      </main>
    </div>
  );
}