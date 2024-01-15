/* eslint-disable react/prop-types */
import { useCallback } from 'react';

import styles from './Card.module.scss';
import Arrow from '../../assets/Arrow.png';
import instructorName from '../../assets/instructor-name.svg';

const Card = ({
	title,
	price,
	priceWithDiscount,
	instructorImg,
	backgroundImage,
	backgroundText,
}) => {
	const discountPercent = useCallback(() => {
		return ((price - priceWithDiscount) / price) * 100;
	}, [price, priceWithDiscount]);

	return (
		<div className={styles.Card}>
			<h1 className={styles['Card-title']}>
				{title.split(':')[0]}: <span>{title.split(':')[1]}</span>
			</h1>
			<div className={styles['Card-footer']}>
				<img
					className={styles['Card-img']}
					src={instructorImg}
					alt='Teacher image'
				/>
				<a href=''>
					<p>Подробнее</p>
					<img src={Arrow} alt='Arrow' />
				</a>
			</div>
			<div className={styles.priceContainer}>
				<div className={styles.discountPriceContainer}>
					<p className={styles.priceWithDiscount}>{priceWithDiscount}₽</p>
					<p className={styles.discount}>{discountPercent()}%</p>
				</div>

				<p className={styles.price}>{price}₽</p>
			</div>
			<img
				src={backgroundImage}
				className={styles[`background-${backgroundText}`]}
				alt={backgroundText}
			/>
			<img src={instructorName} className={styles.instructorName} alt='' />
		</div>
	);
};

export default Card;
