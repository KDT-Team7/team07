// 현재 위치에 대한 정보를 가져오는 함수
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

// Google Maps 초기화 및 지도 생성 함수
function initMap() {
  getCurrentLocation()
    .then((position) => {
      const mapOptions = {
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 14,
      };

      // 지도 생성
      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      // 현재 위치에 마커 생성
      //   const marker = new google.maps.Marker({
      //     position: mapOptions.center,
      //     map: map,
      //     title: "Current Location",
      //   });
    })
    .catch((error) => {
      console.error("Error occurred while getting current location:", error);
    });
}
