import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { getCountry } from '../utils/getCountry'

const CountryPage = () => {
  const router = useRouter()
  const { countryId } = router.query
  const country = getCountry(countryId);
  
  if(country){
    return (
      <div className={styles.container}>
        <h1>{country.name}</h1>
      </div>
    )
  }
  return null;
}

export default CountryPage;