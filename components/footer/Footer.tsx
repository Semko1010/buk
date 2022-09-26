const Footer = () => {
	return (
		<footer
			style={{
				backgroundImage: `url("./img/back.svg")`,
			}}
			className='lg:pt-[90px] md:pt-[60px] pt-20 font-inter'>
			<main className='lg:pb-[90px] md:pb-[60px] pb-20 md:flex md:items-baseline'>
				<div className='md:ml-[40px] ml-[15px]'>
					<h3 className='text-white font-semibold leading-[40px]'>
						Eine Veranstaltung der{" "}
					</h3>
					<img className='mt-[23px]' src='./img/wupertal.svg' alt='' />
				</div>
				<section className='md:mt-0 lg:ml-[100px] md:ml-[60px] md:text-sm md:ml-[100px] md:flex ml-[15px] mt-[50px] uppercase'>
					<ul>
						<li className='leading-[40px] font-semibold text-white'>Website</li>
						<li className='w-fit cursor-pointer mt-2 text-white'>Home</li>
						<li className='w-fit cursor-pointer mt-4 text-white'>Agenda</li>
						<li className='w-fit cursor-pointer mt-4 text-white'>Thema</li>

						<li className='w-fit cursor-pointer mt-4 text-white'>
							Redner:innen
						</li>

						<li className='w-fit cursor-pointer mt-4 text-white'>Location</li>
					</ul>
					<ul className='lg:ml-[100px] md:ml-[60px] md:mt-0 mt-[50px]'>
						<li className='leading-[40px] font-semibold text-white'>
							Rechtliches
						</li>
						<li className='w-fit cursor-pointer mt-2  text-white'>Impressum</li>
						<li className='w-fit cursor-pointer mt-4  text-white'>
							Datenschutz
						</li>
						<li className='w-fit cursor-pointer mt-4  text-white'>Kontakt</li>
					</ul>
					<ul className='lg:ml-[100px] md:ml-[60px] md:mt-0 mt-[50px]'>
						<li className='md:leading-[38px] leading-[40px] font-semibold text-white'>
							Folge uns im netz
						</li>

						<li className='w-fit cursor-pointer mt-4 mt-2 flex text-white'>
							<img className='mr-[25px] ml-1' src='./img/facebook.svg' alt='' />{" "}
							Facebook
						</li>
						<li className='flex w-fit cursor-pointer mt-4 text-white'>
							<img className='mr-[19px]' src='./img/instagram.svg' alt='' />{" "}
							Instagramm
						</li>
					</ul>
				</section>
			</main>
			<div className='pl-[15px] pt-[30px]  m-0 pb-[44px] bg-white'>
				<img src='./img/entwicklung.svg' alt='' />
			</div>
		</footer>
	);
};

export default Footer;
