// animation01.html
// item에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
//변수
const  item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');

//변수테스트
console.log(item1, item1Img);

//이벤트
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout',item1ImgOut);

//함수
function item1ImgSrc() {
    item1Img.src = 'https://d3ha2047wt6x28.cloudfront.net/UX3oyNWTtmI/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjUwNTE5XzE3NDc2MTgzOTk1NTA1OTZtLmpwZw';
}
function item1ImgOut() {
    item1Img.src= 'https://d3ha2047wt6x28.cloudfront.net/VNfZAzl20zE/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjUwNTE5XzE3NDc2MTgzOTk2NzgyOTBtLmpwZw';
}