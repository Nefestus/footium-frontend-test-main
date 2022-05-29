import { DndContext } from "@dnd-kit/core";
import { PositionGrid } from "./PositionGrid";
import { Fragment } from "react";
import { team1 } from "../../data";
import Pitch from "./Pitch/Pitch";
import Substitute from "./Substitute/Substitute";
import classes from "./TacticsBoard.module.css";

const TacticsBoard: React.FC = () => {
  return (
    <div className={classes.boardContainer}>
      <div className={classes.board}>
        <Pitch />
      </div>
      <div className={classes.boundedArea}>
        <DndContext>
          <div className={classes.gridContainer}>
            <PositionGrid firstEleven={team1.firstEleven} />\
          </div>
          <div className={classes.subsCol}>
            {team1.subs.map((player, idx) => (
              <Fragment key={player.id}>
                <Substitute player={player} />
              </Fragment>
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default TacticsBoard;
