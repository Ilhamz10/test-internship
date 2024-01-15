import Dropdown from '../../components/UI/Dropdown/Dropdown';

import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import searchImg from '../../assets/search.svg';
import accountImg from '../../assets/account.png';
import MenuBtn from '../../components/UI/MenuBtn/MenuBtn';
import { useState } from 'react';

const Header = () => {
	const [open, setOpen] = useState(false);

	function toggleMenu() {
		setOpen((prev) => !prev);
	}

	return (
		<header>
			<div className='container'>
				<div className={styles.Header}>
					<img src={logo} alt='' className={styles.logo} />
					<div className={styles['Header-left']}>
						<nav
							className={`${styles.navigation} ${open ? styles.active : ''}`}>
							<ul>
								<li>
									<a className={styles.active} href=''>
										Курсы
									</a>
								</li>
								<li>
									<a href=''>Статьи</a>
								</li>
								<li>
									<a href=''>Вопросы</a>
								</li>
							</ul>
						</nav>
						<div className={styles.actionButtons}>
							<button>
								<img className={styles.searchBtn} src={searchImg} alt='' />
							</button>
							<button>
								<img className={styles.accountBtn} src={accountImg} alt='' />
							</button>
							<Dropdown
								className={styles.headerDropdown}
								items={['RU', 'EN', 'FR']}
								selectedItem='RU'
							/>
						</div>
						<div className={styles.menuBtn}>
							<MenuBtn open={open} onClick={toggleMenu} color={'#c05aff'} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
