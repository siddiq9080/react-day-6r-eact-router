import Card from "../CardComponent/CardComponent";

const FullStack = () => {
  return (
    <div className="container mt-3 mb-3">
      <h1 className="text-center mt-3 mb-4">Full Stack Developer</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/ab/2b/29/ab2b2989492ae6fa3e02d0f993ee9932.jpg"
            title="Front-End-Developement"
            language="Tamil,English"
            duration="3 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/26/66/52/2666526d6a41385d9a681e1500b0d1e6.jpg"
            title="Back-End-Developement"
            language="Tamil,English,Hindi"
            duration="3 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/a5/ff/0f/a5ff0fac54c23cc4ecc1d7b8b8a8b975.jpg"
            title="Full-Stack-Developement"
            language="Tamil,English,Hindi"
            duration="6 Months"
          />
        </div>
      </div>
    </div>
  );
};

export default FullStack;
