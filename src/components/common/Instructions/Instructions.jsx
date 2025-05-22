import React from "react";
import { Text, Heading } from "monday-ui-react-core";
import "./Instructions.scss";

const Instructions = ({ paragraphs, instructionsListItems, linkToDocumentation, customInstruction }) => {
  return (
    <div className="instructions">
      <Heading type={Heading.types.H3}>From the documentation</Heading>
      {paragraphs.map((paragraph, i) => {
        return <Text key={i} type={Text.types.TEXT1}>{paragraph}</Text>;
      })}

      <Text type={Text.types.TEXT1}>
        <a href={linkToDocumentation} target="_blank" rel="noopener noreferrer">
          Learn more in our documentation here.
        </a>
      </Text>
      <Heading type={Heading.types.H3}>How to use the sample</Heading>
      <ol>
        {instructionsListItems.map((listItem, i) => {
          return <li key={i}><Text type={Text.types.TEXT1}>{listItem}</Text></li>;
        })}
      </ol>
    </div>
  );
};

export default Instructions;
