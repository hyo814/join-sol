//fetch() 함수는 URL 을 인자로 받고 응답을 처리하기 위한 promise 를 반환합니다. 응답을 처리할 때 Response 객체를 이용할 수 있습니다.
const join = () => {
    const NAME = document.getElementById("name").value;// id 값에서 name을 찾아서 값을 받을려고 한다.(이하동일)
    const ID = document.getElementById("id").value;
    const PASSWORD = document.getElementById("password").value;
    const PASSWORDCHECK = document.getElementById("passwordcheck").value;
    if (!NAME) alert("이름을 입력해주세요");// 값이 들어가 있지 않으면 출력하지 않고 오류 뜨게 하기
    else if(!ID) alert("아이디를 입력해주세요");
    else if(!PASSWORD) alert("비밀번호를 입력해주세요");
    else if (PASSWORD != PASSWORDCHECK) alert("두 비밀번호가 다릅니다!");// if로 나열한 결과 자동으로 로그인 창으로 넘어가서 else로 대체 사용
    else{
        let url = 'https://fan.catholic.ac.kr:5000/join';//api를 받아서
        let data = {//데이터에 어떠한 방식으로 넣을 것이나면 name,id,password,check 순으로 key를 순서대로 받을 예정
            name: NAME,// 파라미터를 받습니다. 어떻게? 왼쪽은 getElementById : const 함수 라고 이해했음
            id: ID,
            password: PASSWORD,
            passwordCheck: PASSWORDCHECK
        };
 //Fetch API 는 3개의 인터페이스를 도입합니다. 바로 Headers, Request, Response 인터페이스입니다.
        fetch(url, {
            method: 'POST', // post 방식 : 비밀번호 처럼 중요한 정보이기 때문에 주소창에 보여지면 안된다.
            body: JSON.stringify(data), //string 으로 문자열 형식으로 이해 했음
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                if (response.msg == "Duplicate ID exists") alert("중복되는 아이디가 존재합니다.")
                //1차: code=3이라는 식을 보고 따라하고자 했으나 그당시에 서버 꺼짐을 오류로 이해해서 제거
                //2차: response.status를 이용하여 하고자 했으나 alert가 안떠서 문제
                //3차: 그래서 1차의 응용이라 생각하고 플라스크?에 있는 msg 형태를 따옴
                else if (response.msg == "success"){
                    alert("회원가입 성공!")//return jsonify({"msg": "success"}) 이 부분을 퍼옴
                    location.href = "./login.html"// 로그인 창으로 넘어가주기>>  처음 화면으로 이동
                }
            })
            .catch(error => console.error('Error:', error));//에러에 대해서!
    }
}
