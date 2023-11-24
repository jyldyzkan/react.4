import {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../Components/MealList";
import {useParams} from "react-router-dom";


const IngredientPage = () => {
    const {name} = useParams()
    const [ingredient, setIngredient] = useState([])


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data}) => {
                setIngredient(data.meals)
            })
    }, []);

    return(

        <>
        <div className="container">
            <div className="row">

                <div className="inner">
                    <h3>{name}</h3>
                    <img className={'img-box'}
                        src={`https://www.themealdb.com/images/ingredients/${name}.png`}
                         alt=""/>
                    <MealList meals={ingredient}/>
                </div>
            </div>
        </div>


        </>

    )
}

export default IngredientPage