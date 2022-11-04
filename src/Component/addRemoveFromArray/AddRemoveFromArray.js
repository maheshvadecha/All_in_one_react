import React from 'react'

const AddRemoveFromArray = () => {
  const [list, setList] = React.useState([])

  const handleAdd = () => {
    let items = list;
    setList([...items, `item - ${items.length}`])
  }

  const handleRemove = () => {
    let items = list;
    if (items.length > 0) {
      const lastIndex = items.length - 1
      setList(items.filter((item, index) => index !== lastIndex))
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>

        <div>
          <ul>
            {
              list && list.length > 0 ? (
                list.map((item, i) => {
                  return (
                    <>
                      <li>{item}</li>
                    </>
                  )
                })
              ) : ('')
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default AddRemoveFromArray;