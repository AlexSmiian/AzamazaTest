import CenteredContainer from "@/app/_ui/CenteredContainer";
import styles from './hero.module.scss'
import H1 from "@/app/_ui/H1";
import Image from 'next/image';

export default function Hero() {
    return (
        <CenteredContainer elementType={'section'} classModifier={styles.hero}>
            <H1 classModifier={styles.title}>
                Marketplace of verified services and wholesale offers — travel, shop, and save!
            </H1>
            <Image className={styles.heroImages} src={'/images/hero/hero-image.webp'} alt={'girls'} width={390} height={180} loading={'eager'} />
        </CenteredContainer>
    )
}