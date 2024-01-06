const Category = ({category}) => {
    const {logo, availability, category_name} = category;
    return (
        <div className="p-8 border w-64">
            <img className="py-4" src= {logo} alt="" />
            <h1 className='font-extrabold text-xl py-2'>{category_name}</h1>
            <h1 className="text-base font-medium py-2">{availability}</h1>
        </div>
    );
};

export default Category;