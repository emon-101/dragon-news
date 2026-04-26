import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export const generateMetadata = async({params}) => {
    const {id} = await params;
    const newsArray = await getNewsDetails(id);
    const news = newsArray[0];

    return {
        title: news.title,
        description: news.details,
    };
}

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await getNewsDetails(id);
  const news = newsDetails[0];
  const {title, image_url, details, category_id} = news;
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="border-2 border-base-300 rounded-lg my-8 p-6">
        {/* News content */}
        <div className="space-y-5 mt-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <Image src={image_url} width={800} height={500} alt="news title" className="w-full" />
          <p className="text-stone-400">{details}</p>
        </div>
        <Link href={`/category/${category_id}`}>
            <button className="btn bg-pink-500 text-white mt-4"><GoArrowLeft /> All news in this category</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
