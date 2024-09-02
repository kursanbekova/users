import styled from "styled-components";
import TodoApp from "./components/UI/TodoApp";

function App() {
  return (
    <Wrapper>
      <TodoApp />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
width: 100%;
  margin:  auto;
  background-color: black;
  height: 900px;
  padding: 20px;

`;
