import style from "./Cartproduct.module.css"
import nivea from "../../assets/nivea.svg"
import glow from "../../assets/glow.svg"
import milk from "../../assets/milk.svg"
import { Link } from "react-router-dom";


const Cartproduct = () => {
  return (
    <main>
        <div className={style.wrapper}>
            <div className={style.productselect}>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
            </div>
            <div className={style.productselectdetails}>
                <div className={style.subdetails}>
                <div><img src={nivea} alt="" /></div>
                <div>E45 moisturizing lotion</div>
                </div>
                <div>₦10,690.00</div>
                <div className={style.quantity}>
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                </div>
                <div>₦10,690.00</div>
            </div>

            {/* SECOND SELECTED PRODUCT */}


            <div className={style.productselectdetails}>
                <div className={style.subdetails}>
                <div><img src={glow} alt="glowproduct" /></div>
                <div>E45 moisturizing lotion</div>
                </div>
                <div>₦10,690.00</div>
                <div className={style.quantity}>
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                </div>
                <div>₦10,690.00</div>
            </div>

            {/* third SELECTED PRODUCT */}
            <div className={style.productselectdetails}>
                <div className={style.subdetails}>
                <div><img src={milk} alt="milkproduct" /></div>
                <div>E45 moisturizing lotion</div>
                </div>
                <div>₦10,690.00</div>
                <div className={style.quantity}>
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                </div>
                <div>₦10,690.00</div>
            </div>
         <div className={style.clear} ><button  >CLEAR CART</button></div>
         
        </div>
        <div className={style.balance}>
            <div className={style.total}>
                <span>TOTAL</span>
                <span>₦53,660.00 </span>
            </div>
            <div className={style.checkout}>
            <Link to="/Checkout"><a href="">CHECK OUT</a></Link>
            </div>
         </div>
    </main>
  )
}

export default Cartproduct;