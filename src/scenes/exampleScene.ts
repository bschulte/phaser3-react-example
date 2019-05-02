import store from "../store";
import { TOGGLE_UI } from "../store/gameReducer";
import { Scene } from "phaser";

export default class ExampleScene extends Scene {
  create() {
    const text = this.add.text(250, 250, "Toggle UI", {
      backgroundColor: "white",
      color: "blue",
      fontSize: 48
    });

    text.setInteractive({ useHandCursor: true });

    text.on("pointerup", () => {
      store.dispatch({ type: TOGGLE_UI });
    });
  }
}
