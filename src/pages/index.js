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

const IndexPage = () => (
  <div>
  <div className="Hero">
        <div className="HeroGroup">
    <h1>Crowdfunding platform for digital term notes.
</h1>
    <p>Sign up for platform updates
</p>
    <p>        </p>
    <Link to="/video">Watch the video</Link>



<Wave />




    </div>
    </div>
<div className="Cards">
<h2>The future of digitalized debt funding starts here.
</h2>
<div className="CardGroup">

<Card 
  title="Secondary market liquidity
"
  text= ""
  image={require('../images/wallpaper2.jpg')}/>
<Card 
  title="Global investor base
"
  text= ""
  image={require('../images/wallpaper2.jpg')}/>
  <Card 
  title="ERC20 compatibility"
  text= ""
  image={require('../images/wallpaper2.jpg')}/>

  </div>
</div>
<Section 

image={require('../images/wallpaper2.jpg')}

 title="Our Platform"
 text="
All deals are underwritten using the Dharma protocol.

On Dinote, you can buy fractional ownership in a companies digitized debt offering.

All debt offerings are issued as ERC20 - compliant digital tradeable assets.

" />



  </div>
)

export default IndexPage
