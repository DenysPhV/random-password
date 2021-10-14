/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import generator from 'generate-password';
import styles from '../styles/Home.module.css';

const index = () => {
  const LENGTH_PASSWORD = [
    { id: 0, name: 'Select length', value: 0 },
    { id: 1, name: 'Simple', value: 8 },
    { id: 2, name: 'Middle', value: 12 },
    { id: 3, name: 'Complicated', value: 15 },
    { id: 4, name: 'Difficult', value: 20 },
  ];
  // const [length, setLength] = useState(15);
  const [length, setLength] = useState(LENGTH_PASSWORD);
  const [password, setPassword] = useState('');
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
    });
    setPassword(pwd);
  };

  const handleUpdate = e => {
    setLength(e.target.value);
  };

  const handleClick = e => {
    console.log('Получить пароль', password);
    window.navigator.clipboard.writeText(password);
    setPassword('Copied!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Generate a random password</h1>

      <form className={styles.form}>
        <div className={styles.selectContainer}>
          <select onChange={handleUpdate} className={styles.select}>
            {[...LENGTH_PASSWORD].map(item => {
              const { id, name, value } = item;
              return (
                <option key={id} value={value} className={styles.options}>
                  {name}: {value}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <h2>Note: Select the required checkbox! </h2>
          <ul className={styles.checkboxItem}>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={isLowerCase}
                  onChange={() => setIsLowerCase(value => !value)}
                />
                <span>LowerCase</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={isUpperCase}
                  onChange={() => setIsUpperCase(value => !value)}
                />
                <span>UpperCase</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={isNumbers}
                  onChange={() => setIsNumbers(value => !value)}
                />
                <span>Numbers</span>
              </label>
            </li>
          </ul>
        </div>

        <div>
          <button
            type="button"
            value="Generate Password"
            onClick={generatePassword}
          >
            Password:
          </button>
          <input placeholder={password} readOnly />
          <button type="button" value="Copy Password" onClick={handleClick}>
            Copy
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
