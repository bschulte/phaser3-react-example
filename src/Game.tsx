import Phaser from "phaser";
import ExampleScene from "./scenes/exampleScene";

import * as React from "react";

export interface IGameProps {}

export default class IGame extends React.Component<IGameProps, any> {
  componentDidMount() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      pixelArt: true,
      width: 800,
      height: 640,
      parent: "phaser-game",
      scene: [ExampleScene]
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return <div id="phaser-game" />;
  }
}
