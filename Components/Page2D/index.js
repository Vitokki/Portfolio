import Navbar from "../Navbar/index";
import Slidebar from "../Slidebar/SlideBar";

const Page2D = (props) => {
  return (
    <>
      <Navbar
        setIsVisiblePrincipalPage={props.setIsVisiblePrincipalPage}
        setIsVisibleAboutPage={props.setIsVisibleAboutPage}
        setIsVisible2DPage={props.setIsVisible2DPage}
        setIsVisible3DPage={props.setIsVisible3DPage}
        isVisibleAboutPage={props.isVisible2DPage}
        isVisible2DPage={props.isVisible2DPage}
        isVisible3DPage={props.isVisible3DPage}
      ></Navbar>
      <Slidebar Slide2D={true}></Slidebar>
    </>
  );
};

export default Page2D;
