import React, { useState } from "react"

function Categories({ items }) {
	const [select, setSelect] = useState(0)
	return (
		<div className='categories'>
			<ul>
				{items &&
					items.map((item, index) => (
						<li
							className={select === index ? "active" : ""}
							onClick={() => setSelect(index)}
							key={`${item}__${index}`}>
							{item}
						</li>
					))}
			</ul>
		</div>
	)
}

export default Categories
