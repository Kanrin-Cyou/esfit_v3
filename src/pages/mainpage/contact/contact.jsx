import './contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <div className="contact-content-left" data-aos="fade-right">
                    <h2>連絡先</h2>
                    <p>東京都豊島区東池袋 1-11-6 相馬ビル 5 階</p>
                    <p>TEL 03-5956-6301</p>
                    <p>FAX 03-5956-6302</p>
                    <p>Email info@esfit.co.jp</p>
                </div>
                <div className="contact-content-right" data-aos="fade-left">
                    <iframe 
                    className='googlemap' 
                    title="map" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9536374249033!2d139.7099608249407!3d35.72735872981173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d662d9842d1%3A0x3f23d965ee0caef5!2z44CSMTcwLTAwMTMgVMWNa3nFjS10bywgVG9zaGltYSBDaXR5LCBIaWdhc2hpaWtlYnVrdXJvLCAxLWNoxY1tZeKIkjEx4oiSNiDnm7jppqzjg5Pjg6s!5e0!3m2!1sja-JP!2sjp!4v1595845762603!5m2!1sja-JP!2sjp" 
                    frameBorder="0" 
                    width = '400px'
                    height= '280px'
                    allowFullScreen={false}
                    aria-hidden={false}
                    tabIndex="0"></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;