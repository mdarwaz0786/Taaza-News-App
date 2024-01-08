import axios from "axios";
import { useState, useEffect } from "react";
import HeadLineCategory from "./HeadLineCategory.jsx";
import Footer from "../Footer/Footer.jsx";
import Promotion from "../Promotion/Promotion.jsx";

const HeadLineNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const API_URL = `https://linesnews.onrender.com/api/h-lines-items?filters[shorthand][$eq]=${category}&populate=*`;
    axios.get(API_URL)
      .then((response) => {
        const oneLineNewsData = response.data.data[0].attributes.one_line_news.data;
        setNewsData(() => oneLineNewsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      <HeadLineCategory setCategory={setCategory} />
      <div className="news-container">
        {
          newsData.map((item) => {
            const publishedAt = new Date(item.attributes.publishedAt);
            const currentDate = new Date();
            const timeDifference = currentDate - publishedAt;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            return (
              <div className="news-item" key={item.id}>
                <div className="news-headline">
                  <div>
                    <p className="news-source" style={{ color: "grey" }}>Source: {item.attributes.source}</p>
                    <p className="news-headlines">{item.attributes.headline}</p>
                  </div>
                  <div>
                    <img src={item.attributes.iconURL} alt="icon" />
                  </div>
                </div>
                <div className="hashtag">
                  <p style={{ color: "darkblue" }}>{item.attributes.hashtag}</p>
                  <p style={{ color: "grey" }}>{daysDifference} days ago</p>
                </div>
              </div>
            );
          })
        }
      </div>
      <Promotion />
      <Footer />
    </>
  );
};

export default HeadLineNews;
