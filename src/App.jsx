

const App = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-red-700 flex justify-center items-center bg-green-300">
        Hello world!
      </h1>
      <p className="text-xs bg-gradient-to-br from-amber-950 to-amber-700 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam facere doloremque ex quisquam vel excepturi assumenda nesciunt magnam praesentium, labore ad, ab, consequuntur cumque aliquid atque! Similique asperiores assumenda fugiat, laboriosam autem totam aspernatur sunt non ullam ut cumque rerum cupiditate suscipit fuga, illo voluptate in temporibus, ex id veniam.</p>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;