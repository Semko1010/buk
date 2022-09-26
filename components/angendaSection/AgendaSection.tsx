const AgendaSection = () => {
	return (
		<section
			// style={{
			// 	backgroundImage: `url("./img/backAgenda.svg")`,
			// }}
			className='wide:px-0 bg-backAgenda md:px-[40px] font-inter pb-[90px]'>
			<main className='text-fontColorPrimary wide:mx-auto wide:w-[1700px]'>
				<div className=''>
					<h2 className='wide:ml-[40px] md:ml-[0px] lg:text-[90px] lg:leading-[84px] md:text-[60px] md:leading-[64px] lg:font-light ml-[15px] pt-20 pb-[49px] leading-[39px] uppercase text-headingColor text-[37px]'>
						So sieht unsere <br /> Agenda aus
					</h2>
				</div>

				<div className='wide:ml-[40px] md:ml-[0px] md:pt-0 md:pb-0 md:items-baseline  md:bg-transparent md:flex-row md:mt-[40px] border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
					<p className='md:text-lg md:w-[110px] ml-[15px]'>17:00 Uhr</p>
					<div className='md:pb-[60px] md:pl-[20px] md:pt-[20px] md:justify-between md:ml-[100px] md:h-full md:w-full md:flex md:bg-agendaPrimary'>
						<p className='md:text-lg ml-[15px]  font-bold'>Einlass</p>
					</div>
				</div>
				<div className='wide:ml-[40px] md:ml-[0px] md:pt-0 md:pb-0 md:items-baseline  md:bg-transparent md:flex-row md:mt-[40px] border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
					<p className='md:text-lg md:w-[110px] ml-[15px]'>17:30 Uhr</p>

					<div className='md:pr-4 md:pt-0 md:pb-[60px] md:pl-[20px] md:pt-[20px] md:justify-between md:ml-[100px] md:h-full md:w-full md:flex md:bg-agendaPrimary'>
						<p className='md:text-lg md:mr-4 md:w-1/2 ml-[15px] font-bold'>
							Eröffnungsreden und Grußworte
						</p>
						<div className='md:w-1/2'>
							<div className='md:mx-0 md:mt-0 md:border-none md:pt-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Heiko Mustermann</h3>
								<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
						</div>
					</div>
				</div>

				<div className='wide:ml-[40px] md:ml-[0px] md:pt-0 md:pb-0 md:items-baseline  md:bg-transparent md:flex-row md:mt-[40px] border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
					<p className='md:text-lg md:w-[110px] ml-[15px]'>18:00 Uhr</p>
					<div className='md:pb-[60px] md:pl-[20px] md:pt-[20px] md:justify-between md:ml-[100px] md:h-full md:w-full md:flex md:bg-agendaPrimary'>
						<p className='md:text-lg md:mr-4 md:w-1/2 ml-[15px] font-bold'>
							Vortrag
						</p>
						<div className='md:pr-4 md:w-1/2'>
							<div className='md:mx-0 md:mt-0 md:border-none md:pt-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Heiko Mustermann</h3>
								<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wide:ml-[40px] md:ml-[0px] md:pt-0 md:pb-0 md:items-baseline  md:bg-transparent md:flex-row md:mt-[40px] border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
					<p className='md:text-lg md:w-[110px] ml-[15px]'>19:00 Uhr</p>
					<div className='md:pb-[60px] md:pl-[20px] md:pt-[20px] md:justify-between md:ml-[100px] md:h-full md:w-full md:flex md:bg-agendaPrimary'>
						<p className='md:text-lg md:mr-4 md:w-1/2 ml-[15px] font-bold'>
							Interview
						</p>
						<div className='md:pr-4 md:w-1/2'>
							<div className='md:mx-0 md:mt-0 md:border-none md:pt-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Heiko Mustermann</h3>
								<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wide:ml-[40px] md:ml-[0px] md:pt-0 md:pb-0 md:items-baseline  md:bg-transparent md:flex-row md:mt-[40px] border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
					<p className='md:text-lg md:w-[110px] ml-[15px]'>19:30 Uhr</p>
					<div className='md:pb-[60px] md:pl-[20px] md:pt-[20px] md:justify-between md:ml-[100px] md:h-full md:w-full md:flex md:bg-agendaPrimary'>
						<p className='md:text-lg md:mr-4 md:w-1/2 ml-[15px] font-bold'>
							Verabschiedung
						</p>
						<div className='md:pr-4 md:w-1/2'>
							<div className='md:mx-0 md:mt-0 md:border-none md:pt-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Heiko Mustermann</h3>
								<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
							</div>
							<div className='md:mx-0 border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
								<h3 className='font-medium'>Sara Musterfrau</h3>
								<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wide:ml-[40px] md:ml-[0px] md:pt-0 md:pb-0 md:items-baseline  md:bg-transparent md:flex-row md:mt-[40px] border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
					<p className='md:text-lg md:w-[110px] ml-[15px]'>19:40 Uhr</p>
					<div className='md:pb-[60px] md:pl-[20px] md:pt-[20px] md:justify-between md:ml-[100px] md:h-full md:w-full md:flex md:bg-agendaPrimary'>
						<p className='md:text-lg ml-[15px] font-bold'>Ausklang</p>
					</div>
				</div>
			</main>
		</section>
	);
};

export default AgendaSection;
