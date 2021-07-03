import { useEffect } from "react";
import { useCountries } from "../hooks/useCountries";
import { useSetRecoilState } from "recoil";
import { countriesState } from "../atoms";
import Backdrop from '@material-ui/core/Backdrop';
import Container from '@material-ui/core/Container';

import CircularProgress from '@material-ui/core/CircularProgress';


const Layout = ({children}) =>{

  const setCountries = useSetRecoilState(countriesState);
  const { isLoading, error, data } = useCountries();

  useEffect(() => {
    setCountries(data);
  }, data);

  if (isLoading) return <Backdrop open={true}><CircularProgress /></Backdrop>;

  if (error) return "An error has occurred: " + error.message;
  
  return <Container maxWidth="md">
    {children}
  </Container>
}
export default Layout;