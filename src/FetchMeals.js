import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get(`https://meal-plan-2c7v.onrender.com`)
    .then(({data}) => {console.log(data)
    setMeal(data);
    })
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post(`https://meal-plan-2c7v.onrender.com/saveMeals`, {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.post(`https://meal-plan-2c7v.onrender.com/editMeal`, {_id: mealId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
    axios.post(`https://meal-plan-2c7v.onrender.com/deleteMeal`, {_id})
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}

export {getAllMeals, addMeal, editMeal, deleteMeal};