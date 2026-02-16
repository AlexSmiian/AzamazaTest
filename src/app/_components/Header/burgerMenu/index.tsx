import styles from './menu.module.scss'
import cln from "classnames";

type BurgerMenuProps = {
    closeMenu: () => void;
    toggleMenu: () => void;
    isOpen: boolean;
};

export default function BurgerMenu({ closeMenu,isOpen,toggleMenu }: BurgerMenuProps) {
    return (
        <div className={cln(styles.sideMenu, isOpen && styles.open)}>
            <div className={styles.menuOverlay} onClick={toggleMenu}></div>
            <nav className={cln(styles.menuContent, {[styles.open]: isOpen})}>
                <button
                    className={styles.closeButton}
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>💵</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Currency</span>
                        <span className={styles.menuSubtitle}>U.S. dollar</span>
                    </div>
                    <div className={styles.menuArrow}>›</div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>🌐</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Language</span>
                        <span className={styles.menuSubtitle}>English language</span>
                    </div>
                    <div className={styles.menuArrow}>›</div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>✉️</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Your messages</span>
                    </div>
                    <span className={styles.badge}>4</span>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>🔔</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Your notifications</span>
                    </div>
                    <span className={styles.badge}>1</span>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>💼</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Business profile</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>📈</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Affiliate program</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>📢</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Referral program</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>⭐</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Popular services</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>🎧</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Subscriptions</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>❓</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>How it's work?</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>ℹ️</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>About Azamaza.com</span>
                    </div>
                </div>

                <div className={styles.menuItem}>
                    <div className={styles.menuIcon}>🔒</div>
                    <div className={styles.menuText}>
                        <span className={styles.menuTitle}>Privacy & cookies</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}