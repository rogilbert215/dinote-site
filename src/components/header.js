import React from 'react'
import Link from 'gatsby-link'
import './Header.css'




class Header extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
  }
}



componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
}


handleScroll = (event) => {
const scrollTop = window.pageYOffset

if (scrollTop > 50) {
  this.setState({ hasScrolled: true })
} else {
  this.setState({ hasScrolled: false })
}
}
  render() {
    return (
      // Move all content between parentheses to here.

<div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
<div className="HeaderGroup">
<Link to="/"><img width="200" src={require('../images/logo-designcode.png')}
/></Link>
<Link to="/courses"></Link>
<Link to="/downloads"></Link>
<Link to="/page-2">About</Link>
<Link to="/buy"><button>Signup</button></Link>
</div>
</div>
    )
  }
}

export default Header
