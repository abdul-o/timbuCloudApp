import style from "./Cartflyer.module.css"



const Cartflyer = () => {
  return (
    <section>
        <div className={style.wrapper}>
            <div className={style.wrappersub}>
            <div className={style.navigate}>shopping bag</div>
            <div className={style.navigate}>Delivery</div>
            <div className={style.navigate}>Payment</div>
            <div className={style.navigate}>check - out</div>
            </div>
        </div>
    </section>
  )
}

export default Cartflyer;