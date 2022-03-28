import * as Styled from "./styled";

function Input(props) {
  return (
    <Styled.Input
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
}

export default Input;
