import { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import List from "../../components/list/List";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Pagination from "../../components/pagination/Pagination";
const Home = () => {
	const [movies, setMovies] = useState(null);
	const [input, setInput] = useState("");

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(6);
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = movies?.slice(firstPostIndex, lastPostIndex);
	const handleSort = (e) => {
		if (e === "asc") {
			console.log(e);
			const ascData = [...movies].sort((a, b) => (a.Year > b.Year ? 1 : -1));
			setMovies(ascData);
		} else if (e === "desc") {
			const descData = [...movies].sort((a, b) => (a.Year > b.Year ? -1 : 1));
			setMovies(descData);
		}
	};

	useEffect(() => {
		console.log(input);
		let url = `http://www.omdbapi.com/?s=${input}&apikey=${
			import.meta.env.VITE_API_KEY
		}`;
		axios
			.get(url)
			.then(function (response) {
				// handle success
				setMovies(response.data.Search);
				//console.log(movies);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [input]);

	return (
		<div
			className="home bgOpacity"
			style={movies ? { height: "auto" } : { height: "calc(100dvh - 80px)" }}
		>
			<div
				className="bgOpacity"
				style={movies ? { height: "auto" } : { height: "calc(100dvh - 80px)" }}
			>
				<div className="wrapper">
					<div className={movies ? "top mt" : "top"}>
						<label htmlFor="input1">Search Any Movie</label>
						<input
							name="input1"
							id="input1"
							type="text"
							placeholder="Search for a movie"
							onChange={(e) => setInput(e.target.value)}
						/>
					</div>
					{movies && (
						<div className="sort">
							<span>Sort by year</span>
							<ArrowDownwardIcon
								className="icon"
								style={{ color: "black" }}
								onClick={() => handleSort("desc")}
							/>
							<ArrowUpwardIcon
								className="icon"
								style={{ color: "black" }}
								onClick={() => handleSort("asc")}
							/>
						</div>
					)}
					<div className="bottom">
						{
							//movies && <Table data={movies} />
							movies && (
								<>
									<span>Search results:</span>
									<List data={currentPosts} />
								</>
							)
						}
					</div>
					{movies && (
						<Pagination
							totalPosts={movies.length}
							postsPerPage={postsPerPage}
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
