import * as Styled from "./styled";
import Post from "../../components/dumbs/Post";
import Persa from "../../assets/gato-persa.jpg";
import MaineCoin from "../../assets/Maine-Coon-1.jpg";

function Feed() {
  return (
    <Styled.Container>
      <Post
        profile={{ name: "gato.persa", picture: Persa }}
        alt="Foto de um gato persa laranja. Com as patas apoiadas em um tronco de árvore"
        photo={Persa}
        description="Se alongando ao ar livre!"
        pastTime="12 dias atrás"
      />
      <Post
        profile={{ name: "maine.coin", picture: MaineCoin }}
        photo={MaineCoin}
        alt="Foto de um gato da raça Maine Coon rajado andando na neve"
        description="Dando uma volta para aquecer as patas."
        pastTime="15 dias atrás"
      />
    </Styled.Container>
  );
}

export default Feed;
