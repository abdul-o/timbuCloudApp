import style from "./Footer.module.css"
import Line from "../../assets/Line.svg"


const Footer = () => {
  return (
    <footer>
        <div className={style.last}>
            <div className={style.catalogue}>E-catalog</div>
            <img className={style.line} src={Line} alt="" />
            <div className={style.help}>Need help?</div>
            <img className={style.line} src={Line} alt="" />
            <div className={style.socialmedia}>
            </div>
        </div>
    </footer>
  )
}

export default Footer