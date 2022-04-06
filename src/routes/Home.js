import { useContext } from "react";
import { Context } from "../Context";
import { Loader } from "../components/Loader";
import Inputs from "../components/Inputs";
import CountriesList from "../components/CountriesList";
import { Main } from "../components/styles/Layouts.styled";

export default function Home() {
  const { isLoading } = useContext(Context);
  return (
    <Main>
      <Inputs />
      {isLoading ? <Loader /> : <CountriesList />}
    </Main>
  );
}
