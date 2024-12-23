import React, { useState } from "react";
import Modal from "../components/Modal"; // 모달 컴포넌트 가져오기
import BusinessCardPage from "./BusinessCardPage"; // 명함 페이지 가져오기

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); // 모달 열기
  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏠 메인 페이지입니다!</h1>
      <button
        onClick={openModal}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        명함 페이지 보기
      </button>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BusinessCardPage />
      </Modal>
    </div>
  );
};

export default MainPage;