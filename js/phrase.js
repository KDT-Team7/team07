const empoweringQuotes = [
  "계속해서 노력하라. 네가 노력할 때마다 네가 생각하지도 못했던 곳으로 가까워질 것이다. - 사무엘 존슨",
  "어떤 성공도 평범한 노력 없이는 이루어질 수 없다. - 히알링",
  "성공하려면 기회를 만들어라. - 머리 할리",
  "오늘은 하지 않으면, 내일은 없을지도 모른다. - 스물세 번째 사람",
  "최고의 방어는 공격이다. - 프리드리히 빌헬름 조제프 폰 링크",
  "자신을 믿어라. 당신의 능력은 당신이 생각하는 것보다 훨씬 더 강력하다. - 테니스 선수 비노스 밀로스",
  "눈앞의 최후의 순간이 오기 전까지는 그릇될 수 있다는 생각은 버려라. - 프로의 삶",
  "당신의 미래는 지금의 행동에 달려있다. - 미노아 브라우커스",
  "자신을 신뢰한다는 것은 실패를 두려워하지 않는다는 것이다. - 브로드 리",
  "강한 사람들은 거의 항상 강한 마음을 가지고 있다. - 세바스찬 로셀",
  "좋은 결과를 얻으려면 우선 배워야 한다. 배우는 과정에서는 실패가 포함되어 있을 수 있다. - 스티븐 코블",
  "나는 나의 가능성을 알기 때문에 나의 불가능을 이룰 수 있다. - 요한 볼프강 폰 괴테",
  "실패는 중요하지 않다. 중요한 것은 다시 시작하는 법을 배운다는 것이다. - 헨리 포드",
  "자기 자신을 아는 것은 최대의 지혜다. - 글로리아 스타이넘",
  "오늘은 노력하지 않는다면, 미래에 대한 후회로 가득할 것이다. - 카를로스 슬림 헬루",
  "당신이 결정한 대로 될 것이다. - 웨인 다이어",
  "당신이 강해질 수 없으면 당신이 강해질 기회를 찾아라. - 헬렌 켈러",
  "성공의 열쇠는 좌절의 기회 안에 숨어 있다. - 윈스턴 처칠",
  "가장 어려운 순간이야말로 성취의 순간이다. - 나폴레옹 본파르트",
  "우리는 우리 자신의 기대치에 맞춰 성장한다. - 에스더 퍼렐",
  "남들과는 다르게 도전하고자 할 때가 가장 위험하지만 가장 멋진 순간이다. - 로니 게우즈",
  "노력하지 않으면 당신의 꿈은 이루어지지 않는다. - 마사하루 타나카",
  "불가능한 것이 불가능하지 않게 만들 수도 있다. - 먼로 카드",
  "지금 당장 시작하지 않으면, 곧 후회할 것이다. - 고든 박",
  "달성할 수 없는 꿈은 없다. - 야니 베기르",
  "이기지 못해도 지는 것보다 낫다. - 미하이 롬마하",
  "용기란 두려움에 대항하며 행동하는 것이다. - 마크 트웨인",
  "기회가 주어지지 않으면 자신의 두뇌로 기회를 만들어라. - 조지 베넌트",
  "긍정적인 생각은 당신의 마음을 더 크게 만든다. - 마이클 포우",
  "성공적인 삶의 비밀은 모두가 원하는 것을 주는 것이다. - 사무엘 레인드",
  "성공의 비밀은 이전의 실패에서 발견할 수 있다. - 토마스 워튼",
  "누군가의 시선을 의식하지 마라. 자신이 할 수 있는 일을 믿어라. - 세바스찬 마르퀴스",
  "좌절할 수도 있지만 포기하지 말라. 그리고 포기하지 않기를 원하라. - 크리스 콜럼버스",
  "한 걸음만 더 나가는 것이 종종 성공과 실패를 결정짓는다. - 나폴레옹 힐",
  "자신을 알면 그 누구보다 강해질 수 있다. - 톨스토이",
  "배움과 고민이 더 많이 있는 사람이 성장한다. - 솔로몬",
  "열정이 없으면 누구에게도 존경받지 못할 것이다. - 천재 테니스 선수 존 맥인로",
  "길을 걷는 도중에 인생을 알게 된다. - 리버티 블레이크",
  "목표를 설정하는 것은 성공의 첫 번째 비결이다. - 도나 로버츠",
  "작지만 확실한 걸음이 큰 성과를 이룰 수 있다. - 데이비드 조지",
  "힘을 잃지 않고 믿어라. - 리히아드 바흐",
  "성공은 행동하는 사람들의 결과이다. - 조지 로버트 스탠슨",
  "현명한 사람은 교훈을 얻어서 크게 성공한다. - 마키아벨리",
  "다른 사람의 꿈을 따라하지 말고, 당신 자신의 꿈을 따라가라. - 린다 판더",
  "끝까지 해보지 않으면 끝난 것이다. - 미구엘 데 세르반테스",
  "강한 사람은 약한 사람에게서, 약한 사람은 강한 사람에게서 배워야 한다. - 빈센트 람비오시",
  "당신이 가는 길은 당신이 되는 길이다. - 노트레 담",
  "우리의 소망과 꿈을 벗어난다면, 인생은 너무 희망차지 않을까? - 아니스 네넬 베르나르",
  "하루하루 기회가 더해지고 있습니다. - 맥스",
  "계속해서 실패해도, 그것이 그만한 가치가 있는 목표라면 그냥 실패한 거지 성공한 게 아니다. - 조지아 오키프",
  "세상은 무기로 승리하고, 놀랄만큼 재치로 이기고, 그 외에는 돈으로 이긴다. - 로스차일드",
  "눈앞의 기회가 얼마나 크던지, 당신은 처음부터 시작해야 한다. - 워런 버핏",
  "당신이 자신을 보호하지 않으면, 남들이 당신을 대신해선 안 된다. - 빌 클린턴",
  "남들의 귀를 기울여야 당신의 목소리를 듣는다. - 리차드 브랜슨",
  "문제점은 모두에게 두드리고, 지혜를 알고 싶다면 모두에게 물어라. - 퍼블릴리우스 시루스",
  "계획이 없다면 지름길을 알지 못한다. - 제롬 라 브라에르",
  "남의 행복한 얼굴만 봐서는 알 수 없다. - 첸 민희",
  "방법을 찾아보려 들지 말고, 방법을 만들어라. - 홍주원",
  "실패와 실패 사이를 잘 버티는 사람이 성공한다. - 제레미 페인",
  "전진하지 않는 자는 하락한다. - 장자",
  "더 나은 결과를 원한다면, 더 좋은 질문을 하라. - 토니 로빈스",
  "가장 큰 위험은 위험이 없는 것이다. - 히라키 마나베",
  "성공을 위한 열쇠는 실패에 대한 명확한 계획이다. - 켄달 콜",
  "가장 큰 위험은 위험이 없는 것이다. - 히라키 마나베",
  "비전은 해양보다 더 광대하고 넓다. - 세자",
  "인생을 그대 자신의 작품으로 만들어 가라. - 루이사 메이 알콧",
  "때로는 현실을 바꾸기보다는 자신을 바꾸는 게 더 낫다. - 안토니 체스키",
  "당신이 행복하려고 하는 것이 중요하다. 그래서 행복해질 수 있다. - 알버트 슈바이처",
  "불가능하다고 생각하는 것은 가능하지 않다는 것이다. - 마르쿠스 튈리우스 사이셔",
  "하루를 생각하고 살면 멀리 볼 수 없다. 한해를 생각하고 살면 가까운 것조차 보이지 않는다. 그러나 수십 년을 함께 공유하면 작은 일조차 잊지 않는다. - 란자 데뷔라",
  "성공한 사람들은 성공에 도달하기까지 실패를 다르지 않는다. 하지만 다른 점은 실패에 포기하지 않는다는 점이다. - 헨리 포드",
  "당신이 얼마나 강하게 뛰는지를 묻지 마라, 얼마나 빨리 뛰는지를 묻는 것이다. - 나바나 리즈",
  "모든 것이 바로 앞에 있다. 그러나 다른 누군가가 당신에게서 끌어안고 있다. - 브레이크 레드커튼",
  "우리가 가진 능력의 약 90%는 자기에 대한 자신감 때문이다. - 브라이언 트레이시",
  "단호한 결정으로 세계를 바꾸었던 사람들이 누구 하나 불행하지 않다. - 레오나르도 다 빈치",
  "가장 큰 위험은 아무런 위험이 없는 것이다. - 월트 디즈니",
  "성공한 사람들은 평범한 사람들이 실패하는 것을 두려워하지 않는다. - 그레이터 노이스",
  "정지하는 건 좀 더 행복하다는 것을 느낀다. - 오데드 아르라딘",
  "우리가 모든 것을 조종하는 것은 불가능하다. 우리가 조종하는 것은 우리 자신이다. - 벤자민 디즈렐리",
  "우리는 우리 자신의 삶에서 가장 확실한 안정과 쾌락을 얻을 수 있다. - 오슬러",
  "다른 사람들이 기뻐하는 것을 기뻐하지 말고, 당신이 기뻐하는 것을 기뻐하라. - 정주영",
  "자유롭게 사는 사람들은 신중한 선택을 한다. 그들은 마음속에 자신에게 최고의 기회를 제공하는 것이 무엇인지 알고 있다. - 니시 표구",
  "위대한 일을 이루기 위해 처음부터 완벽한 사람이 될 필요는 없다. 그러나 처음부터 시작해야 한다. - 제임스 클리어",
  "당신이 인생을 살아야 하는 것은 타인이 아니다. 당신은 자신을 위해 행동해야 한다. - 매캔지",
  "완벽함이란 더 이상 어떤 개선의 여지가 없는 상태가 아니다. - 프리드리히 도멜",
  "우리가 세상을 바꾸기 위해 뭘 할 수 있을지 궁금해질 때가 있을 것이다. 그 때 우리는 이미 세상을 바꾸고 있다. - Nelson Mandela",
  "실패한 이들은 모두 실패하지 않은 이유를 찾아낸다. - 오스카 와일드",
  "왕의 심장과 같은 것은 내 것이다. - 조지 오웰",
  "당신이 보지 못하는 게 더 많다는 사실에 깨닫게 될 때 당신의 인생이 더 풍요로워질 것이다. - 헨리 데이비드 소로",
  "자신을 이기려면 자신을 이해해야 한다. - 다라 오브라도비치",
  "위험을 무릅쓰지 않으면, 성취에 도달할 수 없다. - 인다라 간디",
  "누군가에 의해 다스린 삶은 삶이 아니다. - 영국 여성 학자 앤젤라 니슨",
  "절대적인 무력함을 느끼면, 세계는 어떤 것도 바꿀 수 없다. - 찰리 채플린",
  "성공하려면 지금 당장 시작하라. - 스타팅 링컨",
  "미래는 우리가 만들어야 하는 것이다. - 피터 드러커",
  "삶을 망친 건 지난 일이 아니라 미래에 대한 불안감이다. - 다빈치 코드",
  "당신은 운명이 아니라 당신의 결정에 의해 생각한 대로 성공할 것이다. - 페로니아스",
  "지금 당장 나서지 않으면, 항상 그렇게 될 것이다. - 나폴레온 힐",
  "모든 전쟁은 공평하지 않다. - 사이먼 바",
  "행동을 기다리는 사람은 오래 기다린다. - 찰스 매뉴징",
  "우리는 실패를 두려워하지 말아야 한다. 오직 기회를 놓치는 데 두려워해야 한다. - 조지 아턴스",
  "지도자의 기본은 위기와 오해를 기회와 확신으로 바꾸는 것이다. - 존 케네디",
  "무엇보다 힘든 일은 아무것도 하지 않는 일이다. - 영어 속담",
  "당신이 행복해지기를 원한다면, 그저 웃어라. - 루트 브루버",
  "모든 인생의 고민과 결과는 내가 만든 것이다. - 캔자",
  "꿈을 이루지 않는 유일한 방법은 아무것도 하지 않는 것이다. - 존 F. 케네디",
  "두려움을 극복하는 유일한 방법은 바로 그것을 직면하는 것이다. - 프랭크 허버트",
  "인생의 목적은 더 많이 경험하고 더 많이 성장하는 것이다. - 오스카 와일드",
  "목표는 당신에게 인생을 주지 않는다. 당신의 인생에 목표를 줘야 한다. - 니콜라스 베라스퀴즈",
  "인생은 무엇을 끌어당기느냐에 따라 결정된다. - 호세 프라헨",
  "우리의 삶을 변화시키려면, 먼저 자신을 변화시켜야 한다. - 닐 도널드 월쇼",
  "당신이 얼마나 강하게 뛰는지를 묻지 마라. 얼마나 빨리 뛰는지를 묻는 것이다. - 나바나 리즈",
  "목표를 이루는 유일한 방법은 시작하는 것이다. - 캔자",
  "오늘 할 수 있는 가장 좋은 일은 바로 지금 시작하는 것이다. - 마크 트웨인",
  "세상은 무기로 승리하고, 놀랄만큼 재치로 이기고, 그 외에는 돈으로 이긴다. - 로스차일드",
  "인생은 아름다운 건물을 지을 때와 같다. 가장 먼저 지어야 하는 건 기반과 기초다. - 닐 도널드 월쇼",
  "우리는 우리 자신의 삶을 꾸밀 수 있을 정도로 충분한 능력을 가지고 있다. - 플라톤",
  "가장 큰 위험은 위험이 없는 것이다. - 히라키 마나베",
  "위대한 일을 이루기 위해 처음부터 완벽한 사람이 될 필요는 없다. 그러나 처음부터 시작해야 한다. - 제임스 클리어",
  "생각하는 대로 행동하지 않으면 행동하는 대로 생각하지 못한다. - 헨리 포드",
  "자유롭게 사는 사람들은 신중한 선택을 한다. 그들은 마음속에 자신에게 최고의 기회를 제공하는 것이 무엇인지 알고 있다. - 니시 표구",
  "위대한 성취가 없다면 위대한 도전이 없다. - 윌리엄 폴드",
  "위대한 성취를 이루기 위해 가장 먼저 할 일은 그것을 꿈꾸는 것이다. - 니콜라스 베라스퀴즈",
  "당신이 뭔가 원한다면 그것을 위해 최선을 다하라. - 사무엘 존슨",
  "비전은 우리에게 미래를 가르쳐 준다. - 조지 워싱턴 카버",
  "영원히 살 것처럼 꿈꾸고, 내일 죽을 것처럼 살아라. - 제임스 딘",
  "위대한 것을 이루기 위해 먼저 시작해야 한다. - 제임스 클리어",
  "끝까지 해보지 않으면 끝난 것이다. - 미구엘 데 세르반테스",
  "당신의 미래는 당신이 지금 만드는 선택에 달려있다. - 앤소니 로빈스",
  "비전은 우리의 미래를 결정한다. - 조지 워싱턴 카버",
  "결과는 당신이 선택하는 방식에 따라 결정된다. - 루이 사철",
  "미래는 우리가 만들어야 하는 것이다. - 피터 드러커",
  "우리는 우리 자신의 삶을 꾸밀 수 있을 정도로 충분한 능력을 가지고 있다. - 플라톤",
  "목표를 이루기 위한 첫 번째 단계는 당신이 시작하면서 두 번째 단계는 멈추지 않고 계속 하는 것이다. - 톰 현터",
  "자신을 믿으면 당신은 누구나 할 수 있다. - 마릴린 먼로",
  "성공적인 삶의 비밀은 모두가 원하는 것을 주는 것이다. - 사무엘 레인드",
  "아무리 위대한 목표라도 그것을 실행하지 않으면 아무런 가치가 없다. - 바이론 피터스",
  "우리의 소망과 꿈을 벗어난다면, 인생은 너무 희망차지 않을까? - 아니스 네넬 베르나르",
  "자신을 믿으면, 우리는 우리 자신을 이길 수 있다. - 윌리엄 셰익스피어",
  "당신이 보지 못하는 게 더 많다는 사실에 깨닫게 될 때 당신의 인생이 더 풍요로워질 것이다. - 헨리 데이비드 소로",
  "성공은 행동하는 사람들의 결과이다. - 조지 로버트 스탠슨",
  "지도자의 기본은 위기와 오해를 기회와 확신으로 바꾸는 것이다. - 존 케네디",
  "성공은 최고를 준비된 자에게 돌아간다. - 세션 주",
  "가장 큰 위험은 위험이 없는 것이다. - 히라키 마나베",
  "성공한 사람들은 평범한 사람들이 실패하는 것을 두려워하지 않는다. - 그레이터 노이스",
  "완벽함이란 더 이상 어떤 개선의 여지가 없는 상태가 아니다. - 프리드리히 도멜",
  "성공하려면 지금 당장 시작하라. - 스타팅 링컨",
  "미래는 우리가 만들어야 하는 것이다. - 피터 드러커",
  "삶은 아름다운 건물을 지을 때와 같다. 가장 먼저 지어야 하는 건 기반과 기초다. - 닐 도널드 월쇼",
  "당신이 뭔가 원한다면 그것을 위해 최선을 다하라. - 사무엘 존슨",
  "자유롭게 사는 사람들은 신중한 선택을 한다. 그들은 마음속에 자신에게 최고의 기회를 제공하는 것이 무엇인지 알고 있다. - 니시 표구",
  "위대한 성취가 없다면 위대한 도전이 없다. - 윌리엄 폴드",
  "위대한 성취를 이루기 위해 먼저 시작해야 한다. - 제임스 클리어",
  "끝까지 해보지 않으면 끝난 것이다. - 미구엘 데 세르반테스",
  "당신의 미래는 당신이 지금 만드는 선택에 달려있다. - 앤소니 로빈스",
  "비전은 우리에게 미래를 가르쳐 준다. - 조지 워싱턴 카버",
  "영원히 살 것처럼 꿈꾸고, 내일 죽을 것처럼 살아라. - 제임스 딘",
];

function phrase() {
  let phrase = $("#phrase");
  const randomNum = Math.floor(Math.random() * 157 + 1);
  phrase[0].innerText = empoweringQuotes[randomNum - 1];
  $(phrase).addClass("animate__animated animate__zoomInDown");
  setTimeout(() => {
    phrase.removeClass("antimate__animated animate__zoomInDown");
  }, 1000);
}
