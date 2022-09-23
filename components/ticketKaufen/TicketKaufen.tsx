const TicketKaufen = () => {
	return (
		<section
			className='md:pb-[0px] md:pt-[116px] pb-[60px] font-inter mt-[90px] pt-[80px]'
			style={{
				backgroundImage: `url("./img/ticketBuy.svg")`,
			}}>
			<div className='md:mx-[40px] mx-[15px]'>
				<h2 className='md:font-light md:leading-none md:text-res leading-[39px] text-white text-[37px]'>
					Quo Vadis? <br /> Eine Geselschaft <br /> im Umbruch
				</h2>
				<button className='md:mb-[56px] md:mt-[17px] my-[30px] leading-[16px] uppercase font-bold text-sm rounded-[100px] py-[22px] px-[27px] text-buttonTextColor bg-white'>
					Ticket Kaufen
				</button>
				<div className='md:flex'>
					<img className='md:hidden' src='./img/heroSvg.svg' alt='' />
					<img
						className='md:inline md:mr-[57px] hidden'
						src='./img/buyHero.svg'
						alt=''
					/>
					<p className='mt-[30px] leading-[23px] text-white font-medium'>
						In keiner Phase der Geschichte hat es einen vergleichbaren
						Innovationsschub gegeben wie in unserer Zeit. So werden wir mit dem
						Aufkommen von künstlicher Intelligenz konfrontiert. Innovationen
						werden dabei viele Bereiche unseres Lebens fundamental verändern,
						von der Industrie 4.0 über autonome Maschinen bis hin zum Einsatz
						intelligenter Algorithmen in der Medizin oder einer erheblichen
						Veränderung der Medienlandschaft.
						<br />
						<br />
						Während häufig über mögliche zukünftige Szenarien debattiert wird,
						so zum Beispiel über die Zukunft der Arbeit, ist der Weg, der in
						diese Zukunft führen soll, allerdings noch völlig offen. Gerade in
						der Gestaltung dieser Scharnierphase, zwischen Altem und Neuem,
						liegt die besondere gesellschaftliche Herausforderung.
					</p>
				</div>
			</div>
		</section>
	);
};

export default TicketKaufen;
