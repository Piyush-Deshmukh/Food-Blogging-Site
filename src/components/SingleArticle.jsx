const SingleArticle = ({ item }) => {
  const { id, title, img } = item;

  return (
    <div className="article-container">
      <img src={img} alt={title} />
      <div className="article-content">
        <h2>{title}</h2>
        <p>
          PLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley....
        </p>
        <button>
            <a href="#">Read More</a>
        </button>
      </div>
    </div>
  );
};

export default SingleArticle;
