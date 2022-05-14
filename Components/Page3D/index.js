import Navbar from "../Navbar/index";

const Page3D = (props) => {
  return (
    <>
      <Navbar
        setIsVisiblePrincipalPage={props.setIsVisiblePrincipalPage}
        setIsVisibleAboutPage={props.setIsVisibleAboutPage}
        setIsVisible2DPage={props.setIsVisible2DPage}
        setIsVisible3DPage={props.setIsVisible3DPage}
        isVisibleAboutPage={props.isVisible3DPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
      ></Navbar>
    </>
  );
};

export default Page3D;
