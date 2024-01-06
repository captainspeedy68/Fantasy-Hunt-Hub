import { useState } from "react";
import { useEffect } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className="my-16 max-md:hidden ">
            <h1 className="text-center font-extrabold text-5xl">Job Category List</h1>
            <p className="text-center my-5 font-medium text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-around ">
            {
                categories.map(category => <Category key={category.id} category = {category}></Category>)
            }
            </div>

        </div>
    );
};

export default CategoryList;