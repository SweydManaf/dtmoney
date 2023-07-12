import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequesclose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequesclose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequesclose}
      overlayClassName={"react-modal-overlay"}
      className={"reat-modal-content"}
    >
      <button
        type="button"
        onClick={onRequesclose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
