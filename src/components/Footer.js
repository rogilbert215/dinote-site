import React from 'react'
import styled from 'styled-components'



let FooterGroup = styled.div`
    background: #FFFFFF;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #121958;
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
    font-size: 24px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    background: rgba(6,26,133, 0.8);
    box-shadow: 0px 10px 20px rgba(33, 17, 180, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`

let LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a {
        color: #121958;
        font-size: 20px;
        font-weight: 500;
        margin: 5px 0;
        transition: 1s;
    }

    a:hover {
        color: black;
    }
`
const Copyright = styled.div`
    color: #486791
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`


const Footer = ({data}) => (

   
      <FooterGroup>
    <Text>Join Us </Text>
    <Button>Telegram</Button>
    <LinkGroup>

       {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      
      ))} 


    </LinkGroup>
</FooterGroup>

 



)

export default Footer
