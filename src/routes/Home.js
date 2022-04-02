import Inputs from "../components/Inputs";
import CountriesList from "../components/CountriesList";
import Pagination from "../components/Pagination";
import { Main } from "../components/styles/Layouts.styled";

export default function Home() {
  return (
    <Main>
      <Inputs />
      <CountriesList />
      <Pagination />
    </Main>
  );
}
