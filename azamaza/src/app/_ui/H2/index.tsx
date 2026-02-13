import cln from 'classnames';
import styles from './h2.module.scss';

type H2Props = {
  children?: React.ReactNode;
  classModifier?: string;
  html?: string;
};

export default function H2({ children, classModifier, html }: H2Props) {
  if (html) {
    return (
      <h2
        className={cln(styles.h2, classModifier)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <h2 className={cln(styles.h2, classModifier)}>
      {children}
    </h2>
  );
}
