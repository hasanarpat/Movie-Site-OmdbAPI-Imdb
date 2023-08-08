import "./pagination.scss";

const Pagination = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage,
}) => {
	let pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}

	return (
		<div className="pagination">
			<div className="buttons">
			{pages.map((page, index) => (
				<button
					key={index}
					onClick={() => setCurrentPage(page)}
					className={page == currentPage ? "active" : ""}
				>
					{page}
				</button>
			))}
			</div>
		</div>
	);
};

export default Pagination;
