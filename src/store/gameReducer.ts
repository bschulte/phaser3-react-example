export const TOGGLE_UI = "TOGGLE_UI";

const initState: { showUi: boolean } = {
  showUi: false
};

export const toggleUi = () => ({
  type: TOGGLE_UI
});

export const gameReducer = (
  state = initState,
  action: { type: string; payload?: any }
) => {
  console.log("Action:", action);
  switch (action.type) {
    case TOGGLE_UI:
      return { ...state, showUi: !state.showUi };

    default:
      return state;
  }
};
