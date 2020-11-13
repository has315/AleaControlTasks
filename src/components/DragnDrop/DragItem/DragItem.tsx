import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { useContext, useState, useRef, SetStateAction } from "react";
import DragContext from "../DragContext";
type WithChildren<T = {}> = T & { children?: React.ReactNode, style: string | CSSProperties | undefined, id:any};

const DragItem = ({ children, style, id }: WithChildren) => {
  const {draggedItem, setDraggedItem} = useContext(DragContext)
  const {draggedOverID, setDraggedOverID} = useContext(DragContext)

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.target !== null) {
      setDraggedItem(id);
    }
  };

  const setDraggedItemID = () =>{
    setDraggedOverID(id);
  }

  return (
    <div
      className="itemContainer"
      key={id}
      draggable
      onDragStart={onDragStart}
      onDragOver={setDraggedItemID}
    >
      {children}
    </div>
  );
};

export default DragItem;
