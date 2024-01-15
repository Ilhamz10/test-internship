/* eslint-disable react/prop-types */
import styles from './Radio.module.scss';

const Radio = ({ label, ...props }) => {
	return (
		<label className={styles.Radio}>
			<input type='radio' {...props} />
			<span></span>
			{label}
		</label>
	);
};

export default Radio;
