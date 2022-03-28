import Input from '../../dumbs/Input'

function SearchInput(props) {
  return(
    <Input value={props.value} onChange={props.onChange} placeholder="Pesquisar" />
  )
}

export default SearchInput