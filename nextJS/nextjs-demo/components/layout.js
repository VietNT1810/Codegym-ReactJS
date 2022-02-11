import styles from "../styles/layout.module.css"

export default function Layout({ children }) {
    return (
        <div>
            <p>This is header</p>
            <div className={styles.container}>{children}</div>
            <p>This is footer</p>
        </div>
    )
}
