import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Recipe } from "types";
import { ModalContent } from "components/modal/ModalContent";
import { Modal } from "components/modal";
import RecipeDetail from "./RecipeDetail";
import { SquareLogContainer } from "components/SquareLog";
interface RecipeGridItemProps {
  item: Recipe;
}
const RecipeGridItem = ({ item }: RecipeGridItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    console.log("isModalVisible변경", isModalVisible);
  }, [isModalVisible]);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <RecipeGridItemContainer onClick={() => setIsModalVisible(true)}>
        {item.imageUrl.length !== 0 ? (
          <Image
            src={item.imageUrl}
            alt=""
            width={80}
            height={80}
            style={{
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        ) : (
          <div>{item.title}</div>
        )}
      </RecipeGridItemContainer>
      <Modal show={isModalVisible} onClose={handleModalClose}>
        <ModalContent title={item.title} onClose={handleModalClose}>
          <RecipeDetail item={item} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecipeGridItem;

const RecipeGridItemContainer = styled(SquareLogContainer)``;
