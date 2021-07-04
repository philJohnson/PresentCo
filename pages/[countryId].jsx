import Link from "next/link";
import Image from "next/Image";
import Head from 'next/head'
import { useRouter } from "next/router";
import { getCountry } from "../utils/getCountry";
import Map from "../components/Map";
import { Box, Grid, Typography, Breadcrumbs } from "@material-ui/core";

const CountryPage = () => {
  const router = useRouter();
  const { countryId } = router.query;
  const country = getCountry(countryId);

  if (country) {
    return (
      <div>
        <Head>
          <title>{country.name}</title>
          <meta name="description" content={`details for ${country.name}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box my={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link href="/">Countries</Link>
                <Typography color="textPrimary">{country.name}</Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h3" component="h1" gutterBottom>
                {country.name}
              </Typography>
              {country.capital && (
                <Typography variant="h5">
                  <strong>Capital:</strong> {country.capital}
                </Typography>
              )}
              {country.population && (
                <Typography variant="h5">
                  <strong>Population:</strong> {country.population}
                </Typography>
              )}
              {country.demonym && (
                <Typography variant="h5">
                  <strong>Demonym:</strong> {country.demonym}
                </Typography>
              )}
            </Grid>
            <Grid item xs={4}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image
                  alt={`Flag of ${country.name}`}
                  style={{ maxWidth: "100%" }}
                  layout="fill"
                  objectFit="contain"
                  src={country.flag}
                />
              </div>
            </Grid>
            {country.latlng && country.latlng.length > 0 && (
              <Grid item xs={12}>
                <Map
                  center={{ lat: country.latlng[0], lng: country.latlng[1] }}
                  locationName={country.name}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    );
  }
  return null;
};

export default CountryPage;
