import Feed from "./containers/Feed";
//import Error from './containers/Error'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Feed />
    </>
  );
}

export default App;
