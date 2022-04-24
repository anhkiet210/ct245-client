import { Link } from "react-router-dom";
import AuthorLayout from "./AuthorLayout";
const AuthorDashboard = () => {
  return (
    <AuthorLayout
      contentChilren={
        <div className=" bg-[#ffffff] p-6">
          <div>
            <h1 className="text-xl my-4">Bài viết chờ duyệt</h1>
            <table class="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th class="post-table_item">STT</th>
                  <th class="post-table_item">Tên loài</th>
                  <th class="post-table_item">Hình ảnh</th>
                  <th class="post-table_item">Người thêm</th>
                  <th class="post-table_item">Ngày đăng</th>
                  <th class="post-table_item">Người thu mẫu</th>
                  <th class="post-table_item">Sửa </th>
                  <th class="post-table_item">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="post-table_item">1</td>
                  <td class="post-table_item">Ếch giun nguyễn</td>
                  <td class="post-table_item">
                    <img
                      src="https://images.unsplash.com/photo-1572649298715-f5954fe57842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                      className="w-[200px] h-[150px] object-cover"
                    />
                  </td>
                  <td class="post-table_item">Nguyễn Văn A</td>
                  <td class="post-table_item">28/3/2022</td>
                  <td class="post-table_item">28/3/2022</td>
                  <td class="post-table_item">
                    <button className="rounded-full px-4 text-blue-500 py-2 border border-blue-500 whitespace-nowrap">
                      Duyệt
                    </button>
                  </td>
                  <td class="post-table_item">
                    <button className="rounded-full px-4 text-red-500 py-2 border border-red-500 whitespace-nowrap">
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h1 className="text-xl my-4">Bài viết gần đây</h1>
            <table class="border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th class="post-table_item">STT</th>
                  <th class="post-table_item">Tên loài</th>
                  <th class="post-table_item">Hình ảnh</th>
                  <th class="post-table_item">Người thêm</th>
                  <th class="post-table_item">Ngày đăng</th>
                  <th class="post-table_item">Người thu mẫu</th>
                  <th class="post-table_item">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="post-table_item">1</td>
                  <td class="post-table_item">Ếch giun nguyễn</td>
                  <td class="post-table_item">
                    <img
                      src="https://images.unsplash.com/photo-1572649298715-f5954fe57842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                      className="w-[200px] h-[150px] object-cover"
                    />
                  </td>
                  <td class="post-table_item">Nguyễn Văn A</td>
                  <td class="post-table_item">28/3/2022</td>
                  <td class="post-table_item">28/3/2022</td>
                  <td class="post-table_item">
                    <Link
                      to="/post/detail"
                      className="rounded-full px-4 text-green-500 py-2 border border-green-500 whitespace-nowrap"
                    >
                      Chi tiết
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
};
export default AuthorDashboard;
