import * as Styled from './styled'

function Input(props) {
  return(
    <Styled.Input value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
  )
}

export default Input