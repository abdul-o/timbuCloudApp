
import Flyer from "../components/flyer/Flyer";
import Header from "../layout/header/Header";
import Selection from "../components/selection/Selection"
import Product from "../components/product/Product";
import Footer from "../layout/footer/Footer";


const Home = () =>{
    return(
    <div>
        < Header />
        < Flyer />
        < Selection />
        < Product />
        < Footer />


        
    </div>
    );
};
export default Home;