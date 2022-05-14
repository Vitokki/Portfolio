import styles from "../../styles/ButtonsNavbar.module.css";
import { BsHouse } from "react-icons/bs";

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
      </button>
    </div>
  );
};

export default ButtonsNavbar;
