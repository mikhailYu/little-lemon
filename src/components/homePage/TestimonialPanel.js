export default function TestimonyPanel({ info }) {
  return (
    <div className="testiPanel">
      <h2 className="rating">{info.rating}</h2>
      <div className="testiMid">
        <div className="testiImgCont">
          <img
            src={require("../../images/reviewProfiles/" + info.imgSrc)}
            alt="reviewer"
          />
        </div>
        <p>{info.personName}</p>
      </div>
      <p className="testiReviewText">{info.review}</p>
    </div>
  );
}
