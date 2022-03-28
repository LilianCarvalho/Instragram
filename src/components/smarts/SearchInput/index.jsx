import * as Styled from "./styled";

function SearchInput(props) {
  return (
    <Styled.SearchInput
      value={props.value}
      onChange={props.onChange}
      placeholder="Pesquisar"
    />
  );
}

export default SearchInput;
