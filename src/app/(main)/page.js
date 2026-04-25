
const getCategories = async()=> {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-4 gap-3 lg:w-4/5 mx-auto">
      <div>
        <span  className="text-3xl font-bold">All Categories</span>
        <ul className="flex flex-col gap-3 mt-6">
          {
            categories.map(category => <li key={category.category_id} className="bg-slate-100 font-semibold text-lg text-gray-700 p-2 text-center rounded-xl">{category.category_name}</li>)
          }
        </ul>
      </div>
      <div className="text-3xl font-bold bg-purple-100 col-span-2">News</div>
      <div className="text-3xl font-bold bg-yellow-100">Social Icons</div>
    </div>
  );
}
