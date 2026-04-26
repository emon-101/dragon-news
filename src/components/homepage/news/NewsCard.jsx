import SingleNewsCard from "./SingleNewsCard";

const NewsCard = ({ news }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">News By Category</h2>
      {news.length > 0 ? (
        news.map((n, idx) => {
          return (
            <div key={idx} className="">
              <SingleNewsCard n={n} />
            </div>
          );
        })
      ) : (
        <h2 className="font-bold text-4xl text-center">No data Found</h2>
      )}
    </div>
  );
};

export default NewsCard;
