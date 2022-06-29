import React from "react";
import Image from "next/image";

import CommentsIcon from "../../public/assets/images/message-regular.svg";
import FavsIcon from "../../public/assets/images/star-regular.svg";
import ShareIcon from "../../public/assets/images/share-from-square-regular.svg";

import styles from "./article.module.scss";

const Article = ({ data }) => (
  <div className={styles.article}>
    <div
      dangerouslySetInnerHTML={{ __html: data }}
      className={styles.content}
    />
    <div className={styles.icons}>
      <div className={styles.icon}>
        <Image src={FavsIcon} width={15} height={15} />
        <p>Destacar</p>
      </div>
      <div className={styles.icon}>
        <Image src={CommentsIcon} width={15} height={15} />
        <p>Comentar</p>
      </div>
      <div className={styles.icon}>
        <Image src={ShareIcon} width={15} height={15} />
        <p>Compartir</p>
      </div>
    </div>
  </div>
);

export default Article;
