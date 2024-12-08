import Image from "next/image";
import ButtonLink from "./_components/ButtonLink";
import { News } from "./_libs/microcms";
import NewsList from "./_components/NewsList";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/01/01",
      createdAt: "2023/01/01",
    },
    {
      id: "2",
      title: "新卒採用を開始しました",
      category: {
        name: "採用情報",
      },
      publishedAt: "2023/01/01",
      createdAt: "2023/01/01",
    },
    {
      id: "3",
      title: "新サービス「AIチャットボット」をリリースしました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/01/01",
      createdAt: "2023/01/01",
    },
  ],
};

const sliceData = data.contents.slice(0, 2);

export default function Home() {
  return (
    <>
      <section className="relative flex items-center justify-center h-screen">
        <Image
          src="/night-star.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          width={4000}
          height={1200}
        />
        <div className="relative text-center p-5">
          <h1 className="text-4xl text-white">
            テクノロジーの力で世界を変える
          </h1>
          <p className="text-lg text-white">
            私たちが市場をリードしているグローバルテックカンパニーです
          </p>
        </div>
      </section>
      <section className="bg-white relative py-24 px-40">
        <h2 className="text-black">News</h2>
        <NewsList news={sliceData} />
        <div className="text-center mt-8">
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
