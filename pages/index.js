/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import generator from 'generate-password';
import styles from '../styles/Home.module.css';

const index = () => {
  // константа массива объектов длин паролей
  const LENGTH_PASSWORD = [
    { id: 0, name: 'Select length', value: 0 },
    { id: 1, name: 'Simple', value: 8 },
    { id: 2, name: 'Middle', value: 12 },
    { id: 3, name: 'Complicated', value: 15 },
    { id: 4, name: 'Difficult', value: 20 },
    { id: 4, name: 'Super difficult', value: 100 },
  ];

  const [length, setLength] = useState(LENGTH_PASSWORD);
  const [password, setPassword] = useState('');
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  // const visibleButton = useRef(true);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
    });
    setPassword(pwd);
  };

  // при клике передаем полученое значение из константы массива
  const handleUpdate = e => setLength(e.target.value);

  //скопировали пароль
  const handleClick = () => {
    window.navigator.clipboard.writeText(password);
    setPassword('Copied!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Generate a random password</h1>

      <form className={styles.form}>
        {/* секция dropdown */}
        <div className={styles.selectContainer}>
          <select onChange={handleUpdate} className={styles.select}>
            {[...LENGTH_PASSWORD].map(item => {
              const { id, name, value } = item;
              return (
                <option key={id} value={value} className={styles.optionsItem}>
                  {name}: {value}
                </option>
              );
            })}
          </select>
          <span className={styles.focus}></span>
        </div>
        {/* секция checkbox */}
        <div className={styles.checkboxContainer}>
          <h2 className={styles.titleCheckbox}>
            Note: Select the required checkbox!{' '}
          </h2>
          <ul className={styles.checkboxItem}>
            <li>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={isLowerCase}
                  onChange={() => setIsLowerCase(value => !value)}
                />
                <span className={styles.checkmark}>
                  <p>LowerCase</p>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={isUpperCase}
                  onChange={() => setIsUpperCase(value => !value)}
                />
                <span className={styles.checkmark}>
                  <p>UpperCase</p>
                </span>
              </label>
            </li>
            <li>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={isNumbers}
                  onChange={() => setIsNumbers(value => !value)}
                />
                <span className={styles.checkmark}>
                  <p>Numbers</p>
                </span>
              </label>
            </li>
          </ul>
          <button
            type="button"
            value="Generate Password"
            onClick={generatePassword}
            className={styles.button}
          >
            <span>Password</span>
          </button>
        </div>
        {/* секция генерации копирования пароля  */}
        {password && (
          <div className={styles.passwordContainer}>
            <input
              placeholder={password}
              readOnly
              multiple
              className={styles.input}
            />
            <button
              type="button"
              value="CopyPassword"
              onClick={handleClick}
              className={styles.button}
            >
              <span>Copy</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default index;
