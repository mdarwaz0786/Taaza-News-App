import Header from "../Header/Header.jsx";
import MultiLineCategory from "./MultiLineCategory.jsx";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Footer from "../Footer/Footer.jsx";
import Promotion from "../Promotion/Promotion.jsx";

const MultiLineNews = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://linesnews.onrender.com/api/multi-line-newss?pagination[page]=${page}&pagination[pageSize]=10&sort=publishedAt:desc`);
      setData((prevData) => [...prevData, ...response.data.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);


  return (
    <>
      <MultiLineCategory />
      <Header />
      <div className="news-container">
        {
          data.map((item) => {
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
                <p>{item.attributes.newsDescription}</p>
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

export default MultiLineNews;
