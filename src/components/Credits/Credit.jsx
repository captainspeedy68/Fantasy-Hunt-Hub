const Credit = () => {
    return (
        <div className="max-w-2xl mx-auto my-36 mt-8 p-4 bg-white rounded-md shadow-md">
            <h2 className="text-3xl font-bold mb-4">Art Credits</h2>

            <p className="mb-4">
                I take no credit for any of the arts used in this website. All images used in this website are credited to various artists. I appreciate their talent. In some cases I don't know the identity of some the other Artists that I have used here. This is because Some other art works are randomly chosen from Google. <br />This webpage was done for the sole purpose of doing a practice project.
            </p>

            <p className="mb-4">
                One of them is Brother Bjorn.
                You can find more of Brother Bjorn's work on his twitter account: <a href="https://twitter.com/bjorn_brother" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Brother Bjorn</a>.
            </p>

            <p className="text-gray-500">
                It also includes art from Kentaro Miura's Berserk Manga.
            </p>
        </div>
    );
};

export default Credit;
