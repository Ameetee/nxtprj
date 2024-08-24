// src/components/Home.tsx
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
        className={styles.image}
      />
    </div>
  );
};

export default Home;
