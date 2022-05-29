import PlayerCard from "../PlayerCard/PlayerCard";
import classes from "./PositionGrid.module.css";
import { fieldPositionsGrid } from "./utility";
import { PositionGridProps } from "./PositionGrid.types";

export const PositionGrid = ({ firstEleven }: PositionGridProps) => {
  const alreadyMatched: string[] = [];

  return (
    <>
      {fieldPositionsGrid.map((row, rowIdx) => (
        <div className={classes.rowContainer} key={`row_${rowIdx}`}>
          <>
            {row.map((col, colIdx) => {
              const matchedPlayers = firstEleven.filter(
                (teamPlayer) => teamPlayer?.playerPosition?.position === col
              );
              const matchedPlayer = matchedPlayers.filter(
                (matchedPlayer) => !alreadyMatched.includes(matchedPlayer.id)
              )[0];
              if (matchedPlayer) {
                alreadyMatched.push(matchedPlayer.id);
              }
              return (
                <div
                  className={classes.cellContainer}
                  key={`${rowIdx}${colIdx}`}
                >
                  {matchedPlayer ? (
                    <PlayerCard player={matchedPlayer} />
                  ) : (
                    <div className={classes.emptySlot} />
                  )}
                </div>
              );
            })}
          </>
        </div>
      ))}
    </>
  );
};
