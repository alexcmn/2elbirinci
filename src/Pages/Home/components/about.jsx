import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { StyledHomeAbout } from '../StyledHome'
import Car from 'Assets/cars/car1.png';
import { StyledHeadline } from 'Components/shared/styledComponents/Elements';

export default function About() {

    let parent = document.querySelectorAll('.animate-text');
    useEffect(() => {
        for (let i = 0; i < parent.length; i++) {
            parent[i].style.width = parent[i].children[0].clientWidth + "px";
        };
    }, [parent])

    return (
        <StyledHomeAbout>
            <div className="ab-wrapp">
                <Container>
                    <Row>
                        <Col md={5} className="left-ab">
                            <img src={Car} alt="" />
                        </Col>
                        <Col md={7} className="right-ab">
                            <div className="desc-box">
                                <StyledHeadline data-text="Hayalindeki Otomobili Bul!">Hayalindeki Otomobili Bul !</StyledHeadline>
                                <p>Türkiye’de hali hazırda satışta olan tüm güncel marka ve modeller in2.comsisteminde en iyi fiyatı alabilmen için seni bekliyor! Hayalinizdeki arabayı dilerseniz hemen teslim, dilerseniz markanın sunduğu ekstra donanım ve paket özelliklerini ekleyerek 2.El Birinci’de oluşturun. 2.El Birinci sistemi sizlere satışta olmayan ya da üretim imkanı bulunmayan bir otomobil için fiyat teklifi istemenize, dolayısıyla gerçekleşme imkanı bulunmayan hayaller kurmanıza asla imkan vermez. Bu sebeple 2.El Birinci aynı zamanda son derece güvenilir bir bilgi ve araştırma kaynağıdır.</p>
                            </div>
                            <div className="desc-box">
                                <StyledHeadline data-text="Neden 2.El Birinci ?">Neden 2.El Birinci ?</StyledHeadline>
                                <p>Tüm çalışanlarımız, otomotiv sektöründe çeşitli görev ve sorumluluklar alarak tecrübe kazanmış profesyonellerden oluşmaktadır. Müşteri beklentileri ve hizmet standartları konusunda otomotiv sektörünün en donanımlı uzmanlarıdır.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div class="bg-text-container">
                    <div class="animate-text">
                        <span> 2.El Birinci</span>
                        <span> 2.El Birinci</span>
                    </div>
                    <div class="animate-text left">
                        <span> 2.El Birinci</span>
                        <span> 2.El Birinci</span>
                    </div>
                </div>
            </div>
        </StyledHomeAbout>
    )
}
