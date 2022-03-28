import * as Styled from "./styled";
import Row from "../Row";

function Post(props) {
  return (
    <Styled.Container>
      <Styled.FirstRow>
        <Styled.Profile>
          <Styled.Picture src={props.profile.picture} />
          <Styled.Name>{props.profile.name}</Styled.Name>
        </Styled.Profile>
        <Styled.Dots />
      </Styled.FirstRow>
      <Styled.Photo alt={props.alt} src={props.photo} />
      <Styled.SpacedRow>
        <Row>
          <Styled.Heart />
          <Styled.Balloon />
          <Styled.Send />
        </Row>
        <Styled.Save />
      </Styled.SpacedRow>
      <Styled.Footer>
        <Row>
          <Styled.Name>{props.profile.name}</Styled.Name>
          <Styled.Description>{props.description}</Styled.Description>
        </Row>
        <Styled.PastTime>{props.pastTime}</Styled.PastTime>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Post;
