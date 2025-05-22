import React from 'react';
import './MenuButton.scss';
import PropTypes from 'prop-types';
import { Text } from '@vibe/core';

const StackButton = ({ image, background, title, onPress, color }) => {
  return (
    <div onClick={onPress} className="menuItemContainer">
      <div style={{ backgroundColor: background }} className="background">
        <img src={image} className="item-icon" alt="icon" />
      </div>
      <Text type="text1" color={color} className="item-title" maxLines={2}>
        {title}
      </Text>
    </div>
  );
};

StackButton.propTypes = {
  image: PropTypes.string,
  background: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default StackButton;
