import { useParams } from "react-router-dom";
import { workItems } from "../datas/WorksData";
import styled from "styled-components";

function CardWork() {
  console.log(workItems);
  let params = useParams();
  console.log(params.title);

  return (
    <Container>
      {workItems.map(
        (e, index) =>
          e.title === params.title && (
            <div key={index}>
              <img src={e.url} alt="" />
              <h1 className="color-title-card">{e.title}</h1>
              <h2>{e.titleBis}</h2>
              <p>{e.text}</p>
            </div>
          )
      )}
    </Container>
  );
}

export default CardWork;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 8rem;
  justify-content: center;
  text-align: center;
    img{
      width: 70%;
    }
`;
