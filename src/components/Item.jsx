import {memo, useEffect} from 'react'
import { useDrag } from 'react-dnd'
import {ItemTypes} from "../game/ItemTypes";
import {getEmptyImage} from "react-dnd-html5-backend";


const Item = memo(function Item({ id, type, name }) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: ItemTypes.CROSS,
            item: { id, name },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, name],
    )

    useEffect(() => {
        preview(<img className={"w-16 bg-transparent"} src={`tic-tac-toe-react/${type}.svg`} />, { captureDraggingState: true });
    }, [preview]);

    return (
        <div className={isDragging ? 'item dragging' : 'item'} ref={drag} data-testid="item" role="DraggableBox">
            <img className={"w-16 "} src={`tic-tac-toe-react/${type}.svg`} />
        </div>
    )
})

export default Item;