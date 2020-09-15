<script src="js/wow.min.js"></script>
    new WOW().init();
// animation

function myFunction() {
    var x = document.getElementById("#myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
//   mobile menu

<script src="../package/swiper-bundle.min.js"></script>
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//  gallery 

<script type="text/javascript" src="http://dapi.kakao.com/v2/maps/sdk.js?appkey=	e525f61fd8aef576aff4fd40a9667ba2"></script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
 mapOption = { 
    center: new kakao.maps.LatLng(37.801554, 126.874016), // 지도의 중심좌표
    level: 4 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new kakao.maps.LatLng(37.801554, 126.874016); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition,
image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
'    <span class="title">벽초지 수목원</span>' +
'  </a>' +
'</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.801554, 126.874016);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
map: map,
position: position,
content: content,
yAnchor: 1 
});
// section05 map

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// section05 tab menu


        /**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
        if (jQuery(window).width() > 0) {
          jQuery(window).on("scroll",function(ev){
              if(jQuery(window).scrollTop() > 150 ) { /**높이 픽셀 조정**/
                  jQuery('.menu_box').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
              }
              else{
                  jQuery('.menu_box').removeClass('fixed');
              }
              return false;
          });
          }
          
          /**마우스 부드럽게 해당위치로 이동**/
          $(function(){
             $('a[href^=#]').click(function() {
                var speed = 800;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $('body,html').animate({scrollTop:position}, speed, 'swing');
                return false;
             });
          });