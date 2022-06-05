import PreviousSearches from "../components/PreviousSearches/previousSearches";
import RecipesCard from "../components/RecipesCard/recipesCard";

const Recipes = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "img/gallery/img_1.jpg",
      authorImg: "img/top-chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "img/gallery/img_4.jpg",
      authorImg: "img/top-chefs/img_2.jpg",
    },
    {
      title: "Cheese Burger",
      image: "img/gallery/img_5.jpg",
      authorImg: "img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "img/gallery/img_6.jpg",
      authorImg: "img/top-chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "img/gallery/img_10.jpg",
      authorImg: "img/top-chefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "img/gallery/img_1.jpg",
      authorImg: "img/top-chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "img/gallery/img_4.jpg",
      authorImg: "img/top-chefs/img_2.jpg",
    },
    {
      title: "Cheese Burger",
      image: "img/gallery/img_5.jpg",
      authorImg: "img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "img/gallery/img_6.jpg",
      authorImg: "img/top-chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "img/gallery/img_10.jpg",
      authorImg: "img/top-chefs/img_6.jpg",
    },
    {
      title: "Cheese Burger",
      image: "img/gallery/img_5.jpg",
      authorImg: "img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "img/gallery/img_6.jpg",
      authorImg: "img/top-chefs/img_5.jpg",
    },
  ];
  return (
    <div>
      <PreviousSearches />
      <div className="section recipes-container">
        {recipes.map((recipe, index) => (
          <RecipesCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
