import React from "react"
import ContentLoader from "react-content-loader"

function PlaceholderBlock() {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={280}
			height={480}
			viewBox='0 0 280 480'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'>
			<circle cx='577' cy='201' r='140' />
			<circle cx='594' cy='209' r='140' />
			<circle cx='632' cy='250' r='140' />
			<circle cx='140' cy='140' r='140' />
			<rect x='0' y='305' rx='0' ry='0' width='271' height='25' />
			<rect x='127' y='306' rx='0' ry='0' width='1' height='3' />
			<rect x='0' y='354' rx='0' ry='0' width='271' height='60' />
			<rect x='1' y='430' rx='0' ry='0' width='103' height='37' />
			<rect x='146' y='427' rx='29' ry='29' width='128' height='40' />
		</ContentLoader>
	)
}

export default PlaceholderBlock
