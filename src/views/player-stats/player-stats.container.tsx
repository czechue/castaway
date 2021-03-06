import React from "react";
import { StoreState } from "../../shared/store/reducers";
import { PlayerStats } from "../../shared/store/actions";
import { connect } from "react-redux";

interface OwnProps {
  stats: { healthPoints: number; foodPoints: number };
}

class _App extends React.Component<OwnProps> {
  render() {
    return (
      <div data-testid="player-stats" data-role="player-stats">
        <p data-testid="player-stats-hp">
          Health points: <strong>{this.props.stats.healthPoints}</strong>
        </p>
        <p data-testid="player-stats-food">
          Food points: <strong>{this.props.stats.foodPoints}</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ stats }: StoreState): { stats: PlayerStats } => {
  return { stats };
};

export const PlayerStatsContainer = connect(mapStateToProps)(_App);
