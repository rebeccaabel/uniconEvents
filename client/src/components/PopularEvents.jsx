import Card from "./Card.jsx";


export default function () {
     const artists = [
        {
            title: "Taylor Swift",
            text: `This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this veggie burger recipe high in fiber and protein too. There's not much to them, other than that! Just mash everything up together, form into patties, heat and serve!`,
            image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png'
        },
        {
            title: "Harry Styles",
            text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
            image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png'
        },
        {
            title: "Kayne West",
            text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
            image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png'
        },
        {
            title: "Kimberly Amethyst",
            text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
            image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png'
        }
    ]
return <div>
    <h2>Popular events</h2>
    {
        artists.map(artist => <Card title={artist.title} text={artist.text} image={artist.image} />)
    }
</div>

}











