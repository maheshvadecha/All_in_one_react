import React from 'react'
import { useState } from 'react'

const Meal = () => {
    const [meal, setMeal] = useState({
        name: '',
        price: ''
    })

    const submitHandle = (e) =>{
        e.preventDefault();
        setMeal({name:e.target.name})
        setMeal({price:e.target.price})
        console.log(e)
    }
    console.log(meal)
    return (
        <div>
            <div>
                <form onSubmit={submitHandle}>
                    <label>Meal</label>
                    <label>Name</label>
                    <input
                        placeholder='name'
                        id='name'
                    />
                    <label>price</label>
                    <input
                        placeholder='price'
                        id='price'
                    />
                    <button type='submit'>add</button>
                </form>
            </div>
        </div>
    )
}

export default Meal;