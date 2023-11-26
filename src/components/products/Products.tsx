import React, { useState } from "react";
import { MyButton } from "..";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

interface IProps {
  productData: IBook[] | undefined;
  loading: boolean;
}

const Products: React.FC<IProps> = ({ productData, loading }: IProps) => {
  const [data, setData] = useState<IBook[]>([]);

  React.useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, [productData]);

  return (
    <>
      <div className="products">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="product">
              <a
                href={`/detailsProduct:productID=${item.id}`}
                className="productLink"
              ></a>
              <div className="image-box">
                <img src={item.imageURL} alt="" />
                <Link to={`/:productID=${item.id}&quickView=${true}`}>
                  <button className="quickViewButton">Quick View</button>
                </Link>
              </div>
              <div className="product-inner">
                <p className="title">{item.title}</p>
                {item.discount > 0 ? (
                  <p className="price">
                    <span className="oldPrice">{item.price}$</span>
                    <span className="discountPrice">
                      {item.price - item.discount}$
                    </span>
                  </p>
                ) : (
                  <p className="price">${item.price}</p>
                )}
                <MyButton title="Add to Cart" />
              </div>
            </div>
          ))
        ) : loading ? (
          <>
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
            <Skeleton.Image
              active={true}
              style={{ width: "350px", height: "350px" }}
            />
          </>
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </>
  );
};

export default Products;
