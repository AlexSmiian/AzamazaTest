import cln from 'classnames';
import styles from './h1.module.scss';

type H1Props = {
  children?: React.ReactNode;
  classModifier?: string;
  html?: string;
};

export default function H1({ children, classModifier, html }: H1Props) {
  if (html) {
    return (
      <h1
        className={cln(styles.h2, classModifier)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <h1 className={cln(styles.h1, classModifier)}>
      {children}
    </h1>
  );
}
