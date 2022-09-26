const Sponsors = () => {
	return (
		<section
			style={{
				backgroundImage: `url("./img/last.svg")`,
			}}
			className='pt-[64px] font-inter'>
			<main className='wide:mx-auto wide:w-[1700px]'>
				<h2 className='md:hidden md:font-light md:leading-none md:text-res  ml-[15px] text-[37px] uppercase leading-[39px] text-headingColor'>
					Das Sind unsere Sponsoren
				</h2>
				<div className='text-center w-full'>
					<h2 className='wide:text-[90px] lg:text-[70px] md:inline hidden  md:font-light md:leading-none md:text-res  text-[37px] uppercase leading-[39px] text-headingColor'>
						EIN GROSSER DANK <br /> GILT UNSEREN <br />
						SPONSOREN
					</h2>
				</div>
				<p className='md:w-[500px] md:mx-auto md:mt-[42px] mx-[15px] mt-[30px] text-fontColorPrimary leading-[23px] font-medium'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur.
				</p>
				<div>
					<h2 className='wide:mx-0 md:mx-[40px] border-b pb-[18px]  text-[25px] leading-[27px] text-fontColorPrimary mt-20 mx-[15px]'>
						Gold <br />
						Sponsoren
					</h2>
					<div className='wide:ml-0 md:ml-[40px] md:flex md:flex-wrap ml-[15px]'>
						<img
							className='lg:mr-[116px] md:mr-[70px] mt-10'
							src='./img/IHK.svg'
							alt=''
						/>
						<img
							className='lg:mr-[116px] md:mr-[70px] mt-[63px]'
							src='./img/schmersal.svg'
							alt=''
						/>
						<img
							className='lg:mr-[116px] md:mr-[70px] mt-[63px]'
							src='./img/mercedes.svg'
							alt=''
						/>
						<img className='mt-[63px]' src='./img/sparkasse.svg' alt='' />
					</div>
				</div>
				<div className='mt-[100px]'>
					<h2 className='wide:ml-0 md:ml-[40px] border-b pb-[18px]  text-[25px] leading-[27px] text-fontColorPrimary  mx-[15px]'>
						Silber <br />
						Sponsoren
					</h2>
					<div className='md:mx-[40px] md:flex md:flex-wrap ml-[15px]'>
						<img
							className='lg:mr-[116px] md:mr-[70px] mt-10'
							src='./img/rinke.svg'
							alt=''
						/>
						<img
							className='lg:mr-[116px] md:mr-[70px] mt-10'
							src='./img/shetani.svg'
							alt=''
						/>
						<img className='mt-10' src='./img/wsw.svg' alt='' />
					</div>
				</div>
				<div className='wide:mx-0 md:mx-[40px] mt-[100px]'>
					<h2 className='border-b pb-[18px]  text-[25px] leading-[27px] text-fontColorPrimary  mx-[15px]'>
						Weitere Sponsoren
					</h2>
					<div className='items-center justify-items-center lg:grid-cols-5 md:grid-cols-4 border-b pb-[151px] grid grid-cols-3  gap-[10px] mx-[15px]'>
						<img
							className='md:w-32 text-center mt-10'
							src='./img/davoine.svg'
							alt=''
						/>
						{/* <img
						className='md:inline hidden text-center mt-10'
						src='./img/davoineIpad.svg'
						alt=''
					/> */}
						<img className='md:w-32 mt-10' src='./img/babtec.svg' alt='' />
						{/* <img
						className='md:inline hidden mt-10'
						src='./img/babtecIpad.svg'
						alt=''
					/> */}
						<img className='md:w-32 mt-10 ' src='./img/barmenia.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/büromatic.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/buth.svg' alt='' />
						<img className='md:w-32 mt-10 ' src='./img/cardinal.svg' alt='' />
						<img className='md:w-12 mt-10' src='./img/ede.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/fahnen.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/fom.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/hectas.svg' alt='' />
						<img className='md:w-40 mt-10' src='./img/gg.svg' alt='' />
						<img className='md:w-40 mt-10' src='./img/knauf.svg' alt='' />
						<img className='md:w-20 mt-10' src='./img/lare.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/leon.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/mpf.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/pinetco.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/schönian.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/pohli.svg' alt='' />
						<img className='md:w-24 mt-10' src='./img/Schade.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/slw.svg' alt='' />
						<img className='md:w-16 mt-10 ' src='./img/Logo_Bayer.svg' alt='' />
						<img className='md:w-16 mt-10' src='./img/creme.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/deka.svg' alt='' />
						<img className='md:w-40 mt-10' src='./img/Rheingold.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/fries.svg' alt='' />
						<img className='md:w-40 mt-10' src='./img/wein.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/runkel.svg' alt='' />
						<img className='md:w-32 mt-10' src='./img/knipex.svg' alt='' />
						<img className='md:w-40 mt-10' src='./img/koch.svg' alt='' />
						<img className='md:w-40 mt-10' src='./img/beuthel.svg' alt='' />
						<img className='md:w-24 mt-10' src='./img/netzkern.svg' alt='' />
						<img className='md:w-24 mt-10' src='./img/villa.svg' alt='' />
					</div>
					<div className='md:flex md:pb-[140px] pb-[92px] mt-10 ml-[15px]'>
						<img className='md:mr-[100px] mt-10' src='./img/wz.svg' alt='' />
						<img className='md:mr-[100px] mt-10' src='./img/njuzz.svg' alt='' />
						<img className='md:mr-[100px] mt-10' src='./img/radio.svg' alt='' />
					</div>
				</div>
			</main>
		</section>
	);
};

export default Sponsors;
