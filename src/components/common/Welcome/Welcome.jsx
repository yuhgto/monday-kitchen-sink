import React, { useEffect, useState } from "react";
import "monday-ui-react-core/dist/main.css";
import "./Welcome.scss";
import Lottie from "react-lottie-player";

import { lottieOptions } from "./WelcomeConstants";
import { Button, Loader, Text, Heading } from "@vibe/core"; // Added Text, Heading
import { useNavigate } from "react-router";
import { useAppContext } from "../../../hooks/UseAppContext";

const mondayLogo = require("../../../assets/images/logo.png");
const mondayLogoDark = require("../../../assets/images/logo_dark.png");

const Welcome = () => {
  const history = useNavigate();
  const appContext = useAppContext();
  const isLoading = appContext.isLoading;
  const theme = appContext?.data?.theme ?? "light";
  const colorIfDarkMode = (theme === "dark" || theme === "hacker_theme" || theme === "black") ? "onInverted" : "primary";
  const logoIfDarkMode = (theme === "dark" || theme === "hacker_theme" || theme === "black") ? mondayLogoDark : mondayLogo;
  console.log({appContext, theme, colorIfDarkMode})

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
              src={logoIfDarkMode}
              alt=""
            />
            <Heading type={"h1"} className="title" color={colorIfDarkMode}>
              Kitchen Sink App
            </Heading>
            <Text type={Text.types.TEXT1} className="subTitle" color={colorIfDarkMode} maxLines={3}>
              See practical examples of the main features of the monday API and SDK, with explanations and code samples
            </Text>
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
