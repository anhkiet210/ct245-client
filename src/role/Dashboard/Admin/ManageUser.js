import AdminLayout from "./AdminLayout";

const ManageUser = () => {
  return (
    <AdminLayout
      contentChilren={
        <div className=" bg-[#ffffff] p-6">
          <h1 className="text-xl my-4">Tổng quan người dùng</h1>
          <table class="border-collapse border border-slate-500">
            <thead>
              <tr>
                <th class="post-table_item">STT</th>
                <th class="post-table_item">Họ tên</th>
                <th class="post-table_item">Email</th>
                <th class="post-table_item">Năm sinh</th>
                <th class="post-table_item">Giới tính</th>
                <th class="post-table_item">Ảnh đại diện</th>
                <th class="post-table_item">Sửa</th>
                <th class="post-table_item">Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="post-table_item">1</td>
                <td class="post-table_item">Trần Toàn Phát</td>
                <td class="post-table_item">ttphat@gmail.com</td>
                <td class="post-table_item">2000</td>
                <td class="post-table_item">Name</td>
                <td class="post-table_item">
                  <img
                    src="https://images.unsplash.com/photo-1572649298715-f5954fe57842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="w-[200px] h-[150px] object-cover"
                  />
                </td>

                <td class="post-table_item">
                  <button className="rounded-full px-6 text-blue-500 py-2 border border-blue-500 whitespace-nowrap">
                    Action
                  </button>
                </td>
                <td class="post-table_item">
                  <button className="rounded-full px-6 text-red-500 py-2 border border-red-500 whitespace-nowrap">
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    />
  );
};
export default ManageUser;
