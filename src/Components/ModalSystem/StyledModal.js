import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 0px !important;
    background: none;
    border: none;
    .modal-header {
      background: var(--blue1);
      color: var(--white);
      font-size: 1.5rem;
      font-weight: bold;
      padding: 2rem 1rem;
      border-top-left-radius: 20px;
      border: none;
    }
    .modal-body {
      background: var(--white);
    }
    .modal-footer {
      background: var(--white);
      border-bottom-right-radius: 20px;
    }
  }
`;
