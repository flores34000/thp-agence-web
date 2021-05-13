import React from 'react'
import styled from "styled-components";
import LanguageIcon from '@material-ui/icons/Language';
import HttpIcon from '@material-ui/icons/Http';
import BackupIcon from '@material-ui/icons/Backup';
function Home() {
    return (
        <Container>
            <Title>Confiez vos rêves à des experts du Web</Title>
            <Content>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
            </Content>
            <ContainerIcone>
                <LanguageIcon className="icone"/>
                <HttpIcon className="icone"/>
                <BackupIcon className="icone"/>
            </ContainerIcone>
        </Container>
    )
}

export default Home

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
padding:0 2rem;
`

const ContainerIcone = styled.div`
width:55%;
margin-top:8rem;
display:flex;
justify-content:space-between;
    .icone{
        font-size:5rem;
        color:#bb86fc;
    }
`
