import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { StyledDiv } from "./styles/Layouts.styled";

export function Loader() {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faPlane} fade size="5x" />
    </StyledDiv>
  );
}
