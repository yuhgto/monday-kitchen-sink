import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
// Updated import for Loader and added Heading
import { Loader, Heading } from "monday-ui-react-core"; 
import EmptyBoardSVG from "../../../assets/icons/empty-board.svg";
import ArrowImage from "../../../assets/icons/right-up-arrow.png";

const NoBoardSelected = () => {
  const { boardName, isLoading } = useContext(Context);
  if (isLoading) {
    return (
      <div style={{ height: 48, width: 48, margin: "auto" }}>
        <Loader /> 
      </div>
    );
  } else if (!boardName) {
    return (
      <div className="empty-board-container">
        <img className="empty-board-image" src={EmptyBoardSVG} alt="" />
        <Heading type={Heading.types.H2}>No board selected</Heading>
        <div className="chooseBoardContainer">
          <Heading type={Heading.types.H4}>Please add items or select other board.</Heading>
          <img className="pointer-image" src={ArrowImage} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="empty-board-container">
        <img className="empty-board-image" src={EmptyBoardSVG} alt="" />
        <Heading type={Heading.types.H2}>Board is empty</Heading>
        <Heading type={Heading.types.H4}>Please add items or select other board.</Heading>
      </div>
    );
  }
};

export default NoBoardSelected;
