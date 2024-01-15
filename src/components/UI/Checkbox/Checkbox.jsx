/* eslint-disable react/prop-types */
import styles from './Checkbox.module.scss';

const Checkbox = ({ label, ...props }) => {
	return (
		<label className={styles.Checkbox}>
			<input type='checkbox' {...props} />
			<span></span>
            {label}
		</label>
	);
};

export default Checkbox;
