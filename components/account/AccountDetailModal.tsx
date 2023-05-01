import React, { useState } from "react";
import { Modal } from "components/modal";
import { ModalContent } from "components/modal/ModalContent";
import { EMeal } from "types";
import RegisterForm from "components/register/RegisterForm";
import ButtonForm from "components/ui/ButtonForm";
import styled from "styled-components";
import Image from "next/image";
//todo:디자인수정하기
interface AccountDetailModalProps {
  isModalVisible: boolean;
  data: EMeal;
  handleModalClose: () => void;
}
const AccountDetailModal = ({
  isModalVisible,
  handleModalClose,
  data,
}: AccountDetailModalProps) => {
  const [kind, setKind] = useState<"read" | "edit">("read");
  return (
    <>
      {kind === "read" ? (
        <Modal show={isModalVisible} onClose={handleModalClose}>
          <ModalContent title={data.menu} onClose={handleModalClose}>
            <Div>
              <SubDiv>
                {data.image && (
                  <Image
                    src={data.image}
                    width={100}
                    height={100}
                    alt="mealImage"
                  />
                )}
                {data.cost && <span>가격: {data.cost}</span>}
                {data.restaurant && <span>장소 : {data.restaurant}</span>}
                {data.content && <span>메모: {data.content}</span>}
                <ButtonWrapper>
                  <ButtonForm
                    onClick={() => {
                      setKind("edit");
                      // handleModalClose();
                    }}
                    text="수정하기"
                  />
                  <ButtonForm onClick={() => setKind("edit")} text="삭제하기" />
                </ButtonWrapper>
              </SubDiv>
            </Div>
          </ModalContent>
        </Modal>
      ) : (
        <Modal show={kind === "edit"} onClose={handleModalClose}>
          <ModalContent
            title=""
            onClose={() => {
              handleModalClose();
            }}
          >
            <RegisterForm
              isEdit={true}
              data={data}
              setIsEdit={() => setKind("read")}
            />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default AccountDetailModal;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  position: relative;
  padding: 1rem 0;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
`;
