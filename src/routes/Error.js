import { StyledDiv } from "../components/styles/Layouts.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneSlash } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faPlaneSlash} />
      <p>There's nothing here!</p>
    </StyledDiv>
  );
}
