import CenteredContainer from "@/app/_ui/CenteredContainer";
import H1 from "@/app/_ui/H1";
import styles from './hero.module.scss'
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <CenteredContainer elementType={'section'} classModifier={styles.categoryPage}>
            <div className={styles.heroHeader}>
                <Link href={'/'} className={styles.link}>
                    <Image src={'/images/arrow.svg'} alt={'back'} width={48} height={48} />
                </Link>
                <H1 classModifier={styles.title}>
                    Service Category
                </H1>
            </div>
            <div className={styles.filteredBlock}>
                <button className={styles.button}>Sort</button>
                <button className={styles.button}>Filtered</button>
            </div>
        </CenteredContainer>
    )
}