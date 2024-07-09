import style from "./Selection.module.css"

const Selection = () => {
  return (
    <section>
        <div className={style.cat}>
            <div className={style.select}>
                <button className={style.frame}>SKIN CARE</button>
                <button className={style.frame}>HAIR CARE</button>
                <button className={style.frame}>BATH AND BODY</button>
                <button className={style.frame}>FRAGRANCE</button>
                <button className={style.frame}>FEET CARE</button>
                <button className={style.frame}>KIDS AND TEENS</button>
                <button className={style.frame}>WOMEN</button>
                <button className={style.frame}>MEN</button>
            </div>
        </div>
    </section>
  )
}

export default Selection