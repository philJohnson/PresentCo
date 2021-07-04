import Head from "next/head";
import Countries from "../components/countries";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchCountries } from "../hooks/useCountries";
import { Box, Grid, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Country List</title>
        <meta
          name="description"
          content="Get a list of countries and output details"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box my={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" gutterBottom>
              Countries
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <Countries />
          </Grid>
          <Grid item xs={12}>
            <Pagination />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["countries"], () => fetchCountries());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
