import styles from "../../../styles/ButtonPrime.module.css";

const ButtonPrime = (props) => {
  const setVisibleAboutPage = () => {
    props.setIsVisibleAboutPage(true);
    props.setIsVisiblePrincipalPage(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={setVisibleAboutPage}></button>
    </div>
  );
};

export default ButtonPrime;
