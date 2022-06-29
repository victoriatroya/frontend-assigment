import React from "react";
import Image from "next/image";

import data from "./data";



import styles from "./news.module.scss";

const News = ({
  title,
  newContent,
  favsNumber,
  commentsNumber,
  viewsNumber,
  newImage,
  favIcon,
  viewIcon,
  commentIcon,
}) => {
  return (
    <div className={styles.news}>
      <div className={styles.card}>
        <div className={styles.left}>
          <Image src={newImage} width={120} height={120} />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>Por: {newContent}</p>
          <div className={styles.items}>
            <div className={styles.item}>
              <Image src={favIcon} width={15} height={15} />
              <p className={styles.number}>{favsNumber}</p>
            </div>
            <div className={styles.item}>
              <Image src={commentIcon} width={20} height={15} />
              <p className={styles.number}>{commentsNumber}</p>
            </div>
            <div className={styles.item}>
              <Image src={viewIcon} width={20} height={15} />
              <p className={styles.number}>{viewsNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
