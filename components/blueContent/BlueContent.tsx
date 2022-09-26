import { useEffect, useState } from "react";

const BlueContent = () => {
	const [kon, SetKon] = useState<number>();
	const [user, userSetKon] = useState<number>();
	const [refer, referSetKon] = useState<number>();

	useEffect(() => {
		SetKon(Math.floor(Math.random() * 25) + 1);
		userSetKon(Math.floor(Math.random() * 3000) + 1000);
		referSetKon(Math.floor(Math.random() * 50) + 1);
	}, []);

	return (
		<main
			className=' md:pt-[92px] pt-20 mt-[50px]'
			style={{
				backgroundImage: `url("./img/back.svg")`,
			}}>
			<main className='wide:mx-auto wide:w-[1700px] md:flex'>
				<section className=' md:ml-[40px] desktop:w-[500px] md:w-1/2 md:flex md:flex-col mx-[15px]'>
					<div className=''>
						<h2 className='font-bold text-white'>Der Kongress</h2>
						<p className='mt-5 text-white'>
							Der Bergische Unternehmerkongress zeichnet sich dadurch aus, dass
							die Wirtschaftsjunioren Wuppertal jedes Jahr Unternehmer:innen,
							Führungskräfte und Multiplikator:innen aus dem Bergischen Land
							einladen um über gesellschaftspolitische Themen mit Experten zu
							diskutieren. <br />
							<br />
							In den vergangenen Jahren haben uns viele namenhafte
							Persönlichkeiten aus Wirtschaft, Politik und Gesellschaft
							inspiriert.
						</p>
					</div>

					<div className='mt-[60px]'>
						<h2 className='font-bold text-white'>Die Wirtschaftsjunioren</h2>
						<p className='mt-5 text-white'>
							Die Wirtschaftsjunioren Wuppertal sind das aktive Netzwerk der
							jungen Wirtschaft in der Schwebebahnstadt Wuppertal.
							<br />
							<br />
							In unserem Verein engagieren sich über 90 Unternehmer:innen und
							Führungskräfte, die aus allen Bereichen der regionalen Wirtschaft
							stammen.
							<br />
							<br />
							Sie sind Teil des mit rund 10.000 Mitglieder bundesweit größten
							Verbandes junger Unternehmer:innen und Führungskräfte in
							Deutschland.
						</p>
					</div>
				</section>
				<div className='desktop:w-[500px] md:mt-[100px] md:mr-[40px] md:ml-[90px] md:w-1/2 mx-[15px] mt-[60px]'>
					<h2 className='font-bold text-white'>DIE LOCATION</h2>
					<p className='mt-5 text-white'>
						Der Sparkassenturm am Islandufer ist allen Wuppertalerinnen und
						Wuppertalern wohl bekannt. Aber nur wenige wissen, dass er bereits
						kurze Zeit nach seinem Bezug im Jahr 1973 zu klein war. Denn die
						Zahl der Sparkassenmitarbeiter hat sich in den 70er und 80er Jahren
						auf Grund der sehr erfolgreichen Entwicklung deutlich erhöht. Und so
						mussten damals etliche Fachabteilungen auf Mietobjekte an anderen
						Standorten ausweichen, um ausreichend Platz zu haben.
					</p>

					<p className='mt-5 text-white'>
						So ist vor fast 30 Jahren die Idee zum Bau der beiden Gebäude am
						Johannisberg entstanden, um alle Fachabteilungen wieder an einem
						Standort zu bündeln. Angepasst an die Form der angrenzenden Straßen
						sind so die Pläne für das Riegelgebäude entlang der Bahnhofstraße
						und das Sichelgebäude entlang der Südstraße entstanden. Erst im
						Laufe der Detailplanung kam dann die Idee auf, das Gelände zwischen
						den beiden Gebäuden durch ein Glasdach zu verbinden. So ist die
						Glashalle Johannisberg entstanden.
					</p>

					<p className='mt-5 text-white'>
						Heute erfreut sich die Halle bei Kunden wie Mitarbeitenden großer
						Beliebtheit, denn neben den zahlreichen Veranstaltungen, die dort
						durchgeführt werden, ist dort auch die Kantine untergebracht. Beim
						Bergischen Unternehmerkongress nutzen wir beide Möglichkeiten. Die
						eigentliche Glashalle zur Durchführung des Kongresses und die
						Kantine, um unseren Gästen in der Pause Getränke und Speisen
						anbieten zu können.
					</p>
				</div>
			</main>
			<section className='wide:mx-auto wide:w-[1700px] md:mt-[139px] md:flex md:items-baseline md:ml-[40px] pb-[70px] ml-[15px] mt-[70px]'>
				<div className='wide:ml-[40px] wide:mr-[100px] md:mr-[50px] md:items-baseline md:flex-row flex flex-col'>
					<h2 className='wide:text-[120px] lg:text-res md:mr-4 md:text-res2 text-[100px] leading-[121px]  text-white'>
						{kon}
					</h2>
					<p className='uppercase font-semi-bold text-white'>Kongresse</p>
				</div>
				<div className='wide:mr-[100px] md:mr-[50px] md:items-baseline md:flex-row flex flex-col mt-5'>
					<h2 className='wide:text-[120px] lg:text-res md:mr-4 leading-[121px] md:text-res2 text-[100px] text-white'>
						{user}
					</h2>
					<p className='uppercase font-semi-bold text-white'>Teilnehmer</p>
				</div>
				<div className='wide:mr-[100px] md:items-baseline md:flex-row flex flex-col mt-5'>
					<h2 className='wide:text-[120px] lg:text-res md:mr-4 leading-[121px] md:text-res2 text-[100px] text-white'>
						{refer}
					</h2>
					<p className='uppercase font-semi-bold text-white'>Referenten</p>
				</div>
			</section>
		</main>
	);
};

export default BlueContent;
