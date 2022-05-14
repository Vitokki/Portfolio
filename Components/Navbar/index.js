import styles from "../../styles/NavBar.module.css";
import ButtonsNavbar from "./ButtonsNavbar";


const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <ButtonsNavbar
        setIsVisiblePrincipalPage={props.setIsVisiblePrincipalPage}
        isVisibleAboutPage={props.isVisibleAboutPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
        src="home"
      ></ButtonsNavbar>
      <ButtonsNavbar
        setIsVisibleAboutPage={props.setIsVisibleAboutPage}
        isVisibleAboutPage={props.isVisibleAboutPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
      ></ButtonsNavbar>
      <ButtonsNavbar
        setIsVisible2DPage={props.setIsVisible2DPage}
        isVisibleAboutPage={props.isVisibleAboutPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
      ></ButtonsNavbar>
      <ButtonsNavbar
        setIsVisible3DPage={props.setIsVisible3DPage}
        isVisibleAboutPage={props.isVisibleAboutPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
      ></ButtonsNavbar>
    </div>
  );
};

export default Navbar;
