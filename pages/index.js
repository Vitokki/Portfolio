import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import PrincipalPage from "../Components/PrincipalPage/index";
import Page2D from "../Components/Page2D/index";
import Page3D from "../Components/Page3D/index";

import AboutPage from "../Components/AboutPage/index";
import React, { useState } from "react";

export default function Home() {
  const [isVisiblePrincipalPage, setIsVisiblePrincipalPage] = useState(true);
  const [isVisibleAboutPage, setIsVisibleAboutPage] = useState(false);
  const [isVisible2DPage, setIsVisible2DPage] = useState(false);
  const [isVisible3DPage, setIsVisible3DPage] = useState(false);

  return (
    <div className={styles.container}>
      {isVisiblePrincipalPage ? (
        <PrincipalPage
          setIsVisible3DPage={setIsVisible3DPage}
          setIsVisible2DPage={setIsVisible2DPage}
          setIsVisibleAboutPage={setIsVisibleAboutPage}
          setIsVisiblePrincipalPage={setIsVisiblePrincipalPage}
        ></PrincipalPage>
      ) : (
        ""
      )}

      {isVisibleAboutPage ? (
        <AboutPage
          setIsVisibleAboutPage={setIsVisibleAboutPage}
          setIsVisiblePrincipalPage={setIsVisiblePrincipalPage}
          setIsVisible2DPage={setIsVisible2DPage}
          setIsVisible3DPage={setIsVisible3DPage}
          isVisibleAboutPage={isVisibleAboutPage}
          isVisible2DPage={isVisible2DPage}
          isVisible3DPage={isVisible3DPage}
        ></AboutPage>
      ) : (
        ""
      )}
      {isVisible2DPage ? (
        <Page2D
          setIsVisibleAboutPage={setIsVisibleAboutPage}
          setIsVisiblePrincipalPage={setIsVisiblePrincipalPage}
          setIsVisible2DPage={setIsVisible2DPage}
          setIsVisible3DPage={setIsVisible3DPage}
          isVisible2DPage={isVisible2DPage}
          isVisible3DPage={isVisible3DPage}
          isVisibleAboutPage={isVisibleAboutPage}
        ></Page2D>
      ) : (
        ""
      )}
      {isVisible3DPage ? (
        <Page3D
          setIsVisibleAboutPage={setIsVisibleAboutPage}
          setIsVisiblePrincipalPage={setIsVisiblePrincipalPage}
          setIsVisible2DPage={setIsVisible2DPage}
          setIsVisible3DPage={setIsVisible3DPage}
          isVisible3DPage={isVisible3DPage}
          isVisibleAboutPage={isVisibleAboutPage}
          isVisible2DPage={isVisible2DPage}
        ></Page3D>
      ) : (
        ""
      )}
    </div>
  );
}
