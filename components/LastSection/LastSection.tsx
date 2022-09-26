const LastSection = () => {
	return (
		<section
			style={{
				backgroundImage: `url("./img/last.svg")`,
			}}
			className='wide:pt-[170px] relative z-50 pt-20 font-inter'>
			<main className='wide:mx-auto wide:w-[1700px]'>
				<h2 className='md:hidden md:font-light font-normal md:leading-none md:text-res ml-[15px]  text-[37px] uppercase leading-[39px] text-headingColor'>
					Impressionen <br /> aus den <br /> vergangenen <br />
					Jahren
				</h2>
				<h2 className=' wide:text-[90px] lg:text-[70px] md:block md:font-light md:leading-none md:text-res ml-[40px]  text-[37px] uppercase leading-[39px] text-headingColor hidden'>
					Impressionen aus <br /> den vergangenen <br />
					Jahren
				</h2>
				<div className='md:hidden'>
					<img className='w-full ' src='./img/lastSectionImage2.svg' alt='' />
					<img
						className='w-full mt-[45px]'
						src='./img/lastSectionImage.svg'
						alt=''
					/>
				</div>
				<img
					className='md:inline hidden w-full mt-[45px]'
					src='./img/lastSectionIpad.svg'
					alt=''
				/>
			</main>
		</section>
	);
};

export default LastSection;
