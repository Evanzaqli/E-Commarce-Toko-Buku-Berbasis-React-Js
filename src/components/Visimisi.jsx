import React from "react";
import image from "./img/vsmimg.jpeg"

function Visi (){
    return(
        
        <div className="container ">
            <div className="row">
                <div className="col-lg-6">
                    <div className="visi-misi-title" >
                        <h2 className="title"style={{fontWeight:"bold",textAlign:"center"}}>Our <br/> Vision and<br/> Mission</h2>
                </div>
                <p class="vision-mission-description">
              Our vision is to be the premier online destination for book
              lovers, offering a diverse selection across genres, while our
              mission is to provide a seamless shopping experience, excellent
              customer service, exclusive editions, foster community
              engagement, and stay ahead of industry trends, ensuring we
              remain the go-to choice for book enthusiasts everywhere.
            </p>
                </div>
                <div className="col-lg-6">
                <div className="visi-image-container d-flex">
                    <img src={image} alt="" style={{height:"300px",width:"90%",alignItems:"center"}} />
                </div>
                </div>
            </div>
        </div>
       
    )
}
export default Visi