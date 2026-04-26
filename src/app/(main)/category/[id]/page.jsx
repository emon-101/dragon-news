import LeftSidebar from "@/components/homepage/news/LeftSidebar";
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
      <div className=" font-bold col-span-2 space-y-4">
        <h2 className="text-lg">News By Category</h2>
        {
          news.length > 0 ? news.map((n, idx) => {
            return <div key={idx} className="p-6 rounded-md border">
              <h2>{n.title}</h2>
            </div>
          }) : <h2 className="font-bold text-4xl text-center">No data Found</h2>
        }
      </div>
      <div className=""><RightSidebar /></div>
    </div>
    );
};

export default NewsCategoryPage;