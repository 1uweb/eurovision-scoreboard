import styles from '../styles/AppNav.module.scss'
import Link from "next/link";

export default function AppNav() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <a className={styles.logo} />
                </Link>
                <nav className={styles.pages}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/scoreboard">
                        <a>Your Scoreboard</a>
                    </Link>
                    <Link href="/participants">
                        <a>Participants</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
