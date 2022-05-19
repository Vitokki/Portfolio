import React, { useState } from "react";
import styles from "../../styles/SlideBar.module.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";

const Slidebar = (props) => {
  const [indexTitle, setIndexTitle] = useState(0);

  const listTitles = ["Ilustracion", "Bocetos"];

  const changeTitle = (x) => {
    setIndexTitle(indexTitle + x);
    if (indexTitle === 0) {
      setIndexTitle(listTitles.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <button
          className={styles.ButtonSlidebar}
          onClick={() => changeTitle(-1)}
        >
          <BsChevronDoubleLeft className={styles.iconBtn}></BsChevronDoubleLeft>
        </button>
        <div className={styles.title}>{listTitles[indexTitle]}</div>
        <button
          className={styles.ButtonSlidebar}
          onClick={() => changeTitle(1)}
        >
          <BsChevronDoubleRight
            className={styles.iconBtn}
          ></BsChevronDoubleRight>
        </button>
      </div>
    </div>
  );
};

export default Slidebar;
