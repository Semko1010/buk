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
        <h1 className="font-semibold">Buk 18</h1>

        <ul className={`${showMenu ? "w-screen opacity-100" : "w-0 opacity-0"} text-sm duration-700   h-screen border-l fixed right-0 top-20 uppercase pl-4 pt-16`}>
            <li className="mt-4">Agenda</li>
            <li className="mt-4">Thema</li>
            <li className="mt-4">Redner:innen</li>
            <li className="mt-4">Kontakt</li>
            <li className="w-80 mt-4">Covid 19 - Infos</li>
        </ul>
        <div className="flex items-center">
            <p className="mr-14 text-sm font-semibold uppercase">Ticket kaufen</p>
            <div onClick={showMenuNav}>
            
                <div className="bg-black h-0.5 w-6"></div>
                <div className="bg-black h-0.5 w-6 mt-1.5"></div>
            
            </div>

        </div>
        
        
    </nav>
    
</>
)

}

export default Nav