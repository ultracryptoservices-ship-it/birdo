// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';

// >> Components
import Nav from './nav/nav';
import Hero from './hero/hero';
import About from './about/about';
import Tokenomics from './tokenomics/tokenomics';
import Roadmap from './roadmap/roadmap';
import Partners from './partners/partners';
import Footer from './footer/footer';

// >> Script
export default function Home() {
	return (
		<div className={styles.page}>
			<Nav />
			<Hero />
			<About />
			<Tokenomics />
			<Roadmap />
			<Partners />
			<Footer />
		</div>
	);
}
