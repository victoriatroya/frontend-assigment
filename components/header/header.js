import React, { useState } from "react";

import Image from "next/image";

import SearchIcon from "../../public/assets/images/magnifying-glass-solid.svg";
import DocRed from "../../public/assets/images/logo-docred-color.svg";
import HomeIcon from "../../public/assets/images/house-solid.svg";
import ArrowDown from "../../public/assets/images/caret-down-solid.svg";
import NotificationIcon from "../../public/assets/images/bell-solid.svg";
import UserIcon from "../../public/assets/images/user-solid.svg";
import SettingsIcon from "../../public/assets/images/gear-solid.svg";

import styles from "./header.module.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={DocRed} width={90} />
        </div>
        <div className={styles.input}>
          <div className={styles.left}>
            <Image src={SearchIcon} width={15} height={15} />
          </div>
          <div className={styles.right}>
            <input  value={searchValue} type="text" placeholder="¿Qué estás buscando?" onChange={handleChange} />
          </div>
        </div>
        <div className={styles.home}>
          <Image src={HomeIcon} width={15} height={15} />
          <p className={styles.text}>Inicio</p>
          <Image src={ArrowDown} width={15} height={15} />
        </div>
        <div className={styles.mobile}>
          <Image src={HomeIcon} width={15} height={15} />
          <Image src={SearchIcon} width={15} height={15} />
        </div>
      </div>
      <div className={styles.right}>
        <hr />
        <div className={styles.item}>
          <Image src={NotificationIcon} width={15} height={15} />
        </div>
        <div className={styles.item}>
          <Image src={UserIcon} width={15} height={15} />
          <Image src={ArrowDown} width={15} height={15} />
        </div>
        <div className={styles.item}>
          <Image src={SettingsIcon} width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Header;
