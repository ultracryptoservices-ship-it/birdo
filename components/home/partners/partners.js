// >> Modules
import styles from './partners.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import bscscan from '@/public/images/partners/bscscan.png';
import raydium from '@/public/images/partners/raydium.png';
import dexview from '@/public/images/partners/dexview.png';
import pancakeswap from '@/public/images/partners/pancakeswap.png';
import dexscreener from '@/public/images/partners/dexscreener.png';
import dextools from '@/public/images/partners/dextools.png';
import pinksale from '@/public/images/partners/pinksale.png';

const partners = [
	// { name: 'bscscan', link: 'https://bscscan.com', logo: bscscan },
	{ name: 'raydium', link: 'https://raydium.io', logo: raydium },
	{ name: 'dexview', link: 'https://dexview.com', logo: dexview },
	// {
	// 	name: 'pancakeswap',
	// 	link: 'https://pancakeswap.finance',
	// 	logo: pancakeswap,
	// },
	{
		name: 'dexscreener',
		link: 'https://dexscreener.com',
		logo: dexscreener,
	},
	{ name: 'dextools', link: 'https://www.dextools.io', logo: dextools },
	{ name: 'pinksale', link: 'https://pump.fun', logo: pinksale },
];

// >> Script
export default function Partners(props) {
	return (
		<div className={styles.section} id="Partners">
			<div className={styles.inside}>
				<Typography
					variant="h2"
					className={styles.title}
					data-aos="fade-up"
				>
					Partners
				</Typography>
				<div className={styles.content} data-aos="fade-up">
					{partners.map((element, index) => {
						let id = index;
						return (
							<Button
								className={`${
									id % 2 === 0
										? design.button_brown
										: design.button_white
								} ${styles.onePartner}`}
								href={element.link}
								target="_blank"
								disableRipple
								key={index}
							>
								<Image src={element.logo} alt={element.name} />
							</Button>
						);
					})}
				</div>
			</div>
		</div>
	);
}
