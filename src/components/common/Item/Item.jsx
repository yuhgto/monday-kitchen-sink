import React, { useRef } from "react";
import "monday-ui-react-core/dist/main.css";
import "./Item.scss";
import Button from "monday-ui-react-core/dist/Button";

const Item = ({ item, backgroundColor, action, isActive, index, setActiveCard, actionButtonContent }) => {
  const initialRandomColor = useRef(backgroundColor);

  return (
    <div className="working-with-the-board-item">
      <div className="rect" style={{ backgroundColor: `rgb${initialRandomColor.current}` }}></div>
      <span className="item-name ellipsis">{item.name}</span>
      {action && (
        <div className="action-button">
        <Button size={Button.sizes.SMALL} kind={Button.kinds.SECONDARY} onClick={() => action(item)}>
          {actionButtonContent || "Try me!"}
        </Button></div>
      )}
    </div>
  );
};

export default Item;
