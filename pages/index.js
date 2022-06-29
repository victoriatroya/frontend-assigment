import React, { useState } from "react";

import mockup from "../mockup/article.json";
import {dataInformation} from "../components/new/data";

import Header from "../components/header/header";
import Article from "../components/article/article";
import News from "../components/new/news";

import RandomImage from "../public/assets/images/image.jpg";
import ViewsIcon from "../public/assets/images/eye-regular.svg";
import CommentsIcon from "../public/assets/images/message-regular.svg";
import FavsIcon from "../public/assets/images/star-regular.svg";

import styles from "./page.module.scss";

const HomePage = () => {
  const [data, setData] = useState(mockup);
  console.log(mockup);
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Article data={data.content} />
          <div className={styles.right}>
              <div className={styles.header}>
                  <h1 className={styles.title}>Noticias relacionadas</h1>
                  <div className={styles.line}></div>
              </div>
              <div className={styles.news}>
                  {dataInformation?.map((item) => (
                      <News
                          titleNew="Noticia relacionada"
                          title={item.title}
                          favsNumber={item.favs}
                          commentsNumber={item.comments}
                          viewsNumber={item.views}
                          commentIcon={CommentsIcon}
                          favIcon={FavsIcon}
                          viewIcon={ViewsIcon}
                          newContent={item.new}
                          newImage={RandomImage}
                      />
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
