import humanface from "../../assets/humanface.svg";
import Rectangle from "../../assets/Rectangle.svg"

import style from "./Flyer.module.css";

const Flyer = () => {
  return (
    <section>
        <div className={style.flyer}>
            <div className={style.brand}>
                <h1>BUYRITE</h1>
                <hr /> <h6>Every Brand in one space</h6>
            </div>
            <div className={style.humanface}>
                <img src={humanface} alt="" />
            </div>
        </div>
        
    </section>
  );
};

export default Flyer;