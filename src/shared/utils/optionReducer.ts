export const OPTION_ACTION_TYPE = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

const reducer = (
  state: StateType,
  action: { type: any; option: OptionType }
): StateType => {
  switch (action.type) {
    case OPTION_ACTION_TYPE.ADD:
      return [...state, action.option];
    case OPTION_ACTION_TYPE.UPDATE:
      return state.map((o: OptionType) =>
        o[0] === action.option[0] ? [...action.option] : o
      );
    case OPTION_ACTION_TYPE.DELETE:
      return state.filter((o: OptionType) =>
        o[0] ? o[0] !== action.option[0] : o[2] !== action.option[2]
      );
    default:
      return state;
  }
};

type OptionType = (string | number)[];
export type StateType = OptionType[];
export const initailState: StateType = [];

export default reducer;
