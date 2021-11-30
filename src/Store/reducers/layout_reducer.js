import { OPEN_SIDEBAR, OPEN_MODAL, CLOSE_MODAL } from "Store/types";

const initialState = {
  sideBarOpen: false,
  modal: {
    type: "",
    isOpen: false,
    addProps: null
  }
};

export default function layout_reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen
      };
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          type: action.payload.name,
          addProps: action.payload.addProps,
          isOpen: true
        }
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          type: "",
          addProps: null,
          isOpen: false
        }
      };
    default:
      return state;
  }
}
