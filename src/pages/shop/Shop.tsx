import React, { useEffect, useState } from "react";
import { useGetAllBooksQuery } from "@/RTKQueries/bookRTKQ";
import { Products, SectionTop, ShopFilter, Modal } from "@/components";
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons";

interface IFilterValues {
  min: number;
  max: number;
}

const Shop: React.FC = () => {
  const [filterValues, setFilterValus] = useState<IFilterValues>({
    min: 5,
    max: 45,
  });
  const [shopData, setShopData] = useState<IBook[]>();
  const [loading, setLoading] = useState(false);
  const { data } = useGetAllBooksQuery();

  useEffect(() => {
    setShopData(data);
  }, []);

  const { max, min } = filterValues;
  useEffect(() => {
    const filteredData = data?.filter(
      (item) => item.price > min && item.price < max
    );

    setShopData(filteredData);
  }, [min, max, data]);


  const antIcon = <LoadingOutlined style={{ fontSize: 94, color: "#0e345a" }} spin />;

  return (
    <section className="section-shop">
      <div className="container">
        <SectionTop title={"bookstore"} desc="Our" />
        <div className="shop-inner">
          <ShopFilter
            filterValues={filterValues}
            setFilterValues={setFilterValus}
            setLoading={setLoading}
          />
          <div className="productsBox">
            {loading ? (
              <Modal>
                <Spin indicator={antIcon} />;
              </Modal>
            ) : (
              <Products productData={shopData} loading={loading} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
