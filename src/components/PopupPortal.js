import React from 'react';
import ReactDOM from 'react-dom';

const PopupPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('popup-root')
  );
};

export default PopupPortal;
