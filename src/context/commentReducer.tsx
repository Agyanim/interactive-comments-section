import data from "../../util/data/data.json";
export enum actionType {
  INCREASE_VOTE = "increase-vote",
  DECREASE_VOTE = "decrease-vote",
  TOGGLE_ISREPLYING = "toggle-isreplying",
  TOGGLE_ISEDITING = "toggle-isreplying",
  SET_COMMENT = "set-comment",
}
export const initialState: Initiastate = {
  vote: 0,
  isReplying: false,
  isEditing: false,
  comment: data.comments,
};

export const commentReducer = (
  state: Initiastate,
  action: { type: actionType; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.INCREASE_VOTE:
      return {
        ...state,
        vote: state.vote + 1,
      };
    case actionType.DECREASE_VOTE:
      return {
        ...state,
        vote: state.vote - 1,
      };
    case actionType.TOGGLE_ISREPLYING:
      return {
        ...state,
            isReplying: !state.isReplying,
      };
    case actionType.TOGGLE_ISEDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case actionType.SET_COMMENT:
      return {
        ...state,
        Comment: [...payload],
      };
  }
};
