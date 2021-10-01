import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <input type="text" id="text-box" size="20" value="Hello world!" />
      <button onClick="selectText()">Select text</button>
    </div>
  );
}

const generator = require('generate-password');
const passwords = generator.generateMultiple(3, {
  length: 10,
  uppercase: false,
});

console.log(passwords[0].length);
