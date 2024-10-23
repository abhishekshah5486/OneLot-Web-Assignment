import styles from './Page.module.scss';
import IndexPage from './pages/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <IndexPage />
    </div>
  );
}
