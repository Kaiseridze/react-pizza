import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
	Categories,
	PizzaBlock,
	PlaceholderBlock,
	SortPopup,
} from "../components"
import { setCategories, setSortBy } from "../redux/actions/filters"
import { fetchPizzas } from "../redux/actions/pizzas"

function Home() {
	const dispatch = useDispatch()

	const items = useSelector(({ pizzas }) => pizzas.items)
	const cartItems = useSelector(({ cart }) => cart.items)
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
	const { sortBy, category } = useSelector(({ filters }) => filters)

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategories(index))
	}, [])
	const onSelectSortBy = useCallback((type) => {
		dispatch(setSortBy(type))
	}, [])

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category))
	}, [category, sortBy])

	const categoryNames = [
		"Вегетарианские",
		"Мясные",
		"Гриль",
		"Острые",
		"Закрытые",
	]

	const sortItems = [
		{ name: "Популярности", type: "popular" },
		{ name: "Цене", type: "price" },
		{ name: "Алфавиту", type: "name" },
	]

	const handleAddPizzaToCard = (obj) => {
		dispatch({
			type: "ADD_PIZZA_CARD",
			payload: obj
		})
	}

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup
					activeSortBy={sortBy}
					items={sortItems}
					onClickSort={onSelectSortBy}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? items.map((item) => (
							<PizzaBlock
								name={item.name}
								image={item.imageUrl}
								price={item.price}
								types={item.types}
								sizes={item.sizes}
								id={item.id}
								isLoading={true}
								addedCount={cartItems[item.id] && cartItems[item.id].length }
								key={item.id}
								onClickAddPizza={handleAddPizzaToCard}
							/>
					))
					: Array(12)
							.fill(0)
							.map((_, fake) => <PlaceholderBlock key={fake} />)}
			</div>
		</div>
	)
}

export default Home
