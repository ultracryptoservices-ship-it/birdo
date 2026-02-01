// >> Modules
import styles from './nav.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

import logo from '@/public/logo.png';

// >> Script
export default function Nav(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside} data-aos="fade-down">
				<div className={styles.left} data-aos="fade-right">
					<div className={styles.logo}>
						<Image
							src={logo}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.menu}>
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
				<div className={styles.right} data-aos="fade-left">
					<Button
						className={`${design.button_brown} ${styles.btn}`}
						href="https://google.com"
						target="_blank"
						disableRipple
					>
						<Typography>Buy Tokens</Typography>
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
			</div>
		</div>
	);
}
