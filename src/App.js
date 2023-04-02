/* eslint-disable-next-line */
import './App.css';
import React, { useState, component } from 'react';
import Map from './component/Map';
import Dashboard from './component/Dashboard';
import People from './component/People';
import Building from './component/Building';

function App() {
  //버튼 색 변경 Event 코드
  let data = ["전체", "외식업", "서비스업", "소매업"];

  let [btnActive, setBtnActive] = useState("-1"); // 변수, 함수 선언

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value; // value 반환
    });
  };

  //태그 클릭 시 Content 변경 코드
  const tag = [[ 'map', '위치탐색'],
               [ 'people', '유동인구'],
               [ 'dashboard', '대시보드'],
               ['building', '공시지가']];

  //지도 화면 기본값 설정
  const [content, setContent] = useState('map');

  //버튼 클릭 시, 해당 버튼의 value 반환
  const handleClickButton = e => {
    const name = e.target.value;
    setContent(name);
  };

  //key-component 연결
  const selectComponent = {
    'map' : <Map />,
    'people' : <People />,
    'dashboard' : <Dashboard />,
    'building' : <Building />
  };

  const link = 'https://new.land.naver.com/complexes?ms=37.5663278,126.98847759884775,18&a=APT:ABYG:JGC&e=RETAIL/';

  //html 코드
  return (
    <div className="App">
      {/* header */}
      <header class="header">
        <a href='https://www.ibk.co.kr/' class="link">|기업은행 바로가기|</a>
      </header>

      {/* nav */}
      <div class="tablist">
        <img class="box" src="/img/box.png" alt="box"></img>
      </div>

      {/* content */}
      <div class="content">

        {/* aside */}
        <div class="aside">
          <div class="boxstartImg">
            <img class="boxstart" src="/img/boxstart.png" alt="boxstart"></img>
          </div>
          <div class="choicebar">
            <button class="pbtn">점포위치</button>
            <button class="cbtn">업종선택</button>
          </div>
          <div class="searchtxt">검색하거나 지도에서 위치를 선택하세요</div>
          <div class="search">
		        <input type="text" title="검색" class="search_input"></input>
		        <button type="button" class="search_button">검색</button>
	        </div>
          <div class="checkmap">
          <input type='checkbox' name='map' value='mapval' />지도에 직접 위치 선택하기
          </div>
          <div class="businessbar">
            { data.map((item, idx) => {
                return (
                  <>
                  <button
                    value={idx}
                    className={"btn" + (idx == btnActive ? "Active" : "")}
                    onClick={toggleActive}>{item}</button></>
                );
            })}
          </div>
          <div class="submit">
            <button class="submitbtn">적용</button>
          </div>
        </div>

        {/* main */}
        <div class="main">{selectComponent[content]}</div>

        {/* raside */}
        <div class="raside">
            { tag.map((item) => {
                return (
                  <>
                  <button
                    className="tag"
                    value={item[0]}
                    onClick={handleClickButton}>{item[1]}</button></>
                );
              })}
            <button class="tag" onClick={() => window.open(link, '_blank')}>
              매물 찾기</button>
        </div>

      </div>

      {/* footer */}
      <footer class="footer">
        <div class="banner">
          <div>
            <a href="https://pos.ibkbox.net/main/index.do"><img class="boxpos" src="/img/footImg.png" alt="boxpos"></img></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
