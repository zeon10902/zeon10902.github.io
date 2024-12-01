import { Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Me = () => {
    return <div> 
        
        <p>
            My name is Jimmy and I was born and raised in Hong Kong.
            I am currently a college student majoring in Information Engineering. 
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
