import { DragOverlay } from "@dnd-kit/core";
import { DnDWrapper } from "../DnDWrapper";
import React from "react";
import { ReactComponent as ProfileSvg } from "../../../assets/svgs/profile.svg";
import { Player } from "../../../../types";

import classes from "./Substitute.module.css";

const Substitute: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <DnDWrapper id={player.id}>
      <div className={classes.container}>
        <div className={classes.jerseyWrapper}>
          <img
            src={
              player.isGk
                ? "/assets/images/gk-jersey.png"
                : "/assets/images/player-jersey.png"
            }
            alt="jersey"
            className={classes.jersey}
          />
          <div className={classes.jerseyNumber}>{player.jerseyNumber}</div>
        </div>
        <div className={classes.playerInfo}>
          <div className={classes.playerPersonalInfo}>
            <ProfileSvg className={classes.profile} />
            <div className={classes.playerName}>{player.name.firstName}</div>
          </div>
        </div>
        <div className={classes.position}>{player.playerPosition.position}</div>
      </div>
    </DnDWrapper>
  );
};

export default Substitute;
