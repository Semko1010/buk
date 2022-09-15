import { useState } from "react";

const Nav = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const showMenuNav = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<nav className='md:px-8 md:pt-[69px] md:px-10 relative font-inter px-4 flex items-center justify-between pt-12 pb-[27.5px] w-full border-b border-grey'>
				<div className='md:flex md:items-center'>
					<h1 className='text-fontColorPrimary font-semibold'>Buk 18</h1>
					<ul className=' md:flex md:items-center md:ml-10 ml-8 hidden'>
						<li className='cursor-pointer '>Agenda</li>
						<li className='cursor-pointer md:ml-10 ml-8'>Thema</li>
						<li className='cursor-pointer md:ml-10 ml-8'>Redner:innen</li>
					</ul>
				</div>

				<ul
					className={`${
						showMenu
							? "w-screen opacity-100 text-fontColorPrimary"
							: "text-fontColorPrimary w-0 opacity-0"
					} lg:h-auto lg:hidden lg:pt-0  lg:opacity-100 lg:flex lg:items-center lg:border-none lg:static text-sm duration-700   h-screen  fixed right-0 top-20 uppercase pl-[15px] pt-12 bg-white`}>
					<li className='lg:mt-0 mt-4 cursor-pointer'>Agenda</li>
					<li className='lg:mt-0 mt-[39px] cursor-pointer'>Thema</li>
					<li className='lg:mt-0 mt-[39px] cursor-pointer'>Redner:innen</li>
					<li className='lg:mt-0 mt-[39px] cursor-pointer'>Kontakt</li>
					<li className='w-80 lg:mt-0 mt-[39px] cursor-pointer'>
						Covid 19 - Infos
					</li>
				</ul>
				<div className='flex items-center'>
					<div className='md:flex md:items-center'>
						<p className='md:inline-block text-sm d uppercase md:mr-10 mr-8 hidden'>
							Kontakt
						</p>
						<p className='md:mr-0 mr-14 text-fontColorPrimary text-sm font-semibold uppercase'>
							Ticket kaufen
						</p>
					</div>

					<div className='md:hidden  right-0' onClick={showMenuNav}>
						<div
							className={`${
								showMenu
									? "duration-300 absolute rotate-45 bg-black h-0.5 w-6"
									: " absolute duration-300 bg-black h-0.5 w-6 "
							}`}></div>
						<div
							className={`${
								showMenu
									? "duration-300   -rotate-45 bg-black h-0.5 w-6 "
									: "mt-2 duration-300 bg-black h-0.5 w-6 "
							}`}></div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
