const TicketKaufen = () => {
	return (
		<section
			className='relative desktop:pb-[156px] md:pb-[0px] md:pt-[116px] pb-[60px] font-inter  pt-[80px]'
			style={{
				backgroundImage: `url("./img/ticketBuy.svg")`,
			}}>
			<img
				className='desktop:inline h-[100%]  hidden absolute  top-0 right-[20vw]'
				src='./img/heroBuy.svg'
				alt=''
			/>
			<div className=' relative wide:mx-auto wide:w-[1700px] md:mx-[40px] mx-[15px]'>
				<main className='wide:ml-[40px] desktop:flex'>
					<div>
						<h2 className='desktop:text-[90px] md:font-light md:leading-none md:text-res leading-[39px] text-white text-[37px]'>
							Quo Vadis? <br /> Eine Geselschaft <br /> im Umbruch
						</h2>
						<button className='lg:mb-[57px] lg:mt-[32px] md:mb-[56px] md:mt-[17px] my-[30px] leading-[16px] uppercase font-bold text-sm rounded-[100px] py-[22px] px-[27px] text-buttonTextColor bg-white'>
							Ticket Kaufen
						</button>
						<article className='desktop:w-full desktop:flex hidden desktop:flex-row flex flex-col lg:w-[400px]'>
							<p className='desktop:h-[350px] desktop:w-2/5 desktop:mr-[76px] mt-[30px] leading-[23px] text-white font-medium'>
								In keiner Phase der Geschichte hat es einen vergleichbaren
								Innovationsschub gegeben wie in unserer Zeit. So werden wir mit
								dem Aufkommen von künstlicher Intelligenz konfrontiert.
								Innovationen werden dabei viele Bereiche unseres Lebens
								fundamental verändern, von der Industrie 4.0 über autonome
								Maschinen bis hin zum Einsatz intelligenter Algorithmen in der
								Medizin oder einer erheblichen Veränderung der Medienlandschaft.
							</p>

							<p className='desktop:mt-32 desktop:w-1/3 mt-[30px] leading-[23px] text-white font-medium'>
								Während häufig über mögliche zukünftige Szenarien debattiert
								wird, so zum Beispiel über die Zukunft der Arbeit, ist der Weg,
								der in diese Zukunft führen soll, allerdings noch völlig offen.
								Gerade in der Gestaltung dieser Scharnierphase, zwischen Altem
								und Neuem, liegt die besondere gesellschaftliche
								Herausforderung.
							</p>
						</article>
					</div>
					<img
						className='desktop:inline  md:mr-[57px] hidden'
						src='./img/heroWide.svg'
						alt=''
					/>
				</main>
				<div className='desktop:hidden md:flex'>
					<img className='md:hidden' src='./img/heroSvg.svg' alt='' />
					<img
						className='md:inline md:mr-[57px] hidden'
						src='./img/buyHero.svg'
						alt=''
					/>
					<article className='desktop:w-1/2 desktop:flex-row flex flex-col lg:w-[400px]'>
						<p className=' mt-[30px] leading-[23px] text-white font-medium'>
							In keiner Phase der Geschichte hat es einen vergleichbaren
							Innovationsschub gegeben wie in unserer Zeit. So werden wir mit
							dem Aufkommen von künstlicher Intelligenz konfrontiert.
							Innovationen werden dabei viele Bereiche unseres Lebens
							fundamental verändern, von der Industrie 4.0 über autonome
							Maschinen bis hin zum Einsatz intelligenter Algorithmen in der
							Medizin oder einer erheblichen Veränderung der Medienlandschaft.
						</p>

						<p className=' mt-[30px] leading-[23px] text-white font-medium'>
							Während häufig über mögliche zukünftige Szenarien debattiert wird,
							so zum Beispiel über die Zukunft der Arbeit, ist der Weg, der in
							diese Zukunft führen soll, allerdings noch völlig offen. Gerade in
							der Gestaltung dieser Scharnierphase, zwischen Altem und Neuem,
							liegt die besondere gesellschaftliche Herausforderung.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default TicketKaufen;
