import Link from "next/link";
import { useRecoilValue } from "recoil";
import { countriesSearchState } from "../../atoms";
import { paginatedCountriesState } from "../../selectors";

import { List, ListItem, ListItemText, Divider, Box } from "@material-ui/core";

const Countries = () => {
  const countries = useRecoilValue(paginatedCountriesState);
  const searchValue = useRecoilValue(countriesSearchState);

  if ((!countries || countries.length === 0) && searchValue) {
    return `no countries found for ${searchValue}`;
  }

  return (
    <Box bgcolor="background.paper" mb={2}>
      <List>
        {countries?.map((country, key) => (
          <div key={key}>
            <ListItem button>
              <Link href={`/${encodeURIComponent(country.alpha3Code)}`}>
                <ListItemText component='a' primary={country.name} />
              </Link>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
};

export default Countries;
