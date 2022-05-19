import styles from "../../styles/ButtonsNavbar.module.css";
import { BsHouse } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";

const ButtonsNavbar = (props) => {
  let icon = "";
  const setVisiblePrincipalPage = () => {
    props.setIsVisiblePrincipalPage(true);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={setVisiblePrincipalPage}>
        {props.src === "home" ? (
          <BsHouse className={styles.iconHome}></BsHouse>
        ) : (
          ""
        )}
        {props.src === "about" ? (
          <BsInfoCircle className={styles.iconAbout}></BsInfoCircle>
        ) : (
          ""
        )}
        {props.src === "2Dpage" ? (
          <BsBrush className={styles.icon2Dpage}></BsBrush>
        ) : (
          ""
        )}
        {props.src === "3Dpage" ? (
          <BsBox className={styles.icon3Dpage}></BsBox>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default ButtonsNavbar;
