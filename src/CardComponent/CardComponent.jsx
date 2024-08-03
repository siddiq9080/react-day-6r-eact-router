import propTypes from "prop-types";

const Card = ({ image, title, language, duration }) => {
  return (
    <div className="card">
      <div className="card-mg-top text-center">
        <img
          src={image}
          className="img-thumbnail w-100"
          style={{ height: 200 }}
          alt={title}
        />
      </div>
      <div className="card-body">
        <h4 className="card-text">Title : &quot;{title} &quot;</h4>
        <h5 className="card-text mt-3">Language : &quot;{language}&quot;</h5>
        <h5 className="card-text mt-3">Duration : &quot;{duration}&quot;</h5>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  language: propTypes.string,
  duration: propTypes.string,
};

export default Card;
