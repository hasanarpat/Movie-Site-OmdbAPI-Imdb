import { useParams } from "react-router-dom";
import "./single.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import axios from "axios";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import CollectionsIcon from "@mui/icons-material/Collections";
const Single = () => {
	let params = useParams();
	const [movie, setMovie] = useState(null);

	let url = `http://www.omdbapi.com/?i=${params.id}&apikey=${
		import.meta.env.VITE_API_KEY
	}`;
	useEffect(() => {
		const getMovie = async () => {
			const response = await axios
				.get(url)
				.then((response) => setMovie(response.data));
			console.log(movie);
		};
		getMovie();
	}, []);
	const handleFavorite = ()=>{
		const movies = JSON.parse(localStorage.getItem('items')) || []
		
		movies.push(movie)
		localStorage.setItem('items',JSON.stringify(movies))
		
	}
	return (
		<div className="single">
			{movie ? (
				<div className="wrapper">
					<div
						style={{
							backgroundImage: `url(${movie.Poster})`,
							backgroundSize: "100%",
						}}
					>
						<div className="bgOpacity">
							<div className="top">
								<div className="left">
									<h1>{movie.Title}</h1>
									<div className="date">
										<span>{movie.Year}</span>
										<span>-</span>
										<span>{movie.Rated}</span>
										<span>-</span>
										<span>{movie.Runtime}</span>
									</div>
								</div>
								<div className="right">
									<div className="item">
										<span>IMDb RATING</span>
										<span>{movie.imdbRating}/10</span>
									</div>
									<div className="item">
										<span>POPULARITY</span>
										<span>
											<TrendingUpIcon style={{ color: "green", marginRight:"15px" }} />
											{movie.imdbVotes}
										</span>
									</div>
								</div>
							</div>
							<div className="content">
								<img src={movie.Poster} alt="" />
								<div className="right">
									<div className="videos">
										<PlayCircleFilledIcon className="icon" />
										15 VIDEOS
									</div>
									<div className="photos">
										<CollectionsIcon className="icon" />
										99+ PHOTOS
									</div>
								</div>
							</div>
							<div className="info">
								<div className="left">
									<div className="genres">{movie.Genre}</div>
									<div className="plot">{movie.Plot}</div>
									<div className="about">
										
									<hr />
										<div className="directors">
											Directors: <span>{movie.Director}</span>
										</div>
										<hr />
										<div className="writers">
											Writers: <span>{movie.Writer}</span>
										</div>
										<hr />
										<div className="actors">
											Stars: <span>{movie.Actors}</span>
										</div>
									</div>
								</div>
								<div className="right">
									<div className="top">
										<button onClick={()=>handleFavorite()}>Add To Favorites</button>
										<FavoriteIcon className="fav"/>
									</div>
									{movie.Ratings &&
										<div className="bottom">
										<div className="item">
											<span className="vote1">{movie.Ratings[0].Source}</span>
											<span className="IMD">{movie.Ratings[0].Value}</span>
										</div>
										<div className="item">
											<span className="vote2">{movie.Ratings[1].Source}</span>
											<span className="RT">{movie.Ratings[1].Value}</span>
										</div>
										<div className="item">
											<span className="vote3">{movie.Ratings[2].Source}</span>
											<span className="MT">{movie.Ratings[2].Value}</span>
										</div>
									</div>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="loading">
					<h1>Movie data is loading...</h1>
				</div>
			)}
		</div>
	);
};

export default Single;
