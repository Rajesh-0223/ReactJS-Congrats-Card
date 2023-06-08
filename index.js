const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="greeting">Congratulations</h1>
    <div className="card-container">
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="education">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
