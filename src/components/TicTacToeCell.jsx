import { memo } from 'react'
import { useDrop } from 'react-dnd'
import {ItemTypes} from "../game/ItemTypes";
import {snapToGrid} from "../game/snapToGrid";

const TicTacToeCell = memo(function TicTacToeCell({
                                                 accept,
                                                 lastDroppedItem,
                                                 onDrop,
                                             }) {


    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = isOver && canDrop

    return (
        <div ref={drop} className={isOver ? "bg-gray-400" : ""} data-testid="cell">
            {lastDroppedItem?.name}
        </div>
    )
})

export default TicTacToeCell;
