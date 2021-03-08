
import Head from 'next/head'
import { FucusHome } from '../components/FucusHome'


function Home() {
  return (

        <div>
          <Head>
            <title>
             Fucus | Study
            </title>
          </Head>
   
         
            <div>
                <FucusHome/>
            </div>
          
 
        </div>
    
  );
}

export default Home;
