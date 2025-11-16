import { changeLanguage } from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-row items-center justify-center gap-2'>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='text-blue-500'>Vite + React</h1>
      <p className='text-warning-500 dark:text-warning-500'>Warning Message</p>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <p className='text-brand-primary-light dark:text-brand-primary-dark'>Brand Color</p>
      <p>{t('hello')}</p>
      <button onClick={() => changeLanguage('en')}>Change Language</button>
    </>
  );
}

export default App;
