import React, { useContext, useState, useRef, SetStateAction } from "react";
import DragContext from "../DragContext";
type WithChildren<T = {}> = T & { children?: React.ReactNode, className?: string, id:any};

const DragItem = ({ children, className, id }: WithChildren) => {
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
      className={className}
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
