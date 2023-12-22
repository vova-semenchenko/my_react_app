import "./userCard.css";

function UserCard({ data }) {
  return data ? (
    <div className="card">
      <div className="cardInner">
        <img className="cardImage" src={data.avatar} alt={data.avatar} />
        <div className="cardNameContainer">
          <span className="cardNameTitle">User Name</span>
          <div className="cardNameBody">
            {data.first_name + " " + data.last_name}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default UserCard;
