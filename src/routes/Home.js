import Inputs from "../components/Inputs";
import CountriesList from "../components/CountriesList";
import Pagination from "../components/Pagination";
import { Grid } from "../components/styles/Grid.styled";

export default function Home() {
  return (
    <Grid>
      <Inputs region="" searchfield="" />
      <CountriesList />
      <Pagination />
    </Grid>
  );
}
