/* eslint-disable react/prop-types */
import styles from './MenuBtn.module.scss'

export default function MenuBtn({ color, open, ...props }) {
    return (
        <button
            style={{'--span-color': color}}
            className={`${styles.MenuBtn} ${open && styles.open}`}
            {...props}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
