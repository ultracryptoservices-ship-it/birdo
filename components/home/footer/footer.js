// >> Modules
import styles from './footer.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

import logo from '@/public/logo.png';
import twitterX from '@/public/images/twitterX.svg';
import telegram from '@/public/images/telegram.svg';

// >> Script
export default function Footer(props) {
	return (
		<div className={styles.section} data-aos="fade-up">
			<div className={styles.inside}>
				<div className={styles.top}>
					<div className={styles.topLeft}>
						<Image
							src={logo}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>

						<Typography>
							$BIRDO Wings out. Moonbound.
						</Typography>
					</div>
					<div className={styles.topRight}>
						<Link to="Home" className={styles.link}>
							Home
						</Link>
						<Link to="About" className={styles.link}>
							About
						</Link>
						<Link to="Tokenomics" className={styles.link}>
							Tokenomics
						</Link>
						<Link to="Roadmap" className={styles.link}>
							Roadmap
						</Link>
						<Link to="Partners" className={styles.link}>
							Partners
						</Link>
					</div>
				</div>
				<div className={styles.center}>
					<div className={styles.centerLeft}>
						<Button
							className={`${design.button_brown} ${styles.btn}`}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>BUY $BIRDO</Typography>
						</Button>
						<Button
							className={`${design.button_white} ${styles.btn}`}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>Chart</Typography>
						</Button>
					</div>
					<div className={styles.centerRight}>
						<Button
							className={`${design.button_social} ${styles.socialBtn}`}
							href="https://t.me/Birdo_Bird"
							target="_blank"
							disableRipple
						>
							<span>
								<Image
									src={telegram}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</span>
							<Typography>Join Telegram</Typography>
						</Button>
						<Button
							className={`${design.button_social} ${styles.socialBtn}`}
							href="https://x.com/BirdoBirdSolana"
							target="_blank"
							disableRipple
						>
							<span>
								<Image
									src={twitterX}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</span>
							<Typography>VIEW X.COM</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.bottom}>
					<Typography>
						© 2025 BIRDO THE BIRD — All rights reserved.
					</Typography>
				</div>
			</div>
		</div>
	);
}
