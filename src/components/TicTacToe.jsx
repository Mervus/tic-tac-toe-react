import TicTacToeCell from "./TicTacToeCell";

export default function ({cells, handleDrop})
{


    return (
        <div className="w-[24vw] h-[24vw] tic-tac-toe">
            {cells.map(({accepts, lastDroppedItem}, i) => (
                <TicTacToeCell accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(i, item)} key={i} />
            ))}
        </div>
    )
}