import React from "react";
import { CreateCardButton, HeadCard, Heading4 } from "./styles";
import AddIcon from "@mui/icons-material/Add";

function CreateCard() {
  return (
    <>
      <HeadCard>
        <Heading4>To do List</Heading4>
        <CreateCardButton>
          <AddIcon style={{ color: "#059e0a", fontSize: "bold" }} />
        </CreateCardButton>
      </HeadCard>
    </>
  );
}
export default CreateCard;
