import React, { Context,createContext } from 'react';

const DragContext:Context<any> = createContext([{
    draggedItem: '',
    draggedOverID: '',
    setDraggedItem: () => {},
    setDraggedOverID: () => {},
}]);

export default DragContext;
