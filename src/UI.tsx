import React, { Component } from "react";
import { connect } from "react-redux";
import { Transition } from "react-spring";

import { GAME_HEIGHT, GAME_WIDTH } from "./config";

const LEFT_UI_WIDTH = 50;

interface IUIProps {
  showUi: boolean;
}

class UI extends Component<IUIProps> {
  state = {
    leftOffset: 0
  };

  componentDidMount() {
    this.setState({ leftOffset: this.calculateLeftOffset() });

    window.addEventListener("resize", () => {
      this.setState({ leftOffset: this.calculateLeftOffset() });
    });
  }

  calculateLeftOffset = () => {
    return window.innerWidth / 2 - GAME_WIDTH / 2;
  };

  render() {
    const { showUi } = this.props;
    const { leftOffset } = this.state;
    return (
      <div>
        {/* Left */}
        <div
          style={{
            position: "absolute",
            left: leftOffset,
            width: LEFT_UI_WIDTH,
            height: GAME_HEIGHT,
            backgroundColor: "yellow",
            opacity: 0.5
          }}
        />
        {/* Top */}
        <div>
          <Transition
            items={showUi}
            from={{ marginTop: -100 }}
            enter={{ marginTop: 0 }}
            leave={{ marginTop: -100 }}
          >
            {show =>
              show &&
              (props => (
                <div
                  style={{
                    ...props,
                    position: "absolute",
                    width: GAME_WIDTH,
                    height: 100,
                    top: 0,
                    backgroundColor: "#fcfcfc"
                  }}
                />
              ))
            }
          </Transition>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ showUi }: { showUi: boolean }) => ({
  showUi
});

export default connect(mapStateToProps)(UI);
