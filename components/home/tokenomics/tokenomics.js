// >> Modules
import styles from './tokenomics.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import logo from '@/public/logo.png';
import tokenomicsBg from '@/public/images/tokenomicsBg.png';
import orange from '@/public/images/orange.png';
import blue from '@/public/images/blue.png';

// >> Script
export default function Tokenomics(props) {
	const [rotation, setRotation] = useState(0);
	const logoRef = useRef(null);

	useEffect(() => {
		function handleMouseMove(e) {
			if (!logoRef.current) return;
			const rect = logoRef.current.getBoundingClientRect();
			const logoX = rect.left + rect.width / 2;
			const logoY = rect.top + rect.height / 2;
			const dx = e.clientX - logoX;
			const dy = e.clientY - logoY;
			const angle = Math.atan2(dy, dx) * (180 / Math.PI);
			setRotation(angle);
		}
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const [hoveredColor, setHoveredColor] = useState(null);

	return (
		<div className={styles.section} id="Tokenomics">
			<div className={styles.inside}>
				<Typography
					variant="h2"
					className={styles.title}
					data-aos="zoom-in"
				>
					TOKENOMICS
				</Typography>
				{/* <div className={styles.center}>
					<div className={styles.lists} data-aos="zoom-in">
						<div
							className={styles.oneList}
							onMouseEnter={() => setHoveredColor('orange')}
							onMouseLeave={() => setHoveredColor(null)}
						>
							<div
								className={styles.listElement}
								data-color="orange"
							>
								<div className={styles.square}></div>
								<Typography>67% PRESALE ON PINKSALE</Typography>
							</div>
						</div>
						<div
							className={styles.oneList}
							onMouseEnter={() => setHoveredColor('blue')}
							onMouseLeave={() => setHoveredColor(null)}
						>
							<div
								className={styles.listElement}
								data-color="blue"
							>
								<div className={styles.square}></div>
								<Typography>33% LIQUIDITY POOL</Typography>
							</div>
						</div>
					</div>
					<div className={styles.circle} data-aos="zoom-in">
						<div
							className={styles.tokenomicsBg}
							data-hovered={hoveredColor ? true : false}
						>
							<Image
								src={tokenomicsBg}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>

						<div
							className={styles.oneColor}
							data-hovered={hoveredColor === 'blue'}
						>
							<Image
								src={blue}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div
							className={styles.oneColor}
							data-hovered={hoveredColor === 'orange'}
						>
							<Image
								src={orange}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
						<div
							className={styles.logo}
							ref={logoRef}
							style={{ transform: `rotate(${rotation}deg)` }}
						>
							<Image
								src={logo}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</div>
					</div>
				</div> */}
				<div className={styles.bottom}>
					<div
						className={styles.oneBox}
						data-color="orange"
						data-aos="zoom-in"
					>
						<Typography className={styles.orangeTitle}>
							Total Supply
						</Typography>
						<Typography className={styles.orangeDesc}>
							1.000.000.000 <span>$BIRDO</span>
						</Typography>
					</div>
					<div
						className={styles.oneBox}
						data-color="orange"
						data-aos="zoom-in"
					>
						<Typography className={styles.orangeTitle}>
							Chain
						</Typography>
						<Typography className={styles.orangeDesc}>
							Solana Network <span></span>
						</Typography>
					</div>
					<div
						className={styles.oneBox}
						data-color="white"
						data-aos="zoom-in"
					>
						<Typography
							className={styles.whiteTitle}
							data-main="true"
						>
							CONTRACT ADDRESS:
						</Typography>
						<Typography className={styles.whiteTitle}>
							Incoming Soon
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}
