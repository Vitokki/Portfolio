import ButtonPrime from "./Components/ButtonPrime";
import CoverPage from "./Components/CoverPage";

const PrincipalPage = (props) => {
  return (
    <>
      <ButtonPrime
        setIsVisibleAboutPage={props.setIsVisibleAboutPage}
        setIsVisiblePrincipalPage={props.setIsVisiblePrincipalPage}
      ></ButtonPrime>
      <CoverPage
        setIsVisible2DPage={props.setIsVisible2DPage}
        setIsVisible3DPage={props.setIsVisible3DPage}
        setIsVisiblePrincipalPage={props.setIsVisiblePrincipalPage}
      ></CoverPage>
    </>
  );
};

export default PrincipalPage;
