import classNames from 'classnames/bind';

import styles from './mainSlide.module.scss';

const cx = classNames.bind(styles);
function Slide() {
    return (
        <div className={cx('main-slide')}>
            <div className={cx('main-slide-background')}>
                <div className={cx('main-frame')}></div>
                <div className={cx('main-heading')}>
                    <div className={cx('main-heading-content')}>
                        <h1>Clinic & beauty consultant</h1>
                        <p>It is a long established fact that a reader will be by the readable content of a page.</p>
                    </div>

                    <div className={cx('slide-title')}>
                        <button className={cx('btn-content')}>
                            <a href="http://localhost:3000/#">
                                <span>More Details</span>
                            </a>
                        </button>
                    </div>
                    <div className={cx('slide-btn')}>
                        <div className={cx('slideLeft')}></div>
                        <button className={cx('slideMid')}></button>
                        <div className={cx('slideRight')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide;
