import { useEffect } from "react";
import { useCountries } from "../hooks/useCountries";
import { useSetRecoilState } from "recoil";
import { countriesState } from "../atoms";

const Layout = ({children}) =>{

  const setCountries = useSetRecoilState(countriesState);
  const { isLoading, error, data } = useCountries();

  useEffect(() => {
    setCountries(data);
  }, data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
  return <>
    {children}
  </>
}
export default Layout;