import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import CustomDelCategory from "../CustomTable/CustomDelCategory";
export const customConfirmation = (handleClickDelete, title, message) => {
  const options = {
    closeOnEscape: true,
    closeOnClickOutside: false,
    customUI: ({ onClose }) => {
      return (
        <CustomDelCategory
          onClose={onClose}
          handleClickDelete={handleClickDelete}
          Title={title}
          Message={message}
         
        />
      );
    },
  };
  return confirmAlert(options);
};
