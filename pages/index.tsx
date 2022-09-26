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

			<section className='desktop:justify-between wide:mx-auto wide:w-[1700px] md:flex font-inter mt-[82px]'>
				<main className='desktop:w-1/2'>
					<section className='md:flex md:flex-row flex-col  '>
						<img
							className='wide:hidden desktop:h-[150%] absolute -z-10 top-10  right-0'
							src='./img/circle.svg'
							alt=''
						/>
						<img
							className='wide:inline h-[150%] hidden absolute -z-10 wide:top-0 right-[20vw]'
							src='./img/circle.svg'
							alt=''
						/>
						<div className='desktop:mt-20 md:pl-[40px] md:mr-[56px] md:w-fit flex flex-col items-center justify-center pl-[15px] pr-[15px]'>
							<h2 className='wide:w-[900px] wide:leading-[111px] wide:text-[120px] md:leading-none md:text-res  tracking-tighter text-headingColor text-3xl font-light leading-[47px]'>
								18.BERGISCHER UNTERNEHMER-KONGRESS2022
							</h2>
							<p className='md:text-[18px] md:my-[27px] md:w-96 md:leading-[25px] text-fontColorPrimary mr-auto my-6 font-light'>
								Am 03. Mai 2022. MIT DEM THEMA: QUO VADIS? EINE Gesellschaft IM
								UMBRUCH
							</p>
							<button className='mr-auto bg-buttonPrimary py-3 px-4 text-white rounded-3xl'>
								Ticket Kaufen
							</button>
						</div>
						<div>
							<img
								className='md:hidden w-full mt-[45px]'
								src='./img/hero1.png'
								alt=''
							/>
							<img
								className='desktop:hidden md:inline hidden'
								src='./img/heroIpad.webp'
								alt=''
							/>
							{/* <img
						className='w-[30%] top-30 right-22 absolute desktop:inline  hidden'
						src='./img/desktopHero.svg'
						alt=''
					/> */}
						</div>
					</section>
					<div className='desktop:mr-12 desktop:w-1/2 relative   md:flex hidden flex items-baseline mt-[211px] ml-[40px]'>
						<h2 className='wide:ml-[40px] wide:text-[120px]  text-res text-fontColorSecondary leading-[84px] mr-[71px]'>
							47
							<span className='ml-[8px] uppercase text-sm text-fontColorPrimary'>
								Tage
							</span>
						</h2>
						<h2 className='wide:text-[120px] text-res text-fontColorSecondary leading-[84px] mr-[71px]'>
							21
							<span className='ml-[13px] uppercase text-sm text-fontColorPrimary'>
								Stunden
							</span>
						</h2>
						<h2 className='wide:text-[120px] text-res text-fontColorSecondary leading-[84px]'>
							13
							<span className='mr-4 ml-[24px] uppercase text-sm text-fontColorPrimary'>
								Minuten
							</span>
						</h2>

						{/* <p className='uppercase ml-auto mr-[40px] text-sm leading-[19px] text-fontColorPrimary border-b border-black'>
					covid 19 - Infos
				</p> */}
					</div>
				</main>
				<img
					className=' w-[45%] desktop:inline  hidden'
					src='./img/desktopHero.svg'
					alt=''
				/>
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
