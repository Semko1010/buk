const Sponsors = () => {
	return (
		<section
			style={{
				backgroundImage: `url("./img/last.svg")`,
			}}
			className='pt-[64px] font-inter'>
			<h2 className='ml-[15px] w-60 text-[37px] uppercase leading-[39px] text-headingColor'>
				Impressionen aus den vergangenen Jahren
			</h2>
			<p className='mx-[15px] mt-[30px] text-fontColorPrimary leading-[23px] font-medium'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
				in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
			<div>
				<h2 className='border-b pb-[18px]  text-[25px] leading-[27px] text-fontColorPrimary mt-20 mx-[15px]'>
					Gold Sponsoren
				</h2>
				<div className='ml-[15px]'>
					<img className='mt-10' src='./img/IHK.svg' alt='' />
					<img className='mt-[63px]' src='./img/schmersal.svg' alt='' />
					<img className='mt-[63px]' src='./img/mercedes.svg' alt='' />
					<img className='mt-[63px]' src='./img/sparkasse.svg' alt='' />
				</div>
			</div>
			<div className='mt-[100px]'>
				<h2 className='border-b pb-[18px]  text-[25px] leading-[27px] text-fontColorPrimary  mx-[15px]'>
					Silber Sponsoren
				</h2>
				<div className='ml-[15px]'>
					<img className='mt-10' src='./img/rinke.svg' alt='' />
					<img className='mt-10' src='./img/shetani.svg' alt='' />
					<img className='mt-10' src='./img/wsw.svg' alt='' />
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
