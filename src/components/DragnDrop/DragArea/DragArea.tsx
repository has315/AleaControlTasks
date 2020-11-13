import React, { useContext, useState, useEffect } from "react";
import DragContext from "../DragContext";
import DragItem from "../DragItem";

type WithChildren<T = {}> = T & { children?: React.ReactNode };

type DragAreaProps = WithChildren<{
  items: Array<any>;
  onChange: any;
}>;

const DragArea = ({ children, items, onChange }: DragAreaProps) => {
  const [draggedItem, setDraggedItem] = useState(0);
  const [draggedOverID, setDraggedOverID] = useState(0);



  const objectArrayMove = (arr: any, from: any, to: any) => {
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
    return Array.of(...arr);
  };

  // a[0] = a[1]
  // a[1] = a[0]
  // a[0] != value
  // a[] => arr index

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: any) => {
    e.preventDefault();
    onChange(objectArrayMove(items, draggedItem, draggedOverID));
  };

  return (
    <DragContext.Provider
      value={{ draggedItem, setDraggedItem, draggedOverID, setDraggedOverID }}
    >
      <div className="DragArea" onDragOver={onDragOver} onDrop={onDrop}>
        {children}
      </div>
    </DragContext.Provider>
  );
};

export default DragArea;
