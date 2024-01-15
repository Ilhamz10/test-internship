import { useState } from 'react';
import DoubleRange from '../../components/UI/Range/DoubleRange';
import styles from './Aside.module.scss';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import Radio from '../../components/UI/Radio/Radio';

const skills = ['Грамматика', 'Лексика', 'Синтаксис', 'Фонетика', 'Пунктуация'];

const levels = ['Для всех', 'Для начинающих', 'Продвинутый уровень'];

const Aside = () => {
	const [fromSliderValue, setFromSliderValue] = useState(1);
	const [toSliderValue, setToSliderValue] = useState(6);

	return (
		<aside className={styles.Aside}>
			<h1>Продолжительность</h1>
			<div className={styles.rangeContainer}>
				<p>
					От {fromSliderValue} до {toSliderValue} мес.
				</p>
				<DoubleRange
					fromSliderValue={fromSliderValue}
					toSliderValue={toSliderValue}
					setFromSliderValue={setFromSliderValue}
					setToSliderValue={setToSliderValue}
				/>
			</div>
			<h1>Сложность</h1>
			<div className={styles.skillsContainer}>
				{levels.map((level, index) => (
					<Radio
						key={level}
						label={level}
						name='level'
						defaultChecked={index === 0}
					/>
				))}
			</div>
			<h1>Навыки</h1>
			<div className={styles.skillsContainer}>
				{skills.map((skill) => (
					<Checkbox key={skill} label={skill} />
				))}
			</div>
		</aside>
	);
};

export default Aside;
