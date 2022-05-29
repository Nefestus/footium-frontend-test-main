import { CSS } from "@dnd-kit/utilities";
import { DnDWrapperProps } from "./DnDWrapper.types";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import classes from "./DnDWrapper.module.css";

export const DnDWrapper = ({ children, id }: DnDWrapperProps) => {
  const { setNodeRef: droppableNodeRef, isOver } = useDroppable({
    id: `droppable_${id}`,
  });
  const {
    attributes,
    listeners,
    setNodeRef: draggableNodeRef,
    transform,
  } = useDraggable({
    id: `draggable_${id}`,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={draggableNodeRef} {...listeners} {...attributes} style={style}>
      <div ref={droppableNodeRef} className={isOver ? classes.dimmed : ""}>
        {children}
      </div>
    </div>
  );
};
