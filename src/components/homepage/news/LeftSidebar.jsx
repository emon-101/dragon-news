import Link from "next/link";


const LeftSidebar = ({categories, activeId}) => {
  return (
    <div>
      <span className="text-3xl font-bold">All Categories</span>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`${activeId===category.category_id && "bg-slate-200 text-pink-500"} font-semibold text-lg text-gray-700 text-center rounded-xl`}
          >
            <Link href={`/category/${category.category_id}`} className="block p-2">{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
