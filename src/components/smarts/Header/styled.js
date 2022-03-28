import styled from "styled-components";
import Image from "../../dumbs/Image";
import Button from "../../dumbs/Button";
import SearchIput from "../SearchInput";

export const Header = styled.header`
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  padding: 12px 112.5px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Logo = styled(Image)`
  width: 103px;
  height: 29px;
`;

export const Input = styled(SearchIput)``;

export const ButtonLogin = styled(Button)``;

export const ButtonRegister = styled(Button)``;
