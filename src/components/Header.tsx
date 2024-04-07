import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"



const Header = () => {
    return (
        <div className='top-0 h-12 sticky backdrop-blur border-2 w-full flex justify-between items-center px-12 py-8' >
            
            <div className='hover:cursor-pointer' >

                <h1 className='hidden md:flex md:justify-center text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r 
                             from-purple-400 to-sky-600'> 
                        JobX
                </h1>
               

            </div>
            <div>
                <NavLink to={"/sign-up"}>

                <Button variant={"premium"}>
                    Personalized Job Tracker
                </Button>
                </NavLink>


            </div>
        </div>
    )
}

export default Header
