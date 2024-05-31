import React from "react";
import MenuButton from "./components/MenuButton";
import "./Menu.scss";
import { menuOptions } from "./MenuConstants";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const history = useNavigate();

  const renderSection = (name, subOptions) => {
    return (
      <div key={name} className="sectionContainer">
        <div className="title">{name}</div>
        <div className="subItemsContainer">
          {subOptions.map(({ image, background, name, location }) => (
            <MenuButton
              key={location}
              image={image}
              background={background}
              title={name}
              onPress={() => history(location)}
            />
          ))}
        </div>
      </div>
    );
  };
  const renderHero = () => {
    return (
      <div className="heroContainer">
        <div className="textContainer">
          <div className="title">Get started with ready-made examples</div>
          <div className="subTitle">
            The monday.com examples Kitchen Sink offers a variety of examples
            <br /> which being displayed easily on your board
          </div>
        </div>
        <img alt="" src={require("./assets/hero_image.png")} className="heroImage" />
      </div>
    );
  };
  return (
    <div className="menuContainer">
      {renderHero()}
      {menuOptions.map((section) => renderSection(section.name, section.subOptions))}
      <img className="logo" src={require("./assets/logo.png")} alt="" />
    </div>
  );
};

export default Menu;
