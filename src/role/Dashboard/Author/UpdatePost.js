import AuthorLayout from "./AuthorLayout";
import FormInput from "../../../components/Form/FormInput";
import FormHeader from "../../../components/Form/FormHeader";
import { UploadIcon } from "@heroicons/react/outline";
const UpdatePost = () => {
  return (
    <AuthorLayout
      contentChilren={
        <form className="flex h-full flex-col w-full bg-[#ffffff] p-6 rounded mb-4">
          <FormHeader title="Cập nhật bài viết" />
          <FormInput id="science-name" label="Tên khoa học :" type="text" />
          <FormInput
            id="vietnamese-name"
            label="Tên tiếng việt :"
            type="text"
          />
          <FormInput id="local-name" label="Tên địa phương :" type="text" />
          <FormInput id="kingdom" label="Giới :" type="text" />
          <FormInput id="division" label="Ngành :" type="text" />
          <FormInput id="class" label="Lớp :" type="text" />
          <FormInput id="order" label="Bộ :" type="text" />
          <FormInput id="family" label="Họ :" type="text" />
          <div className="px-2 ">
            <label>Hình ảnh : </label>
            <label
              htmlFor="image"
              className="flex text-[14px] px-6 py-2 rounded-lg cursor-pointer border border-blue-700 w-[150px] my-3 text-blue-700"
            >
              Upload Ảnh <UploadIcon className="ml-1 w-5 h-5" />
            </label>
            <input type="file" hidden id="image" />
          </div>
          <FormInput id="use-value" label="Giá trị sử dụng :" type="text" />
          <FormInput
            id="conservation-status"
            label="Tình trạng bảo tồn theo IUCN :"
            type="text"
          />
          <FormInput
            id="redbook-status"
            label="Tình trạng bảo tồn theo sách đỏ Việt Nam :"
            type="text"
          />
          <FormInput
            id="CITES-status"
            label="Tình trạng bảo tồn theo CITES (40/2013/TT-BNNPTNT) :"
            type="text"
          />
          <FormInput id="distribution" label="Phân bố :" type="text" />
          <FormInput id="coordinates" label="Tọa độ:" type="text" />
          <FormInput
            id="specimen-condition"
            label="Tình trạng mẫu vật :"
            type="text"
          />
          <FormInput id="habitat" label="Sinh cảnh :" type="text" />
          <FormInput id="place" label="Địa điểm :" type="text" />
          <FormInput
            id="sample-collection-day"
            label="Ngày thu mẫu :"
            type="text"
          />
          <FormInput
            id="sample-collector"
            label="Người thu mẫu :"
            type="text"
          />
          <div className="flex items-center justify-center py-4">
            <button
              type="submit"
              className="text-white rounded-full px-6 py-2 bg-blue-700 inline-block w-[150px]"
            >
              Thêm
            </button>
          </div>
        </form>
      }
    />
  );
};
export default UpdatePost;
