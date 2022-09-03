import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('site-header')}>
            <div className={cx('main-logo')}>
                <h1 className={cx('main-heading')}>Beautice</h1>
                <div className={cx('main-ellipse-1')}></div>
                <div className={cx('main-ellipse-2')}></div>
                <div className={cx('main-rectangle')}></div>
                <div className={cx('main-ellipse')}></div>
            </div>
            <div className={cx('main-menu')}>
                <ul className={cx('main_menu-list')}>
                    <li className={cx('header-active')}>
                        <span>Home</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="7"
                            fill="currentColor"
                            className={cx('bi bi-plus-lg')}
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                        </svg>
                    </li>
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Service</span>
                    </li>
                    <li>
                        <span>Gallery</span>
                    </li>
                    <li>
                        <span>Blog</span>
                    </li>
                </ul>
                <div className={cx('contact_btn')}>
                    <a href="http://localhost:3000/#">
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
