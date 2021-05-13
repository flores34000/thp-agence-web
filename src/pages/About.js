import React from 'react'
import styled from "styled-components";
function About() {
    return (
        <Container>
            <Title>En savoir plus</Title>
            <ContentBold>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</ContentBold>
            <Content>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</Content>
        </Container>
    )
}

export default About

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
margin: 2rem 4rem

`
const Title = styled.h1`
padding: 2rem;
font-weight: 900;
font-size:2rem;
color: #cc03fe;
`
const Content = styled.div`
padding:1rem 2rem;
font-weight:500;
  
`
const ContentBold = styled(Content)`
font-weight:900;

`