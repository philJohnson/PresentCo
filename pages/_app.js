import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil'
import Layout from "../layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
