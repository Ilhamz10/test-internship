import styles from './Footer.module.scss';
import whiteLogo from '../../assets/whiteLogo.svg';

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className={styles.footerInner}>
					<div className={styles.policy}>
						<div className={styles.text}>
							<p>Политика конфиденциальности</p>
							<p>Условия пользования</p>
						</div> 
						<img src={whiteLogo} className={styles.logo} alt='' />
					</div>
					<div className={styles.copyrights}>
						© DailyLangs | 2023. Все права защищены
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
