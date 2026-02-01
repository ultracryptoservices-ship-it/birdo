// >> Modules
import styles from './about.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

import aboutImg from '@/public/images/aboutImg.png';

// >> Script
export default function About(props) {
	return (
		<div className={styles.section} id="About">
			<div className={styles.inside}>
				<div className={styles.content}>
					<Typography
						variant="h2"
						className={styles.title}
						data-aos="fade-left"
					>
						ABOUT{'  '}
						<span>BIRDO</span>
					</Typography>
					<Typography className={styles.desc} data-aos="fade-left">
						Birdo The Bird is a meme-born bird with a massive ego
						and even bigger dreams. A spiritual cousin of Rato the
						Rat and a rebellious sibling of Pepe The Frog, Birdo
						flies high usually without a plan. He is a symbol of
						freedom, absurdity, and going against the wind. Who says
						a bird can&apos;t become a meme legend?
					</Typography>
					<div className={styles.contentButtons} data-aos="fade-left">
						<Button
							className={`${design.button_brown} ${styles.longBtn}`}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>BUY $BIRDO</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.media} data-aos="fade-right">
					<Image
						src={aboutImg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
		</div>
	);
}
