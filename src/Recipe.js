import React from 'react';

const Recipe = ({title, calories, image, labels, ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <div className="recipeDetails">
                <div className="row"><h4>Calories (Kcal):&nbsp;</h4> <span>&nbsp;{calories}</span></div>
                <div className="row"><h4>Diet type:&nbsp;</h4> <span>&nbsp;{labels}</span></div>
            </div>
            <img src={image} alt={title}/>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map(
                    ingredient => (
                        <li>{ingredient.text}</li>
                    )
                )}
            </ol>
        </div>
    );
};

export default Recipe;