import type { NextPage } from "next";
import Nav from "../components/nav/nav";
import BlueContent from "../components/blueContent/BlueContent";
import AgendaSection from "../components/angendaSection/AgendaSection";
import TicketKaufen from "../components/ticketKaufen/TicketKaufen";
import LastSection from "../components/LastSection/LastSection";
import Sponsors from "../components/sponsors/Sponsors";
import Footer from "../components/footer/Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Nav />
			<section className='font-inter mt-[82px]'>
				<div className='flex flex-col items-center justify-center px-4'>
					<h2 className='text-headingColor text-3xl font-light leading-none'>
						18. BERGISCHER UNTERNEHMER- KONGRESS 2022
					</h2>
					<p className='w-72 mr-auto my-6 font-light'>
						Am 03. Mai 2022. MIT DEM THEMA: QUO VADIS? EINE Gesellschaft IM
						UMBRUCH
					</p>
					<button className='mr-auto bg-buttonPrimary py-3 px-4 text-white rounded-3xl'>
						Ticket Kaufen
					</button>
				</div>
				<div>
					<img className='mt-[45px]' src='./img/hero1.png' alt='' />
				</div>
			</section>
			<BlueContent />
			<AgendaSection />
			<TicketKaufen />
			<LastSection />
			<Sponsors />
			<Footer />
		</div>
	);
};

export default Home;
