import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useRef } from 'react';
const Home = () => {
    const categoryRef = useRef(null);

    const scrollToCategory = () => {
      categoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }; 
    return (
        <div>
            <Banner onScrollToCategory={() => scrollToCategory()}></Banner>
            <CategoryList ref={categoryRef}></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;