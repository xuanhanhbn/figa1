import './main-slide.css'


function Slide() {
    return (
        <div className="main-slide">
            <div className="main-slide-background">
                <div className="main-frame"></div>
                <div className="main-heading main-heading-content main">
                    <h1>Clinic & beauty consultant</h1>
                    <p>It is a long established fact that a reader will be by the readable content of a page.</p>
                    <div className="btn">
                        <button className='btn-content contact-btn'>
                            <a href="http://localhost:3000/#">
                                <span>More Details</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide;