import React from "react";
import Image from "next/image";

import DocRed from "../../public/assets/images/logo-docred-color.svg";
import Link from "next/link";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image src={DocRed} width={90} height={90} />
      <Link href="/">
        <a className={styles.link}>Preguntas Frecuentes</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>Contáctanos</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>Información</a>
      </Link>
      <div className={styles.mobile}>
        <Link href="/">
          <a className={styles.item}>Preguntas Frecuentes</a>
        </Link>
        <Link href="/">
          <a className={styles.item}>Contáctanos</a>
        </Link>
        <Link href="/">
          <a className={styles.item}>Información</a>
        </Link>
      </div>
      <p className={styles.name}>
        DocRed &#9400; 2019. Todos los derechos reservados
      </p>
    </div>
  );
};

export default Footer;
