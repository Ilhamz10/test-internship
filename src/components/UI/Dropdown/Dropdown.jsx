/* eslint-disable react/prop-types */
import { useState } from 'react';
import arrow from '../../../assets/down.svg';

import styles from './Dropdown.module.scss';

const Dropdown = ({ items, selectedItem, className }) => {
	const [isShown, setIsShown] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(selectedItem);

	function handleDropdownClick() {
		setIsShown((prev) => !prev);
	}

	function handleChangeDropdown(item) {
		setSelectedLanguage(item);
		handleDropdownClick();
	}

	return (
		<div className={className}>
			<button className={styles.top} onClick={handleDropdownClick}>
				{selectedLanguage}{' '}
				<img
					src={arrow}
					className={`${styles.arrow} ${isShown ? styles.active : ''}`}
					alt=''
				/>
			</button>
			{isShown && (
				<ul className={styles.dropdownItems}>
					{items.map((item) => (
						<li key={item} onClick={() => handleChangeDropdown(item)}>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
