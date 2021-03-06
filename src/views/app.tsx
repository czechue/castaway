import React from "react";
import { PlayerStatsContainer } from "./player-stats/player-stats.container";
import { PlayerItemsContainer } from "./player-items/player-items.container";
import { ClickableBoardContainer } from "./clickable-board/clickable-board.container";
import { OperationsBoardContainer } from './operations-board/operations-board.container';
import styles from "./app.module.scss";

export class App extends React.Component {
  render() {
    return (
      <>
        <div className={styles.displayFlex}>
          <PlayerStatsContainer />
          <PlayerItemsContainer />
        </div>
        <ClickableBoardContainer />
        <OperationsBoardContainer />
      </>
    );
  }
}
