import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    const loginData = {
      name: name,
      email: email,
    };

    try {
      const response = await axios.post("http://172.17.217.97:8080/oauth2/authorization/google", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("로그인 성공:", response.data);
      alert("로그인 성공!");
      // 로그인 성공 후 추가 작업 (예: 리디렉션)
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패!");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://172.17.217.97:8080/oauth2/authorization/google"; // 구글 인증 URL로 이동
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleLogin} style={{ marginTop: "10px" }}>
        Google 로그인
      </button>
      <br />
      <a href="/joinForm">회원가입 아직 안하셨나요?</a>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // 폼 기본 동작 방지

//     // POST 요청에 사용할 데이터
//     const loginData = {
//       name: name,
//       email: email,
//     };

//     try {
//       const response = await axios.post("http://172.17.217.97:8080/loginForm", loginData, {
//         headers: {
          
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("로그인 성공:", response.data);
//       alert("로그인 성공!");
//       // 로그인 성공 후 리디렉션 또는 추가 작업 수행
//     } catch (error) {
//       console.error("로그인 실패:", error);
//       alert("로그인 실패!");
//     }
//   };

//   const handleGoogleLogin = () => {
//     window.location.href = "http://172.17.217.97:8080/oauth2/authorization/google"; // 구글 인증 URL로 이동
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={name}
//           onChange={(e) => setName(e.target.value)} // 입력값 변경 핸들링
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // 입력값 변경 핸들링
//         />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={handleGoogleLogin}>구글 로그인</button>
//       <br />
//       <a href="/joinForm">회원가입 아직 안하셨나요?</a>
//     </div>
//   );
// };

// export default LoginForm;