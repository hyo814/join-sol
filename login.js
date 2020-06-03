//fetch() 함수는 URL 을 인자로 받고 응답을 처리하기 위한 promise 를 반환합니다. 응답을 처리할 때 Response 객체를 이용할 수 있습니다.
const login = () => {
    const ID = document.getElementById("id").value; //id가 id인 것을 찾아서 값을 받고
    const PASSWORD = document.getElementById("password").value; //id가 password 인 것을 찾아서 값을 받는다
    if (!ID) alert("아이디를 입력해주세요"); //아이디가 누락되지 않게 not =! 이렇게 한다.
    else if (!PASSWORD) alert("비밀번호를 입력해주세요");
    else {
        let url = 'https://fan.catholic.ac.kr:5000/login'; //api를 받아옵시다.
        let data = { // key가 선언되었음 id 와 패스워드
            id: ID,
            password: PASSWORD
        };
        //Fetch API 는 3개의 인터페이스를 도입합니다. 바로 Headers, Request, Response 인터페이스입니다.
        fetch(url, {
                method: 'POST', // post 방식 : 비밀번호 처럼 중요한 정보이기 때문에 주소창에 보여지면 안된다.
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(response => {
                if (response.message) alert("message: " + response.message + '\n' + "name: " + response
                    .name) //전달 받은 값에 대하여 메시지를 다시 돌려주고 이름이 뜨게 하는 형식
                else alert(JSON.stringify(response)) //응답에 대한 값
            })
            .catch(error => console.error('Error:', error));
    }
}
