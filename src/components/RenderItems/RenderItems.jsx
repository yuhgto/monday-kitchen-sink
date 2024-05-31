import React, { useState, useEffect } from "react";
import "monday-ui-react-core/dist/main.css";
import "./RenderItems.scss";
import Item from "../Item/Item";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

function randomColorGenerator() {
  const ITEMS_BACKGROUND_COLORS = [
    "(236,53,127)",
    "(112,194,251)",
    "(248,198,49)",
    "(188,188,188)",
    "(166,56,76)",
    "(72,189,110)",
    "(89,143,246)",
    "(144,86,210)",
    "(44,113,69)",
  ];

  return ITEMS_BACKGROUND_COLORS[Math.floor(Math.random() * ITEMS_BACKGROUND_COLORS.length)];
}


const RenderItems = ({ itemsData, action, actionButtonContent, customComponent }) => {
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    monday.execute("notice", {
      message: "Please note that every action you take in the playground affects the real board",
      type: "info",
      timeout: 5000,
    });
  }, []);

  return (
    <div className="working-with-the-board-items playground">
      <h3 className="playground-header">Playground</h3>
      {customComponent}
      {itemsData.map((item, index) => {
        return (
          <Item
            key={item.id}
            item={item}
            action={action}
            actionButtonContent={actionButtonContent}
            backgroundColor={randomColorGenerator()}
            isActive={activeCard === index}
            index={index}
            setActiveCard={setActiveCard}
          />
        );
      })}
    </div>
  );
};

export default RenderItems;
