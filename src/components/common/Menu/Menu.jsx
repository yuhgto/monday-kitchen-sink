import React, { useEffect, useState } from "react";
import MenuButton from "./components/MenuButton";
import "./Menu.scss";
import { menuOptions } from "./MenuConstants";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../hooks/UseAppContext";
import { Flex, Chips, ListItem, ListTitle, List, AttentionBox } from "monday-ui-react-core";
import _ from "lodash";

const actionAppFeatures = [
  "AppFeatureItemBatchAction",
  "AppFeatureItemMenuAction",
  "AppFeatureAiBoardMainMenuHeader",
  "AppFeatureAiItemUpdateActions",
  "AppFeatureGroupMenuAction",
]

const Menu = () => {
  const history = useNavigate();
  const appContext = useAppContext();
  const [featureType, setFeatureType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [visibleOptions, setVisibleOptions] = useState([]);

  useEffect(function updateFeatureType() {
    if (appContext.data) {
      setFeatureType(appContext.data.appFeature.type);
      setIsLoading(false);
    }
  }, [appContext])

  useEffect(function hideUnsupportedExamples() {
    if (featureType) {
      const options = menuOptions.map((section) => {
        // const filteredOptions = section.subOptions.filter(option => option?.disableFor.includes(featureType))
        const filteredOptions = section.subOptions.filter((option) => {
          if (option.disableFor) {
            if (!option.disableFor.includes(featureType)) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        })
        return { name: section.name, subOptions: filteredOptions };
      })
      setVisibleOptions(options)
    }
  }, [featureType])

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
            Explore the core features of the monday app framework here. Each example has a playground to test each feature, & a code sample. 
            Once you're done, open it in another app feature to keep learning! 
          </div>
        </div>
        <img alt="" src={require("./assets/hero_image.png")} className="heroImage" />
      </div>
    );
  };

  const renderMenuForActionFeature = (menuOptions) => {
    return (
      <div>
        {menuOptions.map((section, index) => {
          return (<div><List>
            <ListTitle>{section.name}</ListTitle>
            <div>{section.subOptions.map((option) => {
              return <ListItem key={option.name} onClick={() => history(option.location)}>{option.name}</ListItem>
            })}</div></List></div>
          )
        })}
      </div>
    );
  };

  return (
    (isLoading) ? <div></div> :
      <>
        {(_.includes(actionAppFeatures, featureType)) ?
          <div className="menuList">
            {renderMenuForActionFeature(visibleOptions)}
          </div>
          :
          <div className="menuContainer">
            {renderHero()}
            {visibleOptions.map((section) => renderSection(section.name, section.subOptions))}
          </div>}
      </>
  );
};

export default Menu;
