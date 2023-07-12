import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  const handleOpenNewTransactionModel = () => {
    setIsNewTransactionModal(true);
  };

  const handleCloseNewTransactionModel = () => {
    setIsNewTransactionModal(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModel} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequesclose={handleCloseNewTransactionModel}
      />

      <GlobalStyle />
    </>
  );
}
