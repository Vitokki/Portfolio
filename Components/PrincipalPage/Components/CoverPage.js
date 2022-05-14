import styles from "../../../styles/CoverPage.module.css";

const CoverPage = (props) => {

  const setVisible2DPage = () => {
    props.setIsVisible2DPage(true);
    props.setIsVisiblePrincipalPage(false);
  }

  const setVisible3DPage = () => {
    props.setIsVisible3DPage(true);
    props.setIsVisiblePrincipalPage(false);
  }
  return (
    <>
      <div className={styles.containerRight} onClick={setVisible2DPage}></div>
      <div className={styles.containerLeft} onClick={setVisible3DPage}></div>
    </>
  );
};

export default CoverPage;