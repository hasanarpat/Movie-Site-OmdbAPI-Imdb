import { useNavigate } from "react-router-dom";
import "./list.scss";
const List = ({ data }) => {
   const nav = useNavigate()
	return (
		<div className="list">
			<div className="wrapper">
				{data.map((item) => (
					<div
						className="card"
						key={item.imdbID}
						onClick={() => nav(`/single/${item.imdbID}`)}
					>
						<div className="info">
							<h2>{item.Title}</h2>
							<span>{item.Year}</span>
						</div>
						<img src={item.Poster} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default List;
