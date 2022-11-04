import React, {useState, useMemo} from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const memo = useMemo(
        function multicount() {
            console.warn('multicount called')
            return count * 2
        }, [count])

    return (
        <div>
            <h1>count : {count}</h1>
            <h1>item : {item}</h1>
            <h2>{memo}</h2>
            <button onClick={() => setCount(count + 1)}>IncreseCount</button>
            <button onClick={() => setItem(item * 3)}>UpdateItem</button>
        </div>
    )
}

export default UseMemo;