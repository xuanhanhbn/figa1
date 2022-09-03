import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Header from '../src/components/header/Header';
import Slide from '../src/components/slide/mainSlide';

const cx  = classNames.bind(styles)
function App() {
  return (
  <div className={cx('main-container')}>
      <Header />
      <Slide />
    </div>
  );
}

export default App;
