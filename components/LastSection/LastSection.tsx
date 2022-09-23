const LastSection = () => {
	return (
		<section
			style={{
				backgroundImage: `url("./img/last.svg")`,
			}}
			className='pt-20 font-inter'>
			<h2 className='md:hidden md:font-light font-normal md:leading-none md:text-res ml-[15px]  text-[37px] uppercase leading-[39px] text-headingColor'>
				Impressionen <br /> aus den <br /> vergangenen <br />
				Jahren
			</h2>
			<h2 className='md:block md:font-light md:leading-none md:text-res ml-[40px]  text-[37px] uppercase leading-[39px] text-headingColor hidden'>
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
		</section>
	);
};

export default LastSection;
