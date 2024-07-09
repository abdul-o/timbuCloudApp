import style from "./Product.module.css"

import DrTeel from "../../assets/DrTeel.svg";
import milk from "../../assets/milk.svg";
import dove from "../../assets/dove.svg";
import bath from "../../assets/bath.svg";
import nivea from "../../assets/nivea.svg";
import glow from "../../assets/glow.svg";
import love from "../../assets/love.svg";
import dovee from "../../assets/dovee.svg";
import cera from "../../assets/cera.svg";
import dove3 from "../../assets/dove3.svg";
import e445 from "../../assets/e445.svg";
import Cart from "../../assets/Cart.svg";
import palmer from "../../assets/palmer.svg";
import alpha from "../../assets/alpha.svg";
import handandbody from "../../assets/handandbody.svg";
import love2 from "../../assets/love2.svg";
import vasline from "../../assets/vasline.svg";




const Product = () => {
  return (
    <section>
        <div className={style.productwrapper}>
            <div className={style.groupOne}>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={DrTeel} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Dr Teels
                    </span>
                    <span className={style.productName}> moisturizing Bath & body oil</span>
                    <span className={style.price}>₦5,690.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={dove} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Dove caring bath
                    </span>
                    <span className={style.productName}> </span>
                    <span className={style.price}>₦9,990.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={milk} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Milk & honey gold sugar
                    
                    </span>
                    <span className={style.productName}> smoothing scrub</span>
                    <span className={style.price}>₦12,990.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={bath} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Bath salt relax
                    </span>
                    <span className={style.productName}> </span>
                    <span className={style.price}>₦20,590.00</span>
                </div>
            </div>





            {/* GROUP TWO */}

            <div className={style.groupOne}>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={nivea} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Nivea nourishing skin
                    
                    </span>
                    <span className={style.productName}> firming body lotion</span>
                    <span className={style.price}>₦3,590.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={glow} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Glow essentials fairness
                    
                    </span>
                    <span className={style.productName}>body lotion</span>
                    <span className={style.price}>₦14,490.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={love} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Love nature
                    
                    </span>
                    <span className={style.productName}> energizing body lotion</span>
                    <span className={style.price}>₦35,990.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={dovee} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Dove moisturizing hand
                    
                    </span>
                    <span className={style.productName}> wash</span>
                    <span className={style.price}>₦2,590.00</span>
                </div>
            </div>


            {/* GROUP THREE */}


            <div className={style.groupOne}>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={cera} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Cera Ve 
                    
                    </span>
                    <span className={style.productName}> daily moisturizing lotion</span>
                    <span className={style.price}>₦5,690.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={dove3} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Dove
                    
                    </span>
                    <span className={style.productName}> pampering body wash</span>
                    <span className={style.price}>₦6,690.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={e445} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>E45
                    
                    </span>
                    <span className={style.productName}> moisturizing lotion</span>
                    <span className={style.price}>₦10,690.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={palmer} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Palmer’s coco butter formula
                     
                    </span>
                    <span className={style.productName}> firming body lotion</span>
                    <span className={style.price}>₦8,590.00</span>
                </div>
            </div>


              {/* GROUP FOUR */}

              <div className={style.groupOne}>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={alpha} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Alpha skin care
                    
                    </span>
                    <span className={style.productName}>renewing body lotion</span>
                    <span className={style.price}>₦3,590.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={handandbody} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Hand and body scrub
                    </span>
                    <span className={style.productName}> </span>
                    <span className={style.price}>₦5,690.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={love2} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Love nature body lotion 
                    x
                    </span>
                    <span className={style.productName}> with sesame oil & mangolia</span>
                    <span className={style.price}>₦13,590.00</span>
                </div>
                <div className={style.productOne}>
                    <img className={style.DrTeel} src={vasline} alt="" />
                    <img className={style.cart} src={Cart} alt="" />
                    <span className={style.productName}>Vaseline coco glow lotion
                    </span>
                    <span className={style.productName}> moisturizing Bath & body oil</span>
                    <span className={style.price}>₦7,790.00</span>
                </div>
            </div>






            
        </div>
    </section>
  )
}

export default Product