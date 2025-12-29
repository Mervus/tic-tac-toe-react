import TicTacToe from "./TicTacToe";
import TicTacToeCell from "./TicTacToeCell";
import {useCallback, useState} from "react";
import update from "immutability-helper";
import Item from "./Item";
import {snapToGrid} from "../game/snapToGrid";

export default function ()
{
    const [cells, setCells] = useState([
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
        { accepts: ['cross', 'circle'], lastDroppedItem: null },
    ])

    const [items] = useState([
        { id: 0, name: 'cross', type: "cross" },
        { id: 1, name: 'cross', type: "cross" },
        { id: 2, name: 'cross', type: "cross" },
        { id: 3, name: 'circle', type: "circle" },
        { id: 4, name: 'circle', type: "circle" },
        { id: 5, name: 'circle', type: "circle" }
    ])

    const [droppedBoxIds, setDroppedBoxIds] = useState([])

    function isDropped(boxId) {
        return droppedBoxIds.indexOf(boxId) > -1
    }

    const handleDrop = useCallback(
        (index, item) => {
            const { id, name } = item
            console.log(name)
            setDroppedBoxIds(
                update(droppedBoxIds, id ? { $push: [id] } : { $push: [] }),
            )
            setCells(
                update(cells, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                }),
            )

        },
        [droppedBoxIds, cells],
    )

    return (
        <>
            <TicTacToe cells={cells} handleDrop={handleDrop} />

            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {items.map(({ name, type, id }, index) => (
                    <Item
                        id={id}
                        type={type}
                        name={name}
                        isDropped={isDropped(name)}
                        key={index}
                    />
                ))}
            </div>
        </>
    )
}