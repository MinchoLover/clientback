import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MyPage from "./Pages/MyPage";
import BusinessCardPage from "./Pages/BusinessCardPage";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/businesscard" element={<BusinessCardPage />} />
      </Routes>
    </Router>
  );
};

export default App;


// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [dataList, setDataList] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 입력값 추가
//     const newData = { name, price: parseInt(price || "0", 10) };
//     setDataList((prevList) => [...prevList, newData]);

//     try {
//       // 서버로 배열 전송
//       const response = await axios.post("http://172.17.217.97:8080/burgerking", newData);
//       console.log("응답 데이터:", response.data);
//       alert("데이터 전송 성공!");
//     } catch (error) {
//       console.error("데이터 전송 오류:", error);
//       alert("데이터 전송 실패!");
//     }

//     // 입력 필드 초기화
//     setName("");
//     setPrice("");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           placeholder="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           name="password"
//           placeholder="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//       <a href="/oauth2/authorization/google">구글 로그인</a>
//       <br />
//       <a href="/joinForm">회원가입 아직 안하셨나요?</a>

//       {/* 현재 데이터 목록 표시 */}
//       <h2>현재 입력된 데이터:</h2>
//       <ul>
//         {dataList.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price}원
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;