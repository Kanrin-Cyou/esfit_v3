import './about.css';
import Intro from './intro.svg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="" data-aos="fade-right">
                    <img className='about-img' src={Intro} alt=""/>
                </div>

                <div className="about-content" data-aos="fade-left">
                    <h1>ごあいさつ</h1>
                    <h4>先進国の中、日本國は非常に高い技術力かつ安定なビジネス環境及び投資環境を、世界中の投資家より注目を集めています。特に東京は日本政治と経済の中心地、日本全国の投資家だけではなく、海外の投資家も安定な資産運用を図って、資産価値の高い東京エリアの不動産物件を投資しています。</h4>
                    <h4>その中で弊社は、長年の投資経験を活かして、投資家及び投資以外の目的で不動産を購入するお客様に適応な資金・資産運用を提案しています。投資家及び一般なお客様のことをよく聞き受けて 10 年 20 年それより先ことを、お客様の人生プランによい提案を出来るように精いっぱい頑張らせていただいております。</h4>
                    <h4>弊社を通して不動産購入した投資家様にはもちろん、個人のお客様にも、それぞれのニーズに合わせて、賃貸客付け・賃貸管理・ビルディング管理をきちんと時間と手間をかけて、お客様の資産を守ること、増やすことを努力しております。</h4>
                    <h4>不動産と通して、お客様とともに幸せを感じることを、我々は目指しています。</h4>
                    <h3>代表取締役 橘 麗香</h3>
                </div>

            </div>
        </section>
    );
}

export default About;