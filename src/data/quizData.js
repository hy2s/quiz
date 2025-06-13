const quizData = {
  categories: ["가수", "노래", "영화", "드라마"],
  quizzes: [
    // 가수 카테고리 (10문제)
    {
      id: 1,
      category: "가수",
      difficulty: "쉬움",
      question: "🎤 세계적으로 사랑받는 K-POP 그룹으로, 강렬한 퍼포먼스와 감성적인 노래로 전 세계 팬들의 마음을 사로잡은 7인조 보이밴드. 'LOVE YOURSELF' 시리즈로 자기 사랑과 치유 메시지를 전파하며 큰 영향력을 끼쳤다.",
      choices: ["방탄소년단", "엑소", "세븐틴", "NCT"],
      correct: "방탄소년단"
    },
    {
      id: 2,
      category: "가수",
      difficulty: "보통",
      question: "🎤 ‘Good Boy’와 ‘I’m So Hot’ 등 강렬한 콘셉트로 유명한 걸그룹은?",
      choices: ["마마무", "블랙핑크", "레드벨벳", "트와이스"],
      correct: "마마무"
    },
    {
      id: 3,
      category: "가수",
      difficulty: "어려움",
      question: "🎤 ‘가을 타나봐’와 ‘그때 헤어지면 돼’ 등 발라드로 사랑받는 가수는?",
      choices: ["아이유", "백예린", "헤이즈", "박효신"],
      correct: "백예린"
    },
    {
      id: 4,
      category: "가수",
      difficulty: "쉬움",
      question: "🎤 ‘Fantastic Baby’로 대표되는 YG 소속의 보이그룹은?",
      choices: ["빅뱅", "샤이니", "비스트", "아이콘"],
      correct: "빅뱅"
    },
    {
      id: 5,
      category: "가수",
      difficulty: "보통",
      question: "🎤 ‘Dalla Dalla’로 데뷔해 신인상 수상한 걸그룹은?",
      choices: ["ITZY", "여자친구", "오마이걸", "있지"],
      correct: "ITZY"
    },
    {
      id: 6,
      category: "가수",
      difficulty: "어려움",
      question: "🎤 ‘너를 위해’와 ‘비 오는 날 듣기 좋은 노래’로 알려진 싱어송라이터는?",
      choices: ["정승환", "폴킴", "로이킴", "성시경"],
      correct: "정승환"
    },
    {
      id: 7,
      category: "가수",
      difficulty: "쉬움",
      question: "🎤 ‘Kill This Love’와 ‘How You Like That’의 주인공 걸그룹은?",
      choices: ["블랙핑크", "트와이스", "마마무", "레드벨벳"],
      correct: "블랙핑크"
    },
    {
      id: 8,
      category: "가수",
      difficulty: "보통",
      question: "🎤 ‘사랑했지만’과 ‘비상’을 부른 발라드 가수는 누구일까?",
      choices: ["임창정", "김범수", "이승철", "박효신"],
      correct: "임창정"
    },
    {
      id: 9,
      category: "가수",
      difficulty: "어려움",
      question: "🎤 ‘Solo’와 ‘잊어버리지 마’로 유명한 여성 솔로 가수는?",
      choices: ["아이유", "청하", "선미", "태연"],
      correct: "청하"
    },
    {
      id: 10,
      category: "가수",
      difficulty: "보통",
      question: "🎤 ‘에너제틱’으로 데뷔해 꾸준한 인기를 얻고 있는 남성 아이돌 그룹은?",
      choices: ["세븐틴", "몬스타엑스", "NCT 127", "스트레이 키즈"],
      correct: "세븐틴"
    },

    // 노래 제목 카테고리 (10문제)
    {
      id: 11,
      category: "노래",
      difficulty: "쉬움",
      question: "🎵 BTS가 세계적으로 히트시킨 노래 제목은?",
      choices: ["Dynamite", "DNA", "Butter", "MIC Drop"],
      correct: "Dynamite"
    },
    {
      id: 12,
      category: "노래",
      difficulty: "보통",
      question: "🎵 ‘나만 봐’라는 가사가 인상적인 2010년대 대표 발라드곡은?",
      choices: ["미안해 널 미워해", "그대라는 사치", "나만 봐", "첫눈처럼 너에게 가겠다"],
      correct: "나만 봐"
    },
    {
      id: 13,
      category: "노래",
      difficulty: "어려움",
      question: "🎵 ‘눈, 코, 입’이라는 가사가 유명한 발라드 곡은?",
      choices: ["태양", "김범수", "박효신", "성시경"],
      correct: "태양"
    },
    {
      id: 14,
      category: "노래",
      difficulty: "쉬움",
      question: "🎵 ‘Gee’로 데뷔해 큰 인기를 끈 걸그룹의 대표곡은?",
      choices: ["Gee", "Genie", "Tell Me", "Oh!"],
      correct: "Gee"
    },
    {
      id: 15,
      category: "노래",
      difficulty: "보통",
      question: "🎵 ‘다시 만난 세계’로 데뷔한 걸그룹의 히트곡은?",
      choices: ["다시 만난 세계", "소녀시대", "Into The New World", "Oh!"],
      correct: "다시 만난 세계"
    },
    {
      id: 16,
      category: "노래",
      difficulty: "어려움",
      question: "🎵 ‘사계’라는 제목의 앨범을 낸 솔로 가수는?",
      choices: ["아이유", "백예린", "헤이즈", "이하이"],
      correct: "아이유"
    },
    {
      id: 17,
      category: "노래",
      difficulty: "쉬움",
      question: "🎵 ‘어떤가요’를 부른 유명 발라드 가수의 대표곡 제목은?",
      choices: ["어떤가요", "눈의 꽃", "비처럼 음악처럼", "소녀"],
      correct: "어떤가요"
    },
    {
      id: 18,
      category: "노래",
      difficulty: "보통",
      question: "🎵 BTS가 ‘Love Yourself’ 앨범에 수록한 곡으로, 사랑을 주제로 한 노래 제목은?",
      choices: ["Answer: Love Myself", "Serendipity", "Epiphany", "Fake Love"],
      correct: "Answer: Love Myself"
    },
    {
      id: 19,
      category: "노래",
      difficulty: "어려움",
      question: "🎵 ‘비밀의 화원’ 앨범으로 유명한 여성 솔로 가수의 히트곡은?",
      choices: ["비밀의 화원", "좋은 날", "나만 몰래", "너의 의미"],
      correct: "비밀의 화원"
    },
    {
      id: 20,
      category: "노래",
      difficulty: "쉬움",
      question: "🎵 ‘LALISA’로 솔로 데뷔한 K-POP 걸그룹 멤버는 누구의 이름인가?",
      choices: ["리사", "제니", "로제", "지수"],
      correct: "리사"
    },

    // 영화 카테고리 (10문제)
    {
      id: 21,
      category: "영화",
      difficulty: "쉬움",
      question: "🎬 봉준호 감독이 만든 사회 풍자 영화로, 칸 영화제 황금종려상을 수상한 작품은?",
      choices: ["기생충", "괴물", "설국열차", "옥자"],
      correct: "기생충"
    },
    {
      id: 22,
      category: "영화",
      difficulty: "보통",
      question: "🎬 ‘태극기 휘날리며’와 ‘실미도’를 연출한 감독은 누구일까?",
      choices: ["강제규", "봉준호", "박찬욱", "임권택"],
      correct: "강제규"
    },
    {
      id: 23,
      category: "영화",
      difficulty: "어려움",
      question: "🎬 ‘올드보이’로 칸 영화제 심사위원 대상을 받은 감독은 누구인가?",
      choices: ["박찬욱", "봉준호", "김기덕", "임권택"],
      correct: "박찬욱"
    },
    {
      id: 24,
      category: "영화",
      difficulty: "쉬움",
      question: "🎬 ‘신과함께’ 시리즈의 원작 웹툰 작가는 누구일까?",
      choices: ["주호민", "김성민", "박용제", "윤태호"],
      correct: "주호민"
    },
    {
      id: 25,
      category: "영화",
      difficulty: "보통",
      question: "🎬 2019년 한국 박스오피스 1위를 기록한 영화는?",
      choices: ["극한직업", "기생충", "어벤져스: 엔드게임", "백두산"],
      correct: "극한직업"
    },
    {
      id: 26,
      category: "영화",
      difficulty: "어려움",
      question: "🎬 ‘버닝’(Burning)이라는 영화의 감독은 누구인가?",
      choices: ["이창동", "봉준호", "박찬욱", "김기덕"],
      correct: "이창동"
    },
    {
      id: 27,
      category: "영화",
      difficulty: "쉬움",
      question: "🎬 ‘겨울왕국’ 시리즈",
      choices: ["Let It Go", "Do You Want to Build a Snowman?", "Into the Unknown", "For the First Time in Forever"],
      correct: "Let It Go"
    },
    {
      id: 28,
      category: "영화",
      difficulty: "보통",
      question: "🎬 ‘부산행’에서 좀비가 출몰하는 장소는?",
      choices: ["기차", "지하철", "공항", "학교"],
      correct: "기차"
    },
    {
      id: 29,
      category: "영화",
      difficulty: "어려움",
      question: "🎬 ‘올드보이’ 주인공의 복수 대상 이름은?",
      choices: ["우진", "도재명", "민석", "성훈"],
      correct: "도재명"
    },
    {
      id: 30,
      category: "영화",
      difficulty: "쉬움",
      question: "🎬 ‘명량’에서 이순신 장군을 연기한 배우는 누구인가?",
      choices: ["최민식", "송강호", "하정우", "이병헌"],
      correct: "최민식"
    },

    // 드라마 카테고리 (10문제)
    {
      id: 31,
      category: "드라마",
      difficulty: "쉬움",
      question: "🩺 누군가는 태어나고 누군가는 삶을 끝내는, 인생의 축소판이라 불리는 병원에서 평범한 듯 특별한 하루하루를 살아가는 사람들과 눈빛만 봐도 알 수 있는 20년지기 친구들의 케미스토리를 담은 드라마는?",
      choices: ["슬기로운 의사생활", "낭만닥터 김사부", "골든타임", "시그널"],
      correct: "슬기로운 의사생활"
    },
    {
      id: 32,
      category: "드라마",
      difficulty: "보통",
      question: "👩‍🎓 고등학생들의 현실적인 우정과 사랑, 그리고 성장기를 그린 드라마는?",
      choices: ["응답하라 1988", "스카이 캐슬", "학교 2013", "이태원 클라쓰"],
      correct: "응답하라 1988"
    },
    {
      id: 33,
      category: "드라마",
      difficulty: "어려움",
      question: "⚖️ 법정과 인간의 이야기를 섬세하게 다룬 드라마로, 변호사와 검사 간의 치열한 대결을 그린 작품은?",
      choices: ["미스 함무라비", "굿 와이프", "이태원 클라쓰", "검법남녀"],
      correct: "미스 함무라비"
    },
    {
      id: 34,
      category: "드라마",
      difficulty: "쉬움",
      question: "👻 신비한 능력을 가진 여자와 평범한 남자의 로맨스를 그린 드라마는?",
      choices: ["도깨비", "호텔 델루나", "사랑의 불시착", "태양의 후예"],
      correct: "도깨비"
    },
    {
      id: 35,
      category: "드라마",
      difficulty: "보통",
      question: "🏙️ 청춘들의 자립과 성공기를 그린 드라마로, 작은 포차에서 시작해 사업가가 되는 주인공의 이야기다?",
      choices: ["이태원 클라쓰", "청춘시대", "미생", "맨투맨"],
      correct: "이태원 클라쓰"
    },
    {
      id: 36,
      category: "드라마",
      difficulty: "어려움",
      question: "🕵️‍♂️ 1980~90년대 실제 사건을 배경으로 한 추리·범죄 드라마는?",
      choices: ["시그널", "비밀의 숲", "보이스", "나의 아저씨"],
      correct: "시그널"
    },
    {
      id: 37,
      category: "드라마",
      difficulty: "쉬움",
      question: "💼 대기업의 암투와 권력 싸움을 다룬 드라마는?",
      choices: ["스카이 캐슬", "펜트하우스", "황금빛 내 인생", "열혈사제"],
      correct: "스카이 캐슬"
    },
    {
      id: 38,
      category: "드라마",
      difficulty: "보통",
      question: "🕊️ 전쟁터에서 피어난 사랑을 그린 드라마로, 특전사 대위와 의사 여주인공의 이야기다?",
      choices: ["태양의 후예", "사랑의 불시착", "눈이 부시게", "호텔 델루나"],
      correct: "태양의 후예"
    },
    {
      id: 39,
      category: "드라마",
      difficulty: "어려움",
      question: "🔮 시간을 거슬러 과거로 돌아가 운명을 바꾸려는 주인공의 이야기를 담은 드라마는?",
      choices: ["나의 아저씨", "보이스", "라이프 온 마스", "미스터 션샤인"],
      correct: "라이프 온 마스"
    },
    {
      id: 40,
      category: "드라마",
      difficulty: "쉬움",
      question: "👨‍⚖️ 대한민국 최고 로펌을 배경으로 펼쳐지는 법정 드라마는?",
      choices: ["당신이 잠든 사이에", "검법남녀", "로스쿨", "미스 함무라비"],
      correct: "로스쿨"
    }
  ]
}

export default quizData;