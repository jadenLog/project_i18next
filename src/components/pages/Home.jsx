import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t('welcome')}</h2>
            <p>{t('explanation')}</p>

            <br />
            <hr />
            <br />

            <h1>국제화에 필요한 작업</h1>
            <ol>
                <li>언어, 지역 별 번역</li>
                <li>OS/플랫폼 인코딩</li>
                <li>문자열 치환 방법</li>
                <li>국제화 UI (문자열 크기 변화, 폰트, 아이콘 등)</li>
                <li>숫자, 공백, 화폐, 날짜, 주소, 측정 단위 등 표기</li>
                <li>타임존, 썸머타임 등 시각</li>
            </ol>

            <br />
            <hr />
            <br />

            <h1>1. 언어, 지역 별 번역</h1>
            <p>같은 언어도 지역별로 조금씩 달라질 수 있습니다.</p>
            <p>예시로 미국식 영어와 영국식 영어가 있습니다.</p>
            <ul>
                <li>color/colour</li>
                <li>humor/humour</li>
                <li>realize/realise</li>
                <li>center/centre</li>
                <li>I learned / I learnt</li>
            </ul>
            <p>BCP47을 사용을 통해 해결할 수 있습니다. BCP47은 언어/지역을 위한 표준 표현 태그입니다. en-US/en-UK 등으로 위와 같은 상황을 구분해 낼 수 있습니다.</p>
            <a href="https://tools.ietf.org/html/bcp47">BCP47란??</a>

            <br />
            <hr />
            <br />

            <h1>2. OS/플랫폼 인코딩</h1>
            <p>영어와 서유럽권 언어들은 1바이트 만으로도 모든 글자를 표현하기에 충분하였습니다. 그러나 아시아권 언어(중국어, 한국어 등)를 표현 하기위해서는 2바이트가 필요했고 이를 위해 Unicode가 탄생되었습니다.</p>
            <ul>
                <li>1바이트: ISO 8859–1, Windows 1252, MacRoman 등</li>
                <li>2바이트 이상: Unicode(UTF-8, UTF-16, UTF-32), GB 18030 등</li>
            </ul>

            <br />
            <hr />
            <br />

            <h1>3. 문자열 치환 방법</h1>
            <p>문자열을 해당 언어/지역에 맞게 변환하는 방법도 중요한데 크게 두가지가 있습니다.</p>
            <ol>
                <li>서버에서 요청 언어별 리소스를 교체 (Server Side)</li>
                <li>클라이언트에서 요청 언어별 리소스 요청, 교체 (Client Side)</li>
            </ol>
            {/* <p>1번보단 2번이 더 좋은 방법이라고 생각합니다. 리소스 캐시와 선호 언어 설정 등이 가능하기 때문입니다. 하지만 서비스에 따라 1번의 방법이 더 적합할 수 있습니다. 모바일의 경우에 하드웨어적인 한계로 리소스 다운로드를 비롯해 렌더링에도 성능 이슈가 발생할 수 있으며 이에 소모되는 배터리 전력 등이 UX에도 영향을 끼칠 수 있습니다.</p> */}

            <br />
            <hr />
            <br />

            <h1>4. 국제화 UI (문자열 크기 변화, 폰트, 아이콘 등)</h1>
            <p>리소스가 언어/지역 별로 변환 되면 그에 맞게 UI도 바뀌어야 합니다. 언어/지역 별로 글자 길이가 달라지기때문에 가독성을위해 적적한 폰트 또는 폰트 사이즈의 변형이 필요합니다. 영어의 경우 10pt 만으로도 가독성 있는 표현을 할 수 있지만 중국어는 최소 12pt는 되어야 합니다. 또한 문화에 따라 아이콘이나 색의 의미가 달라질 수 있습니다. 일부 국가에서는 오른쪽에서 외쪽으로 읽기도 하여 정렬방식이 달라지는 등의 수정이 필요합니다.</p>
            <a href="https://medium.com/@cynthiarisse/cross-cultural-interface-design-1f259a8fbcdc">범문화적 인터페이스 디자인(Cross-cultural interface design)</a>

            <br />
            <hr />
            <br />

            <h1>5. 숫자, 공백, 화폐, 날짜, 주소, 측정 단위 등 표기</h1>
            <p>날짜 예시</p>
            <ul>
                <li>한국: 2020년 2월 24일</li>
                <li>미국: 2/24/2020</li>
                <li>유럽: 24/2/2020</li>
            </ul>
            <p>화폐 예시</p>
            <ul>
                <li>미국: $10</li>
                <li>독일: 10 $</li>
                <li>중국: US$ 10</li>
            </ul>

            <br />
            <hr />
            <br />

            <h1>6. 타임존, 썸머타임 등 시각</h1>
        </>
    );
}

export default Home;