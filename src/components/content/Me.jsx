import { Container, Nav, Navbar, Row } from 'react-bootstrap'
import logo from '/Z-removebg-svg.svg'
import { Link, Outlet } from 'react-router-dom'

const Me = () => {
    return <div> 
        { /*
        <img src={logo} alt="zeon1's logo" width='200rem' height='200rem' />
        <p className='image-description'>
            <a  target='_blank' href='https://fontsrepo.com/cyberpunk-2077-free-font/'>
                font
            </a>
        </p>
        */}
        
        <p>
            My name is Jimmy and I was born and raised in Hong Kong.
            I am currently a college student majoring in Computer Science. 
            "Zeon1" is the <a target='_blank' href='https://en.wikipedia.org/wiki/Jyutping'>jyutping</a> of my Chinese name. 
            This website is my very first project in my career, developed using React. 
            I will be linking to my latest projects below in the future.         
        </p>


        <div className='nav'>
            <Navbar>
                <Nav>
                    <Nav.Link as={Link} to='/' ><label><span className='navLabel'>Projects</span></label></Nav.Link>
                    <Nav.Link as={Link} to='More' ><label><span className='navLabel'>More</span></label></Nav.Link>
                </Nav>
            </Navbar>
        </div>

        <Outlet />
      
    </div>
}

export default Me
