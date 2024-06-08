import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SidebarSetting from "../components/sidebarSetting";
import CaloriesChart from "../components/caloriesChart";
import theme from "../components/theme";
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import { toast } from "react-toastify";

const userUrl = "http://localhost:3000/api/v1/user/target";

const MAX = 500;
const MAXFat = 200;

const Input = styled(MuiInput)`
  width: 45px;
  font-family: "poppins";
  border: 0;
  color: "#000000";
  & .MuiInput-input {
    color: "#000000";
  }
`;

const NutritionTargets = () => {
  const [nutrients, setNutrients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [caloriesValue, setCaloriesValue] = useState();
  const [carbValue, setCarbValue] = useState();
  const [proteinValue, setProteinValue] = useState();
  const [fatValue, setFatValue] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(userUrl, {
          withCredentials: true,
        });
        setNutrients(response.data.nutrients);
        setCaloriesValue(response.data.nutrients[0].targetNutrientValue);
        setCarbValue(response.data.nutrients[3].targetNutrientValue);
        setProteinValue(response.data.nutrients[1].targetNutrientValue);
        setFatValue(response.data.nutrients[2].targetNutrientValue);
        console.log(response.data.nutrients);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const data = [
    {
      name: "Carbs",
      value:
        nutrients && nutrients.length > 3
          ? nutrients[3].targetNutrientValue
          : 0,
    },
    {
      name: "Protein",
      value:
        nutrients && nutrients.length > 1
          ? nutrients[1].targetNutrientValue
          : 0,
    },
    {
      name: "Fats",
      value:
        nutrients && nutrients.length > 2
          ? nutrients[2].targetNutrientValue
          : 0,
    },
  ];

  const handleCarbChange = (event, newValue) => {
    setCarbValue(newValue);
  };

  const handleProteinChange = (event, newValue) => {
    setProteinValue(newValue);
  };

  const handleFatChange = (event, newValue) => {
    setFatValue(newValue);
  };

  const handleInputCarbChange = (event) => {
    setCarbValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleInputProChange = (event) => {
    setProteinValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleInputFatChange = (event) => {
    setFatValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const PrettoSlider = styled(Slider)({
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&::before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const handleSave = () => {
    const calories = parseFloat(document.getElementById("calories").value);
    const carb = parseFloat(document.getElementById("carb").value);
    const protein = parseFloat(document.getElementById("protein").value);
    const fat = parseFloat(document.getElementById("fat").value);
    console.log({ calories, carb, protein, fat });
    const nutrients = [
      {
        nutrientId: 3,
        targetNutrientValue: fat,
      },
      {
        nutrientId: 2,
        targetNutrientValue: protein,
      },
      {
        nutrientId: 1,
        targetNutrientValue: calories,
      },
      {
        nutrientId: 4,
        targetNutrientValue: carb,
      },
    ];
    const data = { nutrients };
    axios
      .patch(userUrl, data, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      });
    toast.success("Lưu thành công");
  };

  const handleCancel = () => {
    setCaloriesValue(nutrients[0].targetNutrientValue);
    setCarbValue(nutrients[3].targetNutrientValue);
    setProteinValue(nutrients[1].targetNutrientValue);
    setFatValue(nutrients[2].targetNutrientValue);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            <input
              id="calories"
              type="number"
              defaultValue={nutrients[0].targetNutrientValue}
              className="px-5 py-2 border border-primaryColor rounded-lg"
            />
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
              <CaloriesChart data={data} />
              <Box sx={{ width: 450 }}>
                <div className="flex flex-col gap-10">
                  <div>
                    <p className="text-left py-2">Carbohydrate</p>
                    <div className="flex flex-row gap-20 items-center">
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-labelledby="input-slider"
                        color="primary"
                        max={MAX}
                        value={typeof carbValue === "number" ? carbValue : 0}
                        onChange={handleCarbChange}
                      />
                      <p className="px-5 py-2 border border-primaryColor rounded-lg">
                        <Input
                          id="carb"
                          color="primary"
                          value={carbValue}
                          defaultValue={nutrients[3].targetNutrientValue}
                          size="small"
                          onChange={handleInputCarbChange}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: MAX,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left py-2">Đạm</p>
                    <div className="flex flex-row gap-20 items-center">
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        color="secondary"
                        max={MAX}
                        value={
                          typeof proteinValue === "number" ? proteinValue : 0
                        }
                        onChange={handleProteinChange}
                      />
                      <p className="px-5 py-2 border border-primaryColor rounded-lg">
                        <Input
                          id="protein"
                          color="secondary"
                          value={proteinValue}
                          defaultValue={nutrients[1].targetNutrientValue}
                          size="small"
                          onChange={handleInputProChange}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: MAX,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-left py-2">Béo</p>
                    <div className="flex flex-row gap-20 items-center">
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        color="third"
                        max={MAXFat}
                        value={typeof fatValue === "number" ? fatValue : 0}
                        onChange={handleFatChange}
                      />
                      <p className="px-5 py-2 border border-primaryColor rounded-lg">
                        <Input
                          id="fat"
                          color="third"
                          value={fatValue}
                          defaultValue={nutrients[2].targetNutrientValue}
                          size="small"
                          onChange={handleInputFatChange}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: MAX,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <div className="flex flex-col justify-between pt-5 gap-5">
              <div className="mt-20 flex flex-row gap-10 justify-end">
                <button
                  className="px-10 py-2 border border-primaryColor rounded-lg hover:bg-primaryColor hover:text-bgColor"
                  onClick={handleCancel}
                >
                  Hủy
                </button>
                <button
                  className="px-10 py-2 border border-primaryColor rounded-lg hover:bg-primaryColor hover:text-bgColor"
                  onClick={handleSave}
                >
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
