import Card from '../../components/Card/Card';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Aside from '../Aside/Aside';
import styles from './Main.module.scss';
import AZ from '../../assets/A-Z.svg';
import instructor from '../../assets/instructor.png';
import instructor2 from '../../assets/instructor2.png';
import AE from '../../assets/ae.svg';
import filterIcon from '../../assets/filter-icon.png';
import starIcon from '../../assets/star.svg';
import elipseIcon from '../../assets/ellipse.svg';
import linesIcon from '../../assets/lines.svg';

const Main = () => {
	return (
		<div className='container'>
			<main className={styles.main}>
				<img
					src={starIcon}
					className={`${styles.backgroundImage} ${styles.starIcon}`}
					alt='Star'
				/>
				<img
					src={elipseIcon}
					className={`${styles.backgroundImage} ${styles.elipseIcon}`}
					alt='Elipse'
				/>
				<img
					src={linesIcon}
					className={`${styles.backgroundImage} ${styles.linesIcon}`}
					alt='Lines'
				/>
				<div className={styles['main-header']}>
					<div className={styles['main-header-buttons']}>
						<Dropdown
							className={styles.dropdown}
							items={['Язык', 'Язык 2', 'Язык 3']}
							selectedItem={'Язык'}
						/>
						<button className={styles.filterBtn}>
							<img src={filterIcon} alt='Filter icon' />
						</button>
					</div>
					<div className={styles.title}>
						<h1>Курсы</h1>
						<h1>
							<span>английского языка</span>
						</h1>
					</div>
				</div>
				<div className={styles['main-container']}>
					<Aside />
					<div className={styles['main-inner']}>
						<Card
							title='Английский шаг за шагом: Базовый уровень'
							price={6000}
							priceWithDiscount={2940}
							instructorImg={instructor}
							backgroundImage={AZ}
							backgroundText={'AZ'}
						/>
						<Card
							title='Английский шаг за шагом: Базовый уровень'
							price={6000}
							priceWithDiscount={2940}
							instructorImg={instructor2}
							backgroundImage={AE}
							backgroundText={'AE'}
						/>
						<Card
							title='Английский шаг за шагом: Базовый уровень'
							price={6000}
							priceWithDiscount={2940}
							instructorImg={instructor}
							backgroundImage={AZ}
							backgroundText={'AZ'}
						/>
						<Card
							title='Английский шаг за шагом: Базовый уровень'
							price={6000}
							priceWithDiscount={2940}
							instructorImg={instructor2}
							backgroundImage={AE}
							backgroundText={'AE'}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Main;
