import { FaLongArrowAltRight } from "react-icons/fa"

export const Herosection = ()=>{
    return(
        <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the world,une country at a time.
            </h1>
            <p>
              Discover the history, culature and beauty of every nation,
              sort,search, and filter through contries to find the details you need.
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              start Exploring<FaLongArrowAltRight></FaLongArrowAltRight>
            </button>
          </div>
          <div className="hero-image">
            <img src="/images/worldiamge-removebg-preview.png"  alt="" className="worldimage"/>
          </div>
        </div>
      </main>
    )
}