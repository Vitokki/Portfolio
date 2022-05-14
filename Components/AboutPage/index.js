import Navbar from "../Navbar/index";

const AboutPage = (props) => {
  return (
    <>
      <Navbar
        setIsVisiblePrincipalPage={props.setIsVisiblePrincipalPage}
        setIsVisibleAboutPage={props.setIsVisibleAboutPage}
        setIsVisible2DPage={props.setIsVisible2DPage}
        setIsVisible3DPage={props.setIsVisible3DPage}
        isVisibleAboutPage={props.isVisibleAboutPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
      ></Navbar>
    </>
  );
};

export default AboutPage;
