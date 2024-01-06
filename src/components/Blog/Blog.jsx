const Blog = ({ blog }) => {
  const { title, summary, image, tags, author, date, content, comments, shares } = blog;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded-md" />

      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      
      <p className="text-gray-600 mb-4">{summary}</p>

      <div className="flex items-center space-x-2 text-gray-500">
        <span>{author}</span>
        <span>&middot;</span>
        <span>{date}</span>
      </div>

      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 prose">{content}</div>

      <div className="flex justify-between items-center mt-8">
        <div className="text-gray-500">
          <span>{comments} Comments</span>
          <span className="mx-2">&middot;</span>
          <span>{shares} Shares</span>
        </div>
        {/* You can add social media sharing icons or other actions here */}
      </div>
    </div>
  );
};

export default Blog;
