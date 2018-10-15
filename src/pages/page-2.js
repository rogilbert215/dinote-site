import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import styled from 'styled-components'





const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SecondPage = () => (
  <div>
  <div className="Hero">
        <div className="HeroGroup">
    <h1>Coming Soon! 
    😎 
</h1>
    <p>

</p>
    <p>    
    
       </p>







    </div>


<Wave />
    </div>





  </div>

)



export default SecondPage
