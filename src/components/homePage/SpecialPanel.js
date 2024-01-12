export default function SpecialPanel({ info }) {
  return (
    <div className="specialPanel">
      <div className="specialImgCont">
        <img
          src={require("../../images/icons_assets/" + info.imgSrc)}
          alt="dish"
        />
      </div>
      <div className="specialHeader">
        <h2>{info.itemName}</h2>
        <p>{info.price}</p>
      </div>
      <div className="specialDesc">
        <p>{info.desc}</p>
      </div>
      <div className="specialBottomCont">
        <p>Order a delivery {"->"}</p>
      </div>
    </div>
  );
}
