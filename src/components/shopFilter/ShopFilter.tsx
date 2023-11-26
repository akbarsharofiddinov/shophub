import { Slider } from "antd";
import React, { useState } from "react";

interface IFilterValues {
  min: number;
  max: number;
}

interface IProps {
  filterValues: IFilterValues;
  setFilterValues: React.Dispatch<React.SetStateAction<IFilterValues>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopFilter: React.FC<IProps> = ({
  filterValues,
  setFilterValues,
  setLoading,
}: IProps) => {
  const [values, setValues] = useState<IFilterValues>({ max: 45, min: 5 });

  // =====================================================

  const handleSliderChange = (values: number[]) => {
    setValues({ min: values[0], max: values[1] });
  };

  const handleAfterChange = (values: number[]) => {
    setFilterValues({ min: values[0], max: values[1] });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="sideBarFilterBox">
        <h1>Filter by</h1>
        <div className="filterInner">
          <div className="titleBox">
            <p>Price</p>
            <span>&#43;</span>
          </div>
          <div className="actionBox">
            <Slider
              range
              min={5}
              max={45}
              value={[values.min, values.max]}
              onChange={(e) => handleSliderChange(e)}
              onAfterChange={(e) => handleAfterChange(e)}
            />
            <div className="minMaxValues">
              <span className="minValue">{filterValues.min}$</span>
              <span className="maxValue">{filterValues.max}$</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopFilter;
