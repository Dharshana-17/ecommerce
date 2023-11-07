import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Laptop",
      image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
      category: "Electronics",
      price: 999.99,
      description: "A powerful laptop for work and play.",
      rating: {
        rate: 4.5,
      },
    },
    {
      id: 2,
      title: "Smartphone",
      image: "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg",
      category: "Electronics",
      price: 499.99,
      description: "Stay connected with the latest smartphone.",
      rating: {
        rate: 4.3,
      },
    },
    {
      id: 3,
      title: "Tablet",
      image: "https://i.gadgets360cdn.com/products/large/Galaxy-Tab-A7-launched-525x800-1601293535.jpg",
      category: "Electronics",
      price: 299.99,
      description: "A versatile tablet for work and entertainment.",
      rating: {
        rate: 4.0,
      },
    },
    {
      id: 4,
      title: "Camera",
      image: "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      category: "Electronics",
      price: 599.99,
      description: "Capture precious moments with this camera.",
      rating: {
        rate: 4.6,
      },
    },
    {
      id: 5,
      title: "Headphones",
      image: "https://www.sony.co.in/image/8f499d4640b363762e66edd1a4916a10?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
      category: "Electronics",
      price: 79.99,
      description: "Immerse yourself in music with high-quality headphones.",
      rating: {
        rate: 4.4,
      },
    },
    {
      id: 6,
      title: "Smartwatch",
      image: "https://www.boat-lifestyle.com/cdn/shop/products/Untitled-5.png?v=1658294451",
      category: "Electronics",
      price: 129.99,
      description: "Stay fit and connected with a smartwatch.",
      rating: {
        rate: 4.2,
      },
    },
    {
      id: 7,
      title: "Desktop Computer",
      image: "https://5.imimg.com/data5/AV/RC/NA/SELLER-76681714/assemble-desktop-with-18-5-hp-monitor-processor-intel-core-i3-2nd-gen-4gb-ram-500gb-hd-500x500.jpg",
      category: "Electronics",
      price: 799.99,
      description: "A powerful desktop computer for your home office.",
      rating: {
        rate: 4.7,
      },
    },
    {
      id: 8,
      title: "Gaming Console",
      image: "https://images.unsplash.com/photo-1581810476461-bcffde6c6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      category: "Electronics",
      price: 349.99,
      description: "Game like never before with this gaming console.",
      rating: {
        rate: 4.8,
      },
    },
    {
      id: 9,
      title: "Wireless Earbuds",
      image: "https://m.media-amazon.com/images/I/51jR6miqHTS.jpg",
      category: "Electronics",
      price: 129.99,
      description: "Enjoy music on the go with wireless earbuds.",
      rating: {
        rate: 4.5,
      },
    },
    {
      id: 10,
      title: "Printer",
      image: "https://3.imimg.com/data3/CH/MC/MY-11144643/hd-photo-print-machine-250x250.png",
      category: "Electronics",
      price: 149.99,
      description: "Print documents and photos with this printer.",
      rating: {
        rate: 4.0,
      },
    },
  ]);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Loading = () => {
    return (
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
    );
  };

  const ShowProduct = ({ product }) => {
    return (
      <div className="col-md-6">
        <img src={product.image} alt={product.title} height="400px" width="400px" />
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4"> Rs.{product.price}</h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark py-2 px-4" onClick={() => addProduct(product)}>
          Add to Cart
        </button>
        <NavLink to="/cart" className="btn btn-dark px-3 py-2 ms-2">
          Go to Cart
        </NavLink>
      </div>
    );
  };

  const Category = ({ category }) => {
    const categoryProducts = products.filter((product) => product.category === category);
    return (
      <div>
        <h2>{category}</h2>
        <div className="container py-5">
          <div className="row py-5">
            {loading ? (
              <Loading />
            ) : (
              categoryProducts.map((product) => <ShowProduct key={product.id} product={product} />)
            )}
          </div>
        </div>
      </div>
    );
  };

  // Get unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
}

export default Product;