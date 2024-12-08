import { News } from "@/app/_libs/microcms";
import Image from "next/image";
import Category from "../Category";
import Date from "../Date";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li
          key={article.id}
          className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4"
        >
          <div className="w-full md:w-1/3">
            <Image
              src="/night-star.jpg"
              alt={article.title}
              width={640}
              height={360}
              className="rounded"
            />
          </div>
          <dl className="w-full md:w-2/3">
            <dt className="text-2xl text-black">{article.title}</dt>
            <dd className="text-gray-600">
              <Category category={article.category} />
              <Date date={article.publishedAt ?? article.createdAt} />
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
}
