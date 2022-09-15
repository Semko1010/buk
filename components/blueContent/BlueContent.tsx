const BlueContent = () => {
	return (
		<main
			className='pt-20 mt-[50px]'
			style={{
				backgroundImage: `url("./img/back.svg")`,
			}}>
			<div className='w-11/12 mx-auto'>
				<h2 className='font-bold text-white'>Der Kongress</h2>
				<p className='mt-5 text-white'>
					Der Bergische Unternehmerkongress zeichnet sich dadurch aus, dass die
					Wirtschaftsjunioren Wuppertal jedes Jahr Unternehmer:innen,
					Führungskräfte und Multiplikator:innen aus dem Bergischen Land
					einladen um über gesellschaftspolitische Themen mit Experten zu
					diskutieren. <br />
					<br />
					In den vergangenen Jahren haben uns viele namenhafte Persönlichkeiten
					aus Wirtschaft, Politik und Gesellschaft inspiriert.
				</p>
			</div>
			<div className='w-11/12 mx-auto mt-[60px]'>
				<h2 className='font-bold text-white'>Die Wirtschaftsjunioren</h2>
				<p className='mt-5 text-white'>
					Die Wirtschaftsjunioren Wuppertal sind das aktive Netzwerk der jungen
					Wirtschaft in der Schwebebahnstadt Wuppertal.
					<br />
					<br />
					In unserem Verein engagieren sich über 90 Unternehmer:innen und
					Führungskräfte, die aus allen Bereichen der regionalen Wirtschaft
					stammen.
					<br />
					<br />
					Sie sind Teil des mit rund 10.000 Mitglieder bundesweit größten
					Verbandes junger Unternehmer:innen und Führungskräfte in Deutschland.
				</p>
			</div>
			<div className='w-11/12 mx-auto mt-[60px]'>
				<h2 className='font-bold text-white'>DIE LOCATION</h2>
				<p className='mt-5 text-white'>
					Der Sparkassenturm am Islandufer ist allen Wuppertalerinnen und
					Wuppertalern wohl bekannt. Aber nur wenige wissen, dass er bereits
					kurze Zeit nach seinem Bezug im Jahr 1973 zu klein war. Denn die Zahl
					der Sparkassenmitarbeiter hat sich in den 70er und 80er Jahren auf
					Grund der sehr erfolgreichen Entwicklung deutlich erhöht. Und so
					mussten damals etliche Fachabteilungen auf Mietobjekte an anderen
					Standorten ausweichen, um ausreichend Platz zu haben.
				</p>

				<p className='mt-5 text-white'>
					So ist vor fast 30 Jahren die Idee zum Bau der beiden Gebäude am
					Johannisberg entstanden, um alle Fachabteilungen wieder an einem
					Standort zu bündeln. Angepasst an die Form der angrenzenden Straßen
					sind so die Pläne für das Riegelgebäude entlang der Bahnhofstraße und
					das Sichelgebäude entlang der Südstraße entstanden. Erst im Laufe der
					Detailplanung kam dann die Idee auf, das Gelände zwischen den beiden
					Gebäuden durch ein Glasdach zu verbinden. So ist die Glashalle
					Johannisberg entstanden.
				</p>

				<p className='mt-5 text-white'>
					Heute erfreut sich die Halle bei Kunden wie Mitarbeitenden großer
					Beliebtheit, denn neben den zahlreichen Veranstaltungen, die dort
					durchgeführt werden, ist dort auch die Kantine untergebracht. Beim
					Bergischen Unternehmerkongress nutzen wir beide Möglichkeiten. Die
					eigentliche Glashalle zur Durchführung des Kongresses und die Kantine,
					um unseren Gästen in der Pause Getränke und Speisen anbieten zu
					können.
				</p>
			</div>

			<section className='pb-[70px] ml-[15px] mt-[70px]'>
				<div className='flex flex-col'>
					<h2 className='leading-[121px] text-[100px] text-white'>17</h2>
					<p className='uppercase font-semi-bold text-white'>Kongresse</p>
				</div>
				<div className='flex flex-col mt-5'>
					<h2 className='leading-[121px] text-[100px] text-white'>2500</h2>
					<p className='uppercase font-semi-bold text-white'>Teilnehmer</p>
				</div>
				<div className='flex flex-col mt-5'>
					<h2 className='leading-[121px] text-[100px] text-white'>48</h2>
					<p className='uppercase font-semi-bold text-white'>Referenten</p>
				</div>
			</section>
		</main>
	);
};

export default BlueContent;
