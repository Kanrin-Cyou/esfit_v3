import './info.css';
import Timeline from './timeline';
import Pic01 from './coop/01.png';
import Pic02 from './coop/02.svg';
import Pic03 from './coop/03.png';
import Pic04 from './coop/04.png';
import Pic05 from './coop/05.png';
import Pic06 from './coop/06.png';
import Pic07 from './coop/07.png';
import Pic08 from './coop/08.jpg';

const Info = () => {
    return (
        <section id="info" className="info">
            <div className='info-title'>
                <h2>会社概要</h2>
            </div>
            <div className="info-content">
                <div className="info-left">
                    <p className=''>■免許番号</p>
                    <p className=''>東京都知事（2）第 99100 号</p>
                    <p className=''>■所属団体</p>
                    <p className=''>東京法務局<br/> 東京都不動産流通機構会員<br/> （社）不動産保証協会<br/> （社）不動産保証協会 東京都本部<br/> </p>
                </div>
                <div className="info-right">
                    <p className=''>■事業内容</p>
                    <p className=''>不動産賃貸業<br/> 不動産仲介業<br/> 不動産管理業<br/> 収益不動産の企画・開発・販売<br/> </p>
                </div>
            </div>
            <div className='info-timeline'  data-aos="fade-left" data-aos-delay="0">
                <Timeline/>
            </div>
            <div className="coop">
                <div className="coop-title"  data-aos="fade-up">
                    <h2>主な取引先</h2>
                </div>
                <div className="coop-img">
                    <img src={Pic01} className='pic01' alt="UR都市機構" data-aos="fade-up" data-aos-delay="100"/>
                    <img src={Pic02} className='pic02' alt="東京都住宅供給公社" data-aos="fade-up" data-aos-delay="200"/>
                    <img src={Pic03} className='pic03' alt="アットホーム株式会社" data-aos="fade-up" data-aos-delay="300"/>
                    <img src={Pic04} className='pic04' alt="株式会社日本政策金融公庫" data-aos="fade-up" data-aos-delay="400"/>
                    <img src={Pic05} className='pic05' alt="三井住友銀行" data-aos="fade-up" data-aos-delay="500"/>
                    <img src={Pic06} className='pic06' alt="三菱UFJ銀行" data-aos="fade-up" data-aos-delay="600"/>
                    <img src={Pic07} className='pic07' alt="西武信用金庫" data-aos="fade-up" data-aos-delay="700"/>
                    <img src={Pic08} className='pic08' alt="巣鴨信用金庫" data-aos="fade-up" data-aos-delay="800"/>
                </div>
            </div>
        </section>
    );
}

export default Info;