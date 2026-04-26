import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";


const NewsCategoryPage = async({params}) => {
    const {id} = await params;
    const categories = await getCategories();
  const news = await getNewsByCategoryId(id);
    return (
        <div className="grid grid-cols-4 gap-3 lg:w-4/5 mx-auto mb-10">
      <div>
        <LeftSidebar categories={categories} activeId={id} />
      </div>
      <div className="col-span-2">
        <NewsCard news={news} />
      </div>
      <div className=""><RightSidebar /></div>
    </div>
    );
};

export default NewsCategoryPage;