import headerImg from '../../public/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={headerImg} />
      <h1>Reactquiz</h1>
    </header>
  );
}