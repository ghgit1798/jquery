$(document).ready(function() {
    // 지구 이미지 웹요소(노드) 찾아서 저장
    var $earth = $("#earth");
    // 버튼에 이벤트 등록. (5초동안 left값 480px로 설정하는 것이 움직이는 애니메이션 효과로 발생)
    // 버튼을 클릭하면 콜백함수가 실행된다.
    $("#btnStart").click(function() {
        $earth.animate({
            left : "480px"
        }, 5000);
    })
})