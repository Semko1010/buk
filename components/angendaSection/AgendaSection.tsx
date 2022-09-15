const AgendaSection = () => {
	return (
		<section
			style={{
				backgroundImage: `url("./img/backAgenda.svg")`,
			}}
			className=' font-inter '>
			<div className=''>
				<h2 className='ml-[15px] mt-20 pb-[49px] leading-[39px] uppercase text-headingColor text-[37px]'>
					So sieht unsere Agenda aus
				</h2>
			</div>
			<div className='border-t border-[#DFDFDF] pt-5 pb-10 flex flex-col bg-agendaPrimary'>
				<p className='ml-[15px]'>17:00 Uhr</p>
				<p className='ml-[15px] font-semibold'>Einlass</p>
			</div>
			<div className='border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
				<p className='ml-[15px]'>17:30 Uhr</p>
				<p className='ml-[15px] font-semibold'>Eröffnungsreden und Grußworte</p>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Heiko Mustermann</h3>
					<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
			</div>

			<div className='border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
				<p className='ml-[15px]'>18:00 Uhr</p>
				<p className='ml-[15px] font-semibold'>Vortrag</p>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Heiko Mustermann</h3>
					<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
			</div>
			<div className='border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
				<p className='ml-[15px]'>19:00 Uhr</p>
				<p className='ml-[15px] font-semibold'>Interview</p>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Heiko Mustermann</h3>
					<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
			</div>
			<div className='border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
				<p className='ml-[15px]'>19:30 Uhr</p>
				<p className='ml-[15px] font-semibold'>Interview</p>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Heiko Mustermann</h3>
					<p className='font-light'>Vorstandsvorsitzender Siemens AG</p>
				</div>
				<div className='border-t border-[#DFDFDF] pt-[18px] mt-10 mx-[15px]'>
					<h3 className='font-medium'>Sara Musterfrau</h3>
					<p className='font-light'>Vorstandsvorsitzende Siemens AG</p>
				</div>
			</div>
			<div className='border-t  border-[#DFDFDF] pt-5 pb-10 mt-[60px] flex flex-col bg-agendaPrimary '>
				<p className='ml-[15px]'>19:40 Uhr</p>
				<p className='ml-[15px] font-semibold'>
					Ausklang und Gedankenaustausch
				</p>
			</div>
		</section>
	);
};

export default AgendaSection;
