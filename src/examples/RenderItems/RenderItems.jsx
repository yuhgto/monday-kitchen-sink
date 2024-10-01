import React, { useState, useEffect } from "react";
import "monday-ui-react-core/dist/main.css";
import { Loader, Skeleton } from "monday-ui-react-core";
import "./RenderItems.scss";
import Item from "../../components/common/Item/Item";
import randomColorGenerator from "../../utils/randomColorGenerator";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

const RenderItems = ({isLoading, itemsData, action, actionButtonContent, disableHeader }) => {
  const [activeCard, setActiveCard] = useState();

  return (
    isLoading ? (
      <div className="loading">
      <Skeleton
        size="h4"
        type="text"
      />
      <Skeleton
        size="h4"
        type="text"
      />
      <Skeleton
        size="h4"
        type="text"
      />
      <Skeleton
        size="h4"
        type="text"
        width={82}
      />
      </div>
    ) : (
    <div className="working-with-the-board-items">
      {!disableHeader && <h3 className="playground-header">Playground</h3>}
      {itemsData.map((item, index) => {
        return (
          <Item
            key={item.id}
            item={item}
            action={action}
            actionButtonContent={actionButtonContent}
            backgroundColor={randomColorGenerator()}
            index={index}
            setActiveCard={setActiveCard}
          />
        );
      })}
    </div>)
  );
};

export default RenderItems;
