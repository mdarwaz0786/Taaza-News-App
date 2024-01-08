import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleLineCategory from "./SingleLineCategory.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Promotion from "../Promotion/Promotion.jsx";

const SingleLineCategoryNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("GENERAL");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const API_URL = `https://linesnews.onrender.com/api/one-lines?filters[category][$eq]=${category}&pagination[page]=${page}&pagination[pageSize]=10&sort=publishedAt:desc`;
    axios.get(API_URL)
      .then((response) => {
        setNewsData(() => response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, [category, page]);

  return (
    <>
      <SingleLineCategory setCategory={setCategory} />
      <Header />
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
      <div className="load-more">
        <div className="load-spinner">
          {
            loading && <div className="spinner-border" role="status">
              <p className="visually-hidden">Loading...</p>
            </div>
          }
        </div>
        <button onClick={() => setPage(page + 1)} type="button" className="btn btn-secondary">Load More</button>
      </div>
      <Promotion />
      <Footer />
    </>
  );
};

export default SingleLineCategoryNews;
