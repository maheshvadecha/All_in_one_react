import { useState } from "react";

const userData = [
    {
        id: 1,
        name: 'Jaydev',
        age: 27
    },

    {
        id: 2,
        name: 'Mayur',
        age: 25
    },

    {
        id: 3,
        name: 'Jagdish',
        age: 24
    },

    {
        id: 4,
        name: 'Rajesh',
        age: 26
    },

    {
        id: 5,
        name: 'Hardik',
        age: 25
    },

    {
        id: 6,
        name: 'Mahesh',
        age: 27
    },

    {
        id: 7,
        name: 'Shyam',
        age: 28
    },

    {
        id: 8,
        name: 'Rajendr',
        age: '25'
    },

    {
        id: 9,
        name: 'Manoj',
        age: 26
    },

    {
        id: 10,
        name: 'Suraj',
        age: '26'
    },

    {
        id: 11,
        name: 'Satish',
        age: 27
    },

    {
        id: 12,
        name: 'Pankaj',
        age: 24
    },

    {
        id: 13,
        name: 'Jaydip',
        age: 25
    }
]

const initialData =
{
    id: '',
    name: '',
    age: ''
}

const ArrayOperation = () => {
    const [data, setData] = useState(initialData);
    const [list, setList] = useState(userData);

    const AddData = (e) => {
        e.preventDefault();
        const items = list;
        setList([...items, data])
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <div className=''>
            <table style={{ padding: '40px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.length > 0 ? list.map((item, i) => {
                            return (
                                <>
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                </>
                            )
                        }) : ''
                    }
                </tbody>
            </table>
            <div>
                <form>
                    <label htmlFor="id">ID</label>
                    <input
                        type='number'
                        id="id"
                        name="id"
                        placeholder="Please enter id"
                        value={data.id}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        id="name"
                        name="name"
                        placeholder="Please enter name"
                        value={data.name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        type='number'
                        id='age'
                        name="age"
                        placeholder="Please enter your age"
                        value={data.age}
                        onChange={handleInputChange}
                    />
                    <button type="submit" onClick={AddData}>Add Data</button>
                    {/* <button type="submit" onClick={RemoveData}>Remove Data</button> */}
                </form>
            </div>
        </div>
    )
}
export default ArrayOperation;