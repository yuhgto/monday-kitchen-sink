import React, { useEffect, useState } from "react";
import "monday-ui-react-core/dist/main.css";
import "./Welcome.scss";
import Lottie from "react-lottie-player";

import { lottieOptions } from "./WelcomeConstants";
import { Button, Loader } from "monday-ui-react-core";
import { useNavigate } from "react-router";
import { useAppContext } from "../../../hooks/UseAppContext";

const mondayLogo = require("../../../assets/images/logo.png");

const Welcome = () => {
  const history = useNavigate();
  const appContext = useAppContext();
  const appFeatureType = appContext?.data?.appFeature?.type;
  const isLoading = appContext.isLoading;

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const body = document.body;
    // Remove potential old theme classes
    const classesToRemove = [];
    for (let i = 0; i < body.classList.length; i++) {
      if (body.classList[i].startsWith('theme-')) {
        classesToRemove.push(body.classList[i]);
      }
    }
    if (classesToRemove.length > 0) {
      body.classList.remove(...classesToRemove);
    }

    if (appContext.theme) {
      body.classList.add(`theme-${appContext.theme}`);
      console.log(`Applied theme: theme-${appContext.theme}`); // For debugging
    }
  }, [appContext.theme, isLoading]);

  return isLoading ? (
    <div className="loading">
      <Loader size={64}/>
    </div>
  ) : (
    <div className="container">
      <div className="content">
        <div className="row">
          <div className="textContainer">
            <img
              className="logo"
              src={mondayLogo}
              alt=""
            />
            <div className="title">
              Kitchen Sink App
            </div>
            <div className="subTitle">
              See practical examples of the main features of the monday API and SDK, with explanations and code samples
            </div>
            <Button
              className={"getStartedButton"}
              size={Button.sizes.MEDIUM}
              onClick={() => history("/menu")}
            >
              Get started
            </Button>
          </div>
          <div className="imageContainer">
            <Lottie
              className="lottie"
              animationData={lottieOptions.animationData}
              play
              loop
              rendererSettings={lottieOptions.rendererSettings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
