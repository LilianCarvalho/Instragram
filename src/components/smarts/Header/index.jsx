import * as Styled from "./styled";
import logoSrc from "../../../assets/logo.png";

function Header(props) {
  return (
    <>
      <Styled.Header>
        <Styled.Logo src={logoSrc} />
        <Styled.Input />
        <div>
          <Styled.ButtonLogin>Entrar</Styled.ButtonLogin>
          <Styled.ButtonRegister>Cadastrar</Styled.ButtonRegister>
        </div>
      </Styled.Header>
    </>
  );
}

export default Header;
