import { useState } from "react";
import SingleArticle from "../components/SingleArticle";
import data from "../utils/Data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Articles = () => {
  const [it, setIt] = useState(3);

  return (
    <section className="article-section">
        <h1>Latest Articles</h1>
        <div className="articles">
          {data.slice(it, it + 3).map((item) => {
            return (
              <SingleArticle key={item.id} item={item} />
            );
          })}
        </div>
        <div className="pagination">
          <FaArrowLeft
            onClick={() => setIt(0)}  
            style={{ color: `${it ? '#444957' : '#828B9C'}`}}
          />
          <p>{it ? 2 : 1} / 2</p>
          <FaArrowRight
            onClick={() => setIt(3)} 
            style={{ color: `${it ? '#828B9C' : '#444957'}`}} 
          />
        </div>
    </section>
  )
}
export default Articles