import { render } from 'preact';
import { ActionButtons } from './components/ActionButtons';
import { PearlCollection } from './components/PearlCollection';
import { GameBoard } from './components/GameBoard';
import './style.css';

document.ondblclick = function (e) {
  e.preventDefault();
};

export function App() {
  return (
    <>
      <header>
        <h1>Solitaire</h1>
      </header>
      <GameBoard />
      <PearlCollection />
      <ActionButtons />
    </>
  );
}

render(<App />, document.getElementById('app'));
