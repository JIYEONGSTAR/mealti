import React, { useState } from "react";
import { Modal } from "components/modal";
import { ModalContent } from "components/modal/ModalContent";
import { EMeal } from "types";
import RegisterForm from "components/register/RegisterForm";
import ButtonForm from "components/ui/ButtonForm";
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
    <Modal show={isModalVisible} onClose={handleModalClose}>
      <ModalContent title={data.menu} onClose={handleModalClose}>
        {kind === "read" ? (
          <>
            {data.menu}
            {data.cost}
            {data.restaurant}
            {data.image}
            <ButtonForm onClick={() => setKind("edit")} text="수정하기" />
            <ButtonForm onClick={() => setKind("edit")} text="삭제하기" />
          </>
        ) : (
          <RegisterForm isEdit={true} data={data} />
        )}
      </ModalContent>
    </Modal>
  );
};

export default AccountDetailModal;
