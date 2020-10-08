import React from 'react';
import '../assets/font.css'
import '../assets/introduce.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'
import {Image} from 'react-bootstrap'

const Introduce = () =>{
    return(
        <div className ="Introduce">
          <Header state="소개"></Header>
        <div className = "content">
            <Title main="졸업전시 소개"></Title>
            <div className = "font-s26-w7-g9">
                점에서, 점으로.<br/>
                열여덟 개의 지향점을 응원하며<br/><br/>
                -
            </div>
            <div className ="introPic">
                <Image src="/image/common/main.jpg" width="381px"></Image>
            </div>
            <div className="introComment font-s18-w5-b9">
                우리네 삶은 끊임없이 시작과 끝을 되풀이한다. <br/>
                주체와 시기를 초월하는 반복은 점과 닮아 있다. <br/>
                우리는 졸업전시 "점"이 전기의 단락을 지으며 새로운 출범까지를 안내하는 매개가 되기를 바란다.
            </div>
            <Title main="과목 소개"></Title>
            <div className="introSub">
            <div className ="introDmd font-s26-w7-b9">
                디지털미디어디자인
            <div className ="introBar"></div>
            <div className ="font-s18-w5-b9">
                <br/>
                디지털 컨텐츠 디자인의 제작을 통해 디<br/>
                지털 미디어의 특성을 갖춰, 미디어 영<br/>
                상의 원리와 구조를 이해하고 관련 지식<br/>
                을 탐구한다.
            </div>
            </div>
            
            <div className ="introAd font-s26-w7-b9">
                광고컨텐츠디자인
            <div className ="introBar"></div>
            <div className =" font-s18-w5-b9">
                <br/>
                디자인 마케팅 커뮤니케이션 선행 연구<br/>
                를 통한 IMC 크리에이티브 능력을 향<br/>
                상시키고 졸업전시 발표를 진행한다.
            </div>
            </div>
            <div className ="introDs font-s26-w7-b9">
                디자인세미나
            <div className ="introBar"></div>
            <div className =" font-s18-w5-b9">
                <br/> 
                경험디자인 방법을 기반으로 하여<br/>
                학생의 관심사에 맞는 주제와 전<br/>
                시기법을 선택해 프로젝트를 수행<br/>
                하고 졸업전시를 구성한다.
            </div>
            </div>
            <div className ="introSd font-s26-w7-b9">
                시각디자인
            <div className ="introBar"></div>
            <div className =" font-s18-w5-b9">
                <br/>
                디자인에 대한 개념적ㆍ논리적 접근을<br/>
                통해 정보의 시각화에 있어서 매체 연구<br/>
                와 편집디자인 프로젝트를 해결하는 능<br/>
                력과 아이디어의 표현 능력을 높인다.
            </div>
            </div>
            </div>
            <div className="introCommission">
                <Title main="졸업전시 준비 위원회"></Title>
                <div className = "introManage font-s26-w7-g9">
                    운영팀<br/>-
                    <div className ="font-s18-w7-g9">
                        졸전장/과대표
                        <span className ="font-s18-w5-g9">
                            &ensp; 김정현
                        </span>
                    </div>
                    <div className ="font-s18-w7-g9">
                        부졸전장/총무/서기
                        <span className ="font-s18-w5-g9">
                            &ensp; 김남희
                        </span>
                    </div>
                </div>
                <div className = "introDisplay font-s26-w7-g9">
                    전시팀<br/>-
                    <div className ="font-s18-w7-g9">
                        전시팀장
                        <span className ="font-s18-w5-g9">
                            &ensp; 주현아
                        </span>
                    </div>
                    <div className ="font-s18-w7-g9">
                        전시팀원
                        <span className ="font-s18-w5-g9">
                            &ensp; 김수현 신반석 이명철  
                        </span>
                    </div>
                </div>
                <div className = "introPromote font-s26-w7-g9">
                    홍보팀<br/>-
                    <div className ="font-s18-w7-g9">
                        홍보팀장
                        <span className ="font-s18-w5-g9">
                            &ensp; 이유리
                        </span>
                    </div>
                    <div className ="font-s18-w7-g9">
                        홍보팀원
                        <span className ="font-s18-w5-g9">
                            &ensp; 손수진 윤현동
                        </span>
                    </div>
                </div>
                <div className = "introPrint font-s26-w7-g9">
                    인쇄팀<br/>-
                    <div className ="font-s18-w7-g9">
                        인쇄팀장
                        <span className ="font-s18-w5-g9">
                            &ensp; 윤이랑
                        </span>
                    </div>
                    <div className ="font-s18-w7-g9">
                        인쇄팀원
                        <span className ="font-s18-w5-g9">
                            &ensp; 박민지 차지윤
                        </span>
                    </div>
                </div>
            </div>
            </div>
            <Footer></Footer>

        </div>//intro
    )
}
export default Introduce;