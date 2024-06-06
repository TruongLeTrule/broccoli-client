import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SidebarSetting from "../components/sidebarSetting";
import CaloriesChart from "../components/caloriesChart";
import Switch from "@mui/material/Switch";
import theme from "../components/theme";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

const NutritionTargets = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  // handle Carbs
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  // handle Protein
  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  // handle Fat
  const [value3, setValue3] = React.useState([20, 37]);

  const handleChange3 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue3([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue3(newValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="mt-40 flex flex-row px-32 gap-20">
        <div className="w-1/2">
          <SidebarSetting />
        </div>
        <div>
          <p className="text-justify leading-loose">
            Nơi lưu trữ các mục tiêu dinh dưỡng mong muốn của bạn. Bạn có thể sử
            dụng cùng một mục tiêu cho mọi ngày trong tuần hoặc đưa ra các mục
            tiêu khác nhau cho các ngày khác nhau (như ngày tập luyện và ngày
            nghỉ ngơi).
          </p>
          <div className="flex flex-row justify-between pt-10 items-center">
            <p className="text-xl font-semibold text-primaryColor">Calories:</p>
            <p className="px-5 py-2 border border-primaryColor rounded-lg">
              1880
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-between pt-10 items-center">
              <p className="text-xl font-semibold text-primaryColor">
                Chất dinh dưỡng đa lượng:
              </p>
              <p className="px-8 py-2 border border-primaryColor rounded-lg">
                g
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <CaloriesChart />
              <div>
                <Box sx={{ width: 300 }}>
                  <p className="text-right py-2">Cards</p>
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                  <p className="text-right py-2">Đạm</p>
                  <Slider
                    getAriaLabel={() => "Minimum distance shift"}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                  <p className="text-right py-2">Béo</p>
                  <Slider
                    getAriaLabel={() => "Minimum distance shift"}
                    value={value3}
                    onChange={handleChange3}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                </Box>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 gap-5">
              {/* <p className="text-xl font-semibold text-primaryColor">
                Chất dinh dưỡng vi lượng:
              </p>
              <div className="flex flex-row justify-between items-center">
                <p>Chất xơ tối thiểu:</p>
                <div className="flex flex-row gap-10 justify-between items-center">
                  <p className="px-5 py-2 border border-primaryColor rounded-lg">
                    25
                  </p>
                  <p>g</p>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center ">
                <p>Giới hạn natri hàng ngày:</p>
                <Switch {...label} defaultChecked className="ml-32" />
                <div className="flex flex-row gap-10 justify-end items-center">
                  <p className="px-5 py-2 border border-primaryColor rounded-lg">
                    25
                  </p>
                  <p>g</p>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <p>Giới hạn cholesterol hàng ngày:</p>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  className="ml-32"
                />
                <div className="flex flex-row gap-10 justify-end items-center">
                  <p className="px-5 py-2 border border-primaryColor rounded-lg">
                    25
                  </p>
                  <p>g</p>
                </div>
              </div> */}
              <div className="mt-20 flex flex-row gap-10 justify-end">
                <button className="px-10 py-2 border border-primaryColor rounded-lg hover:bg-primaryColor hover:text-bgColor">
                  Hủy
                </button>
                <button className="px-10 py-2 border border-primaryColor rounded-lg hover:bg-primaryColor hover:text-bgColor">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NutritionTargets;
