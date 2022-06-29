import React from "react";

import styles from "./article.module.scss";

const Article = ({ data }) => (
  <div className={styles.article}>
    <div
      dangerouslySetInnerHTML={{ __html: data }}
      className={styles.content}
    />
  </div>
);

export default Article;
