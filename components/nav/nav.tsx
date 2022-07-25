import { useState } from "react"

const Nav = () =>{
const [showMenu, setShowMenu] = useState<boolean>(false)

const showMenuNav = () =>{
    console.log("Test");
    
    setShowMenu(!showMenu)
}

return(
<>
    <nav className="relative px-4 flex items-center justify-between pt-12 pb-3 w-full border-b border-grey">
        <div className="flex items-center">
        <h1 className="font-semibold">Buk 18</h1>
        <ul className=" lg:flex lg:items-center ml-12 hidden">
            <li className="lg:mt-0 mt-4 cursor-pointer">Agenda</li>
            <li className="lg:mt-0 mt-8 cursor-pointer ml-12">Thema</li>
            <li className="lg:mt-0 mt-8 cursor-pointer ml-12">Redner:innen</li>  
        </ul>
        </div>
        

        <ul className={`${showMenu ? "w-screen opacity-100" : "w-0 opacity-0"} lg:h-auto lg:hidden lg:pt-0  lg:opacity-100 lg:flex lg:items-center lg:border-none lg:static text-sm duration-700   h-screen border-l fixed right-0 top-20 uppercase pl-4 pt-16`}>
            <li className="lg:mt-0 mt-4 cursor-pointer">Agenda</li>
            <li className="lg:mt-0 mt-8 cursor-pointer">Thema</li>
            <li className="lg:mt-0 mt-8 cursor-pointer">Redner:innen</li>
            <li className="lg:mt-0 mt-8 cursor-pointer">Kontakt</li>
            <li className="w-80 lg:mt-0 mt-8 cursor-pointer">Covid 19 - Infos</li>
        </ul>
        <div className="flex items-center">
            <div className="lg:flex lg:items-center">
            <p className="lg:inline-block text-sm d uppercase mr-12 hidden">Kontakt</p>
            <p className="mr-14 text-sm font-semibold uppercase">Ticket kaufen</p>
            </div>
            
            <div className="lg:hidden" onClick={showMenuNav}>
            
                <div className="bg-black h-0.5 w-6"></div>
                <div className="bg-black h-0.5 w-6 mt-1.5"></div>
            
            </div>

        </div>
        
        
    </nav>
    
</>
)

}

export default Nav