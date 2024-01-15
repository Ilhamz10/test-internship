/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import styles from './DoubleRange.module.scss';

const DoubleRange = ({
	fromSliderValue,
	toSliderValue,
	setFromSliderValue,
	setToSliderValue,
}) => {
	const fromSlider = useRef();
	const toSlider = useRef();

	function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
		const rangeDistance = to.max - to.min;
		const fromPosition = from.value - to.min;
		const toPosition = to.value - to.min;
		controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
          ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
          ${sliderColor} 100%)`;
	}

	useEffect(
		() =>
			fillSlider(
				fromSlider.current,
				toSlider.current,
				'#c6c6c6',
				'#C05AFF',
				toSlider.current
			),
		[fromSliderValue, toSliderValue]
	);

	return (
		<div className={styles['range_container']}>
			<div className={styles['sliders_control']}>
				<input
					id='fromSlider'
					ref={fromSlider}
					type='range'
					defaultValue={fromSliderValue}
					onChange={(e) => setFromSliderValue(e.target.value)}
					min='1'
					max='6'
				/>
				<input
					id='toSlider'
					ref={toSlider}
					type='range'
					defaultValue={toSliderValue}
					onChange={(e) => setToSliderValue(e.target.value)}
					min='1'
					max='6'
				/>
			</div>
		</div>
	);
};

export default DoubleRange;
