import { useState } from "react"

const AddRemove = () => {
    const [mealPlane, setMealPlane] = useState([{ name: '', price: '' }]);

    const handleChange = (index, e) => {
        let newMealPlane = [...mealPlane];
        newMealPlane[index][e.target.name] = e.target.value;
        setMealPlane(newMealPlane);
    }

    const AddPlan = () => {
        setMealPlane([...mealPlane, { name: '', price: '' }])
    }

    const RemovePlan = (index) => {
        let newMealPlane = [...mealPlane]
        newMealPlane.splice(index, 1)
        setMealPlane(newMealPlane)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    
    return (    
        <>
            <button type="button" onClick={() => { AddPlan() }}>Add</button>
            <form onSubmit={handleSubmit}>
                {
                    mealPlane.map((item, index) => {
                        return (
                            <div key={index}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    placeholder="Please enter name"
                                    name="name"
                                    value={item.name || ""}
                                    required
                                    onChange={(e) => { handleChange(index, e) }}
                                />
                                <label htmlFor="price">Price</label>
                                <input
                                    type='number'
                                    placeholder="Please enter price"
                                    name="price"
                                    value={item.price || ""}
                                    required
                                    onChange={(e) => { handleChange(index, e) }}
                                />
                                {
                                    index ? <button type="button" onClick={() => { RemovePlan(index) }}>Remove</button> : null
                                }
                            </div>
                        )
                    })
                }
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
export default AddRemove;