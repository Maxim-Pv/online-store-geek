import { useState } from "react"
import { useDispatch } from "react-redux"

const InputUserData = () => {
    const [formData, setFormData] = useState({ name: '', age: ''});
    const dispatch = useDispatch();

    const updateUserData = () => {
        return { type: 'INPUT_USER_DATA', payload: formData }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserData());
    }

    const handleChangeName = (e) => {
        setFormData({
            ...formData, 
            name: e.target.value,
        })
    }

    const handleChangeAge = (e) => {
        setFormData({
            ...formData, 
            age: e.target.value,
        })
    }

  return (
    <form className="userInputForm" onSubmit={handleSubmit}>
        <label className="label"> 
            Name:
            <input 
                className="userForm-input"
                type="text"
                value={formData.name}
                onChange={handleChangeName}
            />
        </label>
        <label className="label">
            Age:
            <input
                className="userForm-input"
                type='number'
                value={formData.age}
                onChange={handleChangeAge}
            />
        </label>
            <button className='btn' type="submit">Save</button>
    </form>
  )
}

export default InputUserData