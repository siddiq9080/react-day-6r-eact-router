import Card from "../CardComponent/CardComponent";

const Java = () => {
  return (
    <div className="container mt-4 mb-4">
      <h1 className="text-center mb-4">JAVA Full Stack Developer</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/736x/38/7f/bb/387fbb2974aa5a5fb11f031690f25486.jpg"
            title="Front-End-Developement"
            language="Tamil,English,Hindi"
            duration="3 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/736x/ff/2f/4e/ff2f4ee2eb90e928e554d71f93fe991c.jpg"
            title="Back-End-Developement"
            language="Tamil,English,Hindi"
            duration="3 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/0b/10/f6/0b10f6db3ede1be2722850dde6d41ebc.jpg"
            title="Full-Stack-Developement"
            language="Tamil,English,Hindi"
            duration="6 Month"
          />
        </div>
      </div>
    </div>
  );
};

export default Java;
