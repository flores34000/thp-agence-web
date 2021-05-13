// import { CardGiftcardSharp } from '@material-ui/icons';
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { workItems } from "../datas/WorksData";
function Works() {
  return (
    <Container>
      <Title>Nos Projets</Title>
      <Content>
        Au fil des années, nous avons pu accompagner les meilleurs.
        <br />
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </Content>
      <CardContainer>
        {workItems.map((item, index) => (
          <Card className="card-border" key={index}>
            <img src={item.url} alt="" />

            <h2>{item.title}</h2>
            <h3>{item.titleBis}</h3>

            <Link
              to={"works/" + item.title}
              className="btn-primary"
              key={item.id}
            >
              Voir
            </Link>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Works;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 4rem;
`;
const Title = styled.h1`
  padding: 2rem;
  font-weight: 900;
  font-size: 2rem;
  color: #cc03fe;
`;
const Content = styled.div`
  padding: 1rem 2rem;
  font-weight: 500;
`;
const CardContainer = styled.div`
  width: 100%;
  /* display:grid;
grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  /* border-bottom: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content:space-between; */
  margin: 20px 15px;
  padding-bottom: 10px;
  max-width: 12rem;
  position: relative;
  height: 380px;
  img {
    width: 100%;
  }
  h2 {
    font-size: 1.5rem;
    color: #cc03fe;
  }
  h3 {
    padding: 0 5%;
  }
  .btn-primary {
    position: absolute;
    bottom: 2%;
  }
`;
