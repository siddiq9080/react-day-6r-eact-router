import Card from "../CardComponent/CardComponent";

const Ds = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mt-3 mb-4">Data Structure Course Details</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/736x/ae/70/96/ae7096e8c42185fbc1eda6b54eefa4f8.jpg"
            title="NetWork Security"
            language="Tamil,English,Hindi"
            duration="4 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/d1/81/40/d18140c380b3680979507bf0fbe3ca73.jpg"
            title="Ethical Hacking"
            language="Tamil,English,Hindi"
            duration="6 Months"
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://i.pinimg.com/236x/f9/2c/15/f92c15d097d2c8220d9b3a212ea8fd5c.jpg"
            title="Cloud Security"
            language="Tamil,English,Hindi"
            duration="6 Months"
          />
        </div>
      </div>
    </div>
  );
};

export default Ds;
