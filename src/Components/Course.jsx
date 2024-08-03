import Card from "../CardComponent/CardComponent";

const Course = () => {
  return (
    <div className="container mt-4 mb-4 ">
      <h1 className="text-center mt-4 mb-4">Course Details</h1>

      <div className="row g-3">
        <div className="col-md-4 ">
          <Card
            image="https://i.pinimg.com/236x/a4/df/64/a4df645483f9877ac9e95d189b662d53.jpg"
            title="Data Science"
            language="Tamil,English,Hindi"
            duration="8 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/564x/2f/7a/f3/2f7af38a767770e9410fa116c15f0f15.jpg"
            title="MERN Developer"
            language="Tamil,Kannada"
            duration="6 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/ef/07/04/ef0704019ae474bbe372e7cf48375863.jpg"
            title="Java FSD"
            language="Tamil,English,Hindi"
            duration="10 Months"
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
