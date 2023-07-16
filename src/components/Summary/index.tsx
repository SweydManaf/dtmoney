import { Container } from "../Summary/styles";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsContexts";
import { useContext } from "react";

export function Summary() {
  const data = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
