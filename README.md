# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 폴더명 영문으로 의미있게 작성하기
2. `index.html`, `REAMDE.md` 생성
3. `styles` , `scripts`,`images` 폴더생성
4. `styles/reset.css`, `styles`
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상(버튼, 링크, 이미지 등),
보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
 * `<button onclick="클릭 시 실행되는 함수">`
 * 함수 : 2번 이상 반복되는 실행내용
  * 함수 생성과 호출을 각각 다르게 구분함.
  * 함수 생성 : `function 함수명(){함수 호출 시 반복실행할내용}` 생성만으론 절대 결과가 실행되지 않음. 반드시 호출 별도로 진행해야함.
  * 함수 호출 : 위 함수생성 바깥쪽에 `함수명()` 작성,
  이벤트와 함께 사용하기도 함. `onclick="함수명()"`
### 변수 (데이터(객체)를 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let uesr_name = '홍길동';`
// user_name이란 변수를 생성해서/'홍길동' 이란 데이터를 대입한다.
1. `var` : 오래된 선언방식, 이름 중복 가능
2. `let` : 이름 중복 불가능, 재사용 (수정) 가능
3. `const` : 이름 중복 불가능, 재사용 (수정) 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./ cat.mp4" autoplay>`
* `객체.속성;`
  * 객체의 속성 읽기
  * `a.href;`
  * `video src;`, `video.autoplay;`
  * `span.textContent` // span태그 안 내용을 읽는다.<span>내용</span>
  * `input.value;` //value는 input전용속성으로 다른 태그에 사용불가
* `객체.속성 = '값`;`
  * 객체의 속성 값을 대입한다.
  * 대입시 기존값이 있으면 ? 기존값 자동제거되고 새로운값 대입
  * `a.href='./reset.css';`
  * `video.src= './dog.mp4';`
  * `video.autoplay = 0;`
  * `<span>0</span>` // span의 내용 0을 -> 1로 변경
    * `span.textContent = 1;` // span원래내용은 제거하고 1 새로대입
    * `span.textContent = span.textContent+1;` // 기존내용에 +1 대입
  * `<input tyoe="text" value="1">` // input의 내용 1 -> 2로 변경
    * `input.value = 2;` // input 원래내용1을 제거하고 새로2대입
    * `input.value = input.value +2;` // 기존input의값에 +2 대입
* `객체.함수();`
  * 객체를 실행한다.
  * `객체.함수() = '값';` (X)
* `이벤트="함수()";`
  * 이벤트 동작 시 특정 함수를 실행한다.
  * `<태그 onclick="funcl();">` // 함수호출 
  * 위 작성 전 준비사항 : `function, funcl(){반복실행명}` // 함수생성
## DOM( document object model)
### JS 에서 제어하고 싶은 HTML요소가 있을 경우 순서
1. 제어하고 싶은 HTML 수와 클래스, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연산자로 객체 대입하기
   * `documen,querySelector('HTML대상');`
   * `const 변수명=documen,querySelector('대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
   * `console.log(검사하고싶은변수명);`
   * 콘솔 결과 화면에서 `null` 또는 오류가 없는지 확인
   * `null` 이 뜬다면 HTML script 작성위치로 가서 defer 속성추가
      * `<script src='경로' defer></script>` 
# form 태그 관련 요약정리
## form태그와 action, mehtod
* form : 검색, 로그인, 회원가입 특정 주제로 묶여있는 그룹
* action : 그룹에 작성 또는 선택된 사용자 정보를 전달하는 서버 주소
* mehtod : 데이터를 보내는 전송 방식 (get, post(보안))
## input 태그와 type
* input : 사용자가 입력, 선택할떄 작성하는 시작 태그 (type 필수) 
* type : **작성 종류에 따라** type 선택
## name 속성
* name : action으로 저장된 사이트서버 위치에 사용자가 입력한 데이터를 전송할떄 구분하는 데이터 명칭
* 이름 tom, 아이디 tom 값만 보고 구분을 정확히 못하는 경우 name 필수
* userName => tom, userId=>tom `name="userNmae"`
* 선택양식에서는 name 의미를 그룹명으로 사용, 위 작성 내용은 입력양식 해당
## value 속성
*  입력양식 : 처음 부터 입력된 초기값(쇼핑물의 수량1)
*  선택양식 : 위 name처럼 데이터 구분명칭
## id, class 속성
* js, css에서 구분하기 위한 디자인 또는 동적 프로그래밍 용도 이름


