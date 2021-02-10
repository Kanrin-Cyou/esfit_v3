import './feature.css';
import Search from './search.svg';
import Money from './money.svg';
import Manage from './manage.svg';

const Feature = () => {
    return (
        <section id="features" className="features" data-aos="fade-up">
                    <div className="feature-container">

                        <div className="feature-row-content">
                            <div className="feature-wordcontent" data-aos="fade-right" data-aos-delay="100">
                                <h3>高い利回り物件の取得</h3>
                                <p className="feature-font">
                                    公売物件・裁判所の競売物件を、瑕疵回避の難易度を評価し、複雑な権利をスムーズに整理 して、よい利回り物件を取得しています。 不動産業横の繋がりに頼りで、お得な物件情報をリアルで把握しています。
                                </p>
                            </div>

                            <div className="feature-imgcontent" data-aos="fade-left" data-aos-delay="100">
                                <img src={Search} className="feature-img" alt=""/>
                            </div>
                        </div>
            
                        <div className="feature-row-content">
                            <div className="feature-imgcontent" data-aos="fade-right" data-aos-delay="100">
                                <img src={Manage} className="feature-img" alt=""/>
                            </div>
                            <div className="feature-wordcontent" data-aos="fade-left" data-aos-delay="100">
                                <h3>一本化とした資産管理を実現できる</h3>
                                <p className="feature-font">
                                    家探しの学生客はたくさん抱えています。我々の投資家の所有物件は、空室期間ないように 一本化とした賃貸客付け・賃貸管理サービスを提供しています。 賃貸管理・ビルディング管理に対して、責任者を指定して、早く対処できる体制を組んでいます。
                                </p>
                            </div>
                        </div>
            
                        <div className="feature-row-content">
                            <div className="feature-wordcontent" data-aos="fade-right" data-aos-delay="100">
                                <h3>不動産の価値を高めること実現できる</h3>
                                <p className="feature-font">
                                    土地の価値は、日本経済・不動産市場・行政・立地に影響されますが、家屋は経年劣化で価 値が落ちる中、如何に家屋の価値を高めるかは力入れています。
                                </p>
                            </div>
                            <div className="feature-imgcontent" data-aos="fade-left" data-aos-delay="100">
                                <img src={Money} className="feature-img feature-img-3" alt=""/>
                            </div>
                        </div>
            
                    </div>
        </section>
    );
}

export default Feature;