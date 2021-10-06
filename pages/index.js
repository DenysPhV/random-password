/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import generator from 'generate-password';
// import styles from '../styles/Home.module.css';

const index = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(15);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols,
    });
    setPassword(pwd);
  };

  return (
    <>
      <div>
        <h1>Generate a random password</h1>
      </div>

      <label>
        <span>Length:</span>
        <input
          type="number"
          value={length}
          onChange={e => setLength(e.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={isLowerCase}
          onChange={() => setIsLowerCase(value => !value)}
        />
        <span>LowerCase</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isUpperCase}
          onChange={() => setIsUpperCase(value => !value)}
        />
        <span>UpperCase</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isNumbers}
          onChange={() => setIsNumbers(value => !value)}
        />
        <span>Numbers</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isSymbols}
          onChange={() => setIsSymbols(value => !value)}
        />
        <span>Symbols</span>
      </label>
      <div>
        {' '}
        <small>Note: At least one should be true.</small>
        <input
          type="button"
          value="Generate Password"
          onClick={generatePassword}
        />
        Password: {password}
      </div>
    </>
  );
};

export default index;
