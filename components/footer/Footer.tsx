const Footer = () => {
	return (
		<footer
			style={{
				backgroundImage: `url("./img/back.svg")`,
			}}
			className='pt-20 font-inter'>
			<div className='ml-[15px]'>
				<h3 className='text-white font-semibold leading-[40px]'>
					Eine Veranstaltung der{" "}
				</h3>
				<img className='mt-[23px]' src='./img/wupertal.svg' alt='' />
			</div>
			<section className='ml-[15px] mt-[50px] uppercase'>
				<ul>
					<li className='leading-[40px] font-semibold text-white'>Website</li>
					<li className='mt-2 leading-[48px] text-white'>Home</li>
					<li className='leading-[48px] text-white'>Agenda</li>
					<li className='leading-[48px] text-white'>Thema</li>
					<li className='leading-[48px] text-white'>Redner:innen</li>
					<li className='leading-[48px] text-white'>Location</li>
				</ul>
				<ul className='mt-[50px]'>
					<li className='leading-[40px] font-semibold text-white'>
						Rechtliches
					</li>
					<li className='mt-2 leading-[48px] text-white'>Impressum</li>
					<li className='leading-[48px] text-white'>Datenschutz</li>
					<li className='leading-[48px] text-white'>Kontakt</li>
				</ul>
				<ul className='mt-[50px]'>
					<li className='leading-[40px] font-semibold text-white'>
						Folge uns im netz
					</li>

					<li className='mt-2 flex leading-[48px] text-white'>
						<img className='mr-[25px] ml-1' src='./img/facebook.svg' alt='' />{" "}
						Facebook
					</li>
					<li className='flex leading-[48px] text-white'>
						<img className='mr-[19px]' src='./img/instagram.svg' alt='' />{" "}
						Instagramm
					</li>
				</ul>
			</section>
			<div className='pl-[15px] pt-[30px]  m-0 pb-[44px] bg-white'>
				<img src='./img/entwicklung.svg' alt='' />
			</div>
		</footer>
	);
};

export default Footer;
