

const register = () => {

return(
    <div>
        <form action="localhost:3003/regcheck" method="post" name="form">
            아이디 <input type="text" name="id" id="id"/><br/>
            패스워드 <input type="password" name="pw" id="pw"/><br/>
            패스워드확인 <input type="password" name="pw2" id="pw2"/><br/>
            이름 <input type="text" name="name" id="name"/><br/>
            생년월일 <input type="date" name="birth" id="birth" /> <br/>
            성별 <input type="radio" name="sex" id="sex" value="0"/>남성
            <input type="radio" name="sex" id="sex" value="1"/>여성 <br/>
            연락처 <input type="text" name="phone" id="phone"/> <br/>
            이메일 <input type="email" name="email" id="email"/> <br/>
            주소 <input type="text" name="address" id="address"/> <br/>
            <input type="submit"/>
        </form>
    </div>
)
}

export default register;