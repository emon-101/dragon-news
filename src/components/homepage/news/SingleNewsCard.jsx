import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const SingleNewsCard = ({ n }) => {
  const { author, title, image_url, details, _id, rating, total_view } = n;
  return (
    <div>
      {/* card container */}
      <div className="border-2 border-base-300 rounded-lg">
        {/* Author Info */}
        <div className="flex justify-between items-center bg-base-200 p-5">
          {/* author Image */}
          <div className="flex gap-2 items-center">
            <Image src={author?.img} width={40} height={40} alt={"author Image"} className="rounded-full" />
            <div className="">
              <h2 className="font-semibold">{author.name}</h2>
              <p>{author.published_date}</p>
            </div>
          </div>
          {/* Icons */}
          <div className="flex gap-2 items-center">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>
        {/* News content */}
        <div className="px-4 space-y-5 mt-4">
            <h2 className="font-bold text-lg">{title}</h2>
            <Image src={image_url} width={800} height={500} alt="news title" />
            <p className="text-stone-400 line-clamp-3">{details}</p>
            <Link href={`/news/${_id}`}>
                <button className="text-amber-500 font-semibold cursor-pointer hover:scale-101">Read More</button>
            </Link>
            <div className="divider"></div>
        </div>
        {/* ratings */}
        <div className="px-4 mb-4 flex justify-between items-center">
            <div className="flex gap-1 items-center text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <span className="text-stone-500  font-medium ml-2">{rating?.number}</span>
            </div>
            <div className="flex gap-2 items-center text-stone-400 font-semibold">
                <FaEye />
                <p>{total_view}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
