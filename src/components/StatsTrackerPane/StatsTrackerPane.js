import React from 'react';
import _ from 'lodash';

import './StatsTrackerPane.css';

import LevelStatsInputForm from '../LevelStatsInputForm/LevelStatsInputForm';

function StatsTrackerPane (props) {
  return (
    <div id="stats-pane" className="tracker-pane">
      <p>Level {props.currentLevel}</p>
      <div id="level-stats">
        <table>
          <thead>
            <tr>
              <th>LV</th>
              <th>ST</th>
              <th>AG</th>
              <th>HP</th>
              <th>MP</th>
            </tr>
          </thead>
          <tbody>
            {
              props.levels.map((levelData) => {
                return <tr key={`level-${levelData.level}`}>
                  <td className="level col">{levelData.level}</td>
                  <td className="st col">{levelData.st}</td>
                  <td className="ag col">{levelData.ag}</td>
                  <td className="hp col">{levelData.hp}</td>
                  <td className="ag col">{levelData.mp}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        <LevelStatsInputForm
          currentLevel={props.currentLevel}
          setLevelStats={(levelStats) => {
            const levels = _.cloneDeep(props.levels);
            levels.push(levelStats);
            props.updateLevels(levels);
            props.updateCurrentLevel(levelStats.level);
          }}
        ></LevelStatsInputForm>
      </div>
    </div>
  );
}

export default StatsTrackerPane;
