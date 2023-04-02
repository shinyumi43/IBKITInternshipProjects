import React, { useEffect } from 'react';

const { kakao } = window; //kakao is not defined 오류 해결

function Map(props) {
  //Kakao Map 코드
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
	    center: new kakao.maps.LatLng(37.566526, 126.987338), //지도의 중심 좌표
	    level: 3 //지도의 레벨(확대, 축소 정도)
    };
    //지도 생성 및 객체 반환
    const map = new kakao.maps.Map(container, options);

    //marker 객체 생성
    let marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });

    //지도 내 클릭 시 marker 생성, click event 구성
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
      //클릭한 위도, 경도 정보 획득
      var latlng = mouseEvent.latLng;

      //marker 위치를 클릭한 곳으로 이동
      marker.setPosition(latlng);

      //marker 지도 위에 표시
      marker.setMap(map);
    });

    //infoWindow 내용 설정
    var iwContent = '<div style="padding:10px;">서울 중구 을지로 82</div>',
      iwRemoveable = true; //infoWindow를 닫는 버튼 생성

    //infoWindow 생성
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });

    //marker에 click event 등록
    kakao.maps.event.addListener(marker, 'click', function() {
    //marker 위에 infoWindow 표시
    infowindow.open(map, marker);  
    });

  }, [])

    return (
        <div id="map" style={{ width : "1240px", height : "auto"}}></div>
    );
}

export default Map; //내보내기