import { OPEN_SIDEBAR, OPEN_MODAL, CLOSE_MODAL } from "Store/types";

export function SideBarOpenAction() {
  return {
    type: OPEN_SIDEBAR,
    payload: null
  };
}

export function openModal(modal, addProps) {
  return {
    type: OPEN_MODAL,
    payload: {
      name: modal,
      addProps
    }
  };
}

export function closeModal(modal) {
  return {
    type: CLOSE_MODAL,
    payload: modal
  };
}
