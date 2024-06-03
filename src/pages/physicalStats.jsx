import React from "react";
import SidebarSetting from "../components/sidebarSetting";

const PhysicalStats = () => {
  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div>
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-justify leading-loose">
          Hãy nhập thông tin tất cả các chỉ số thể chất của bạn để chúng tôi tạo
          ra các thực đơn phù hợp với bạn hơn.
        </p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium text-primaryColor">
            Giới tính sinh học
          </p>
          <div className="flex flex-row gap-8 ">
            <button className="px-2 py-2 border border-primaryColor rounded-md hover:border-btnColor">
              Nam
            </button>
            <button className="px-4 py-2 border border-primaryColor rounded-md hover:border-btnColor">
              Nữ
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium text-primaryColor">Chiều cao</p>
          <div className="flex flex-row gap-5 items-center">
            <input
              type="text"
              className="px-4 py-2 border border-primaryColor rounded-md w-[98px] focus:border-primaryColor"
            />
            <p>cm</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium text-primaryColor">Cân nặng</p>
          <div className="flex flex-row gap-7 items-center">
            <input
              type="text"
              className="px-4 py-2 border border-primaryColor rounded-md w-[98px] focus:border-primaryColor"
            />
            <p>kg</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium text-primaryColor">Tuổi</p>
          <div className="flex flex-row gap-5 items-center">
            <input
              type="text"
              className="px-4 py-2 border border-primaryColor rounded-md w-[95px] focus:border-primaryColor"
            />
            <p>tuổi</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium text-primaryColor">
            Lượng mỡ trong cơ thể
          </p>
          <div className="flex flex-row gap-8 ">
            <button className="px-8 py-2 border border-primaryColor rounded-md hover:border-btnColor">
              Thấp
            </button>
            <button className="px-2 py-2 border border-primaryColor rounded-md hover:border-btnColor">
              Trung bình
            </button>
            <button className="px-8 py-2 border border-primaryColor rounded-md hover:border-btnColor">
              Cao
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium text-primaryColor">
            Hoạt động thể chất
          </p>
          <div className="flex flex-row gap-7 items-center">
            <select
              name=""
              id=""
              className="px-4 py-2 border border-primaryColor rounded-md hover:border-btnColor focus:border-btnColor"
            >
              <option value="">Không vận động</option>
              <option value="">Vận động ít</option>
              <option value="">Vận động thường xuyên</option>
              <option value="">Vận động tần suất cao</option>
            </select>
          </div>
        </div>
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
  );
};

export default PhysicalStats;
