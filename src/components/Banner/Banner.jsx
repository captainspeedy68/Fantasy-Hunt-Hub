
const Banner = ({onScrollToCategory}) => {
    return (
        <div className="text-5xl max-md:text-center">
            <div className="md:flex justify-between">
                <div className="max-md:text-center">
                    <h1 className="text-7xl py-6 font-extrabold max-md:text-center">One Branded Step Closer to Your  <br />  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-normal">Destiny</span> </h1>
                    <p className="text-base py-6 font-medium max-md:hidden">Explore thousands of opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your fantasy application <br /> from start to finish.</p>
                    <button onClick={onScrollToCategory} className="max-md:hidden btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ... text-white">Get Started</button>
                </div>
                <div>
                    {/* <img src="/public/images/user.png" alt="" /> */}
                    <img src="/berserk.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;