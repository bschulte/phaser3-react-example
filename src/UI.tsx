import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTransition, animated } from "react-spring";

import { GAME_HEIGHT, GAME_WIDTH } from "./config";

const LEFT_UI_WIDTH = 50;

interface IUIProps {
  showUi: boolean;
}

function calculateLeftOffset() {
  return window.innerWidth / 2 - GAME_WIDTH / 2;
};

function UI({ showUi }: IUIProps) {
  const [leftOffset, setLeftOffset] = useState(calculateLeftOffset());

  function handleResize() {
    setLeftOffset(calculateLeftOffset);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const transitions = useTransition(showUi, null, ({
    from: { marginTop: -100 },
    enter: { marginTop: 0 },
    leave: { marginTop: -100 },
  }));

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
        {transitions.map(({ item, key, props }) => item &&
          <animated.div
            key={key}
            style={{
              ...props,
              position: "absolute",
              width: GAME_WIDTH,
              height: 100,
              top: 0,
              backgroundColor: "#fcfcfc"
            }}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ showUi }: { showUi: boolean }) => ({
  showUi
});

export default connect(mapStateToProps)(UI);
