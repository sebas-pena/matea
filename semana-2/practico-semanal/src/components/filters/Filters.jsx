import React from "react"
import "./Filters.css"
const Filters = ({ options, setFilter, actualFilter }) => {
	return (
		<div className="filters__ctn">
			<button
				className={actualFilter === null ? "active" : ""}
				onClick={() => {
					setFilter({ ...actualFilter, genre: null })
				}}
			>
				Todos
			</button>
			{options.map((option) => (
				<button
					key={option}
					className={actualFilter === option ? "active" : ""}
					onClick={() => {
						setFilter({ ...actualFilter, genre: option })
					}}
				>
					{option}
				</button>
			))}
		</div>
	)
}

export default Filters
