import React from 'react';
import styles from '../styles/About.module.css';

import { FaServer, FaReact, FaVuejs } from 'react-icons/fa';
import { ImDisplay } from 'react-icons/im';
import { SiRedux, SiMobx, SiPostcss, SiTailwindcss } from 'react-icons/si';

export default function About() {
  return (
    <>
      <h2>About me β¨</h2>
      <h3 className={styles.welcome}>π Welcome to JOne's world</h3>
      <div className={styles.introduce}>
        <div className={styles.profile}>
          <img className={styles.avatar} src="/images/avatar.png" alt="avatar" />
          <h4 className={styles.name}>JungWon Choi</h4>
          <p className={styles.job}>Front-end Developer</p>
        </div>
        <div className={styles.text}>
          <strong className={styles.slogan}>λΆκ΅΄μ μμ§, λ¨κ±°μ΄ μ΄μ ! 24μκ°μ΄ λͺ¨μλ κ°λ°μ π</strong>
          <p>
            π μλνμΈμ! κΏμ μ½λ©νλ νλ‘ νΈμλ κ°λ°μ μ΅μ μμλλ€.
            <br />
            μ¬μ©μ μΉνμ μΈ UI/UXλ₯Ό μ§μ  κ΅¬νν΄λ³΄κ³ μ κ°λ°μμ κΈΈμ κ±·κ² λμμ΅λλ€.
            <br />
            μλ‘μ΄ λ³νλ₯Ό λλ €μνμ§ μκ³  λ€μν κ²½νμ ν λλ‘ νλͺνκ² μ΄κ²¨λ΄λ € λΈλ ₯νλ©°,
            <br />
            μΈμ λ μ΅μ μ μ νμ μν΄ μ€μ€λ‘μκ² μ§λ¬Έμ λμ§λ©° λ₯λμ μΌλ‘ λ΅μ μ°Ύμλκ°λλ€.
          </p>
          <strong className={styles.slogan}>μμλΆν° λ΄κ° μ λ§ μνλ κ²μ λ¬΄μμΌκΉ κ³ λ―Όνμ΅λλ€.</strong>
          <ul>
            <CompareList
              left={{ icon: <ImDisplay color="#AFAFAF" />, text: 'Front-end' }}
              right={{ icon: <FaServer color="#808080" />, text: 'Back-end' }}
            />
            <CompareList left={{ icon: <FaReact color="#61DAFB" />, text: 'React' }} right={{ icon: <FaVuejs color="#4FC08D" />, text: 'Vue' }} />
            <CompareList
              left={{ icon: <SiRedux color="#764ABC" />, text: 'Redux' }} //
              right={{ icon: <SiMobx color="#FF9955" />, text: 'MobX' }}
            />
            <CompareList
              left={{ icon: <SiPostcss color="#DD3A0A" />, text: 'PostCSS' }} //
              right={{ icon: <SiTailwindcss color="#06B6D4" />, text: 'Tailwind' }}
            />
          </ul>
          <p>
            π€ μ΄λ¬ν κ³ λ―Όλ€μ κ·Όλ³Έμ μΈ λ¬Έμ λ₯Ό λ°λΌλ³Ό μ μλ μμΌλ₯Ό λνμ£ΌμμΌλ©°,
            <br />
            λΌλ¦¬μ  μ¬κ³  λ₯λ ₯ μ¦μ§ λ° μ΄μ  μλ κΈ°μ  μ νμ ν° μλλ ₯μ΄ λκ³  μμ΅λλ€.
          </p>
          <strong className={styles.slogan}>λ§€μ¬μ κΈμ μ μ΄κ³  λ―Έλμ§ν₯μ μΈ μμΈλ‘ μνκ² μ΅λλ€.</strong>
          <p>
            "Still waters run deep"
            <br />
            ν­μ κ°μ΄ μμ λμκΈ°κ³  λ λμκΈ°λ μμ΄ κ²©μΈμλλ€.
            <br />
            κ±°μΉ κ³  λΉ λ₯΄κ² μ§λκ°λ λ¬Όλ³΄λ€ μ€λ μκ° μμνκ³  κΉμ΄ μκ² νλ₯΄λ λ¬Όμ²λΌ,
            <br />
            μ΄μ λ³΄λ€ λ λμ μ€λμ λ΄κ° λκΈ° μν΄ λ§€μΌ μ¬μ§ μκ³  κΎΈμ€ν λΈλ ₯ν  κ²μλλ€.
            <br />
            π λμλ λμ κ³Ό μκΈ° κ³λ°λ‘ μ΄λ€ νκ²½μμλ νλ€λ¦¬μ§ μλ κ°λ°μκ° λκ² μ΅λλ€.
          </p>
        </div>
      </div>
    </>
  );
}

function CompareList({ left, right }) {
  return (
    <li className={styles.compare}>
      β’ {left.icon} {left.text} VS {right.icon} {right.text}
    </li>
  );
}
