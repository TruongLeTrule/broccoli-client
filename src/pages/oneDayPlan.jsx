import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import SessionsPlan from "../components/sessionsPlan";
import CaloriesChart from "../components/caloriesChart";
import CaloriesDetails from "../components/caloriesDetails";
import { BsThreeDots } from "react-icons/bs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import theme from "../components/theme";

const OneDayPlan = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="mt-40 grid grid-cols-2 px-40 gap-40">
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2">
              <BsThreeDots className="text-primaryColor" />
              <p className="text-primaryColor text-lg">Thực đơn</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Basic date picker" />
              </LocalizationProvider>
              {/* <p className="text-primaryColor text-lg">Hôm nay</p> */}
            </div>
          </div>
          <SessionsPlan />
        </div>
        <div>
          <div>
            <p className="text-lg text-primaryColor">Thành phần dinh dưỡng:</p>
          </div>
          <div className="mx-auto w-full grid grid-cols-1">
            <CaloriesChart />
            <div className="text-center">
              <div className="grid grid-cols-3 gap-8">
                <div></div>
                <div className="text-primaryColor font-medium">TỔNG</div>
                <div className="text-primaryColor font-medium">MỤC TIÊU</div>
              </div>
              <CaloriesDetails />
              <button className="mt-10 text-primaryColor hover:text-btnColor">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default OneDayPlan;
