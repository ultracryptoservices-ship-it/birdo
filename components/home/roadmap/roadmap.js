// >> Modules
import styles from './roadmap.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import logo from '@/public/logo.png';
import roadmapLine from '@/public/images/roadmapLine.png';

const faces = 10;
const filledFaces = 4;

// >> Script
export default function Roadmap(props) {
	return (
		<div className={styles.section} id="Roadmap">
			<div className={styles.inside}>
				<Typography
					variant="h2"
					className={styles.title}
					data-aos="zoom-in"
				>
					ROADMAP
				</Typography>
				<div className={styles.content}>
					<div className={styles.oneSide} data-side="left">
						<div
							className={styles.roadmapLine}
							data-aos="fade-right"
						>
							<Image
								src={roadmapLine}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.onePhase} data-aos="fade-right">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: THE ARRIVAL</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• Website Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• Community Bulding
								</Typography>
								<Typography className={styles.onePoint}>
									• Social Media Building
								</Typography>
								<Typography className={styles.onePoint}>
									• Prelaunch Marketing
								</Typography>
								<Typography className={styles.onePoint}>
									• Pump Fun Launch
								</Typography>
							</div>
						</div>
						<div className={styles.onePhase} data-aos="fade-right">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: THE CONQUER</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• Mobile App Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• Community Expand
								</Typography>
								<Typography className={styles.onePoint}>
									• NFT Collection Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• Royalties for NFT Holders
								</Typography>
								<Typography className={styles.onePoint}>
									• BIRDO Ecosystem Expand
								</Typography>
							</div>
						</div>
					</div>
					<div className={styles.faces}>
						{[...Array(faces)].map((_, i) => (
							<div
								key={i}
								className={styles.oneFace}
								data-filled={i + 1 <= filledFaces}
							>
								<Image src={logo} alt="" data-aos="zoom-in" />
							</div>
						))}
					</div>
					<div className={styles.oneSide} data-side="right">
						<div
							className={styles.roadmapLine}
							data-aos="fade-left"
						>
							<Image
								src={roadmapLine}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div className={styles.onePhase} data-aos="fade-left">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: THE ISLAND</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• Raydium $BIRDO Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• CMC/GC Fast Track Apply
								</Typography>
								<Typography className={styles.onePoint}>
									• Staking Launch
								</Typography>
								<Typography className={styles.onePoint}>
									• Creators Collaboration
								</Typography>
								<Typography className={styles.onePoint}>
									• BIRDO DAO
								</Typography>
							</div>
						</div>
						<div className={styles.onePhase} data-aos="fade-left">
							<div className={styles.phaseTitle}>
								<Typography>PHASE: THE MOON</Typography>
							</div>
							<div className={styles.points}>
								<Typography className={styles.onePoint}>
									• Gamified BIRDO Concept
								</Typography>
								<Typography className={styles.onePoint}>
									• CertiK Audit Process
								</Typography>
								<Typography className={styles.onePoint}>
									• Cross-Chain Expand
								</Typography>
								<Typography className={styles.onePoint}>
									• BIRDO NFT Marketplace
								</Typography>
								<Typography className={styles.onePoint}>
									• BIRDO Launchpad
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
