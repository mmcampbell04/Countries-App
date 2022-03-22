import { useParams } from "react-router-dom";

export default function Details() {
  let params = useParams();
  return <h2>{params.countryName} Details page</h2>;
}
