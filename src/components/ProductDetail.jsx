import React from "react";
import buku from "./img/buku4.svg"

const ProductDetail = () => {
  return (
    <div>
    <div className="container">
        <div className="container">
          <div className="glory" style={{ marginTop: "30px" }}>
            <div className="main-7" style={{ position: "relative" }}>
              <img src={buku} alt="Book Image" />
            </div>
            <div className="main-8">
              <h1>A Court Of Thorns</h1>
              <p>Sarah J Maas</p>
              <p>A Court of Thorns and Roses is a series by American author Sarah J. Maas, which follows <br /> the journey of Feyre Archeron after she is brought into the faerie lands of Prythian.</p>
            </div>
          </div>
        </div>

        <div className="descmain row justify-content-center">
          <div className="desc-1 col-md-12">
            <h2>Synopsis</h2>
            <p>When Feyre, a female hunter, kills a wolf in the woods, she unknowingly attracts the attention of a beast-like creature who comes seeking retribution. Dragged into a dangerous, magical land only spoken of in legends, Feyre discovers that the creature is no ordinary animal but Tamlin, a powerful immortal faerie who once ruled the mortal world.

              As a captive in this land, Feyre is forced to reside there for a while. Her feelings towards Tamlin shift from initial cold hostility to a burning passion, unveiling the dark side of the enchanting faerie world.

              However, darkness looms over the realm even more, and Feyre must find a way to stop it... or catastrophe will befall Tamlin and his world forever.</p>
          </div>

          <div className="col-md-12 text-center mt-4">
            <div className="d-flex justify-content-center align-items-center">
              <div className="main-row justify-content-center">
                <div className="col-auto me-4">
                  <p>Rp 87.000</p>
                </div>
              </div>
              <div className="col-auto me-4">
                <button className="btn btn-primary">Buy</button>
              </div>
              <div className="col-auto me-4">
                <button className="icon-button" data-feather="bookmark"></button>
              </div>
              <div className="col-auto me-4">
                <button className="icon-button" data-feather="shopping-cart"></button>
              </div>
              <div className="col-auto me-4">
                <button className="icon-button" data-feather="share"></button>
              </div>
            </div>
          </div>

          <div className="desc-2 col-md-12">
            <h2>Details </h2>
            <p>SKU: GRM-2284
              <br />ISBN: 9786024552848
              <br />Weight: 480 grams
              <br />Dimensions (W/H/L): 20 cm / 14 cm / 0 cm
              <br />Pages: 588
              <br />Cover Type: Soft Cover</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
