import { useParams } from "react-router-dom";
import ClientNavigation from "../ClientHeader/ClientNavigation";
import Footer from "../Footer";
const ExploreDetail = () => {
  const params = useParams();
  return (
    <div>
      <ClientNavigation />
      <div className="p-[8%]">
        <div className="mb-10">
          <h1>place name spiece here</h1>
          <div className="flex items-center gap-10 ">
            <div className="w-1/2 ">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              incidunt alias ad non placeat consequuntur nulla, deleniti ullam
              aperiam adipisci nobis dolores porro temporibus ducimus quisquam,
              reprehenderit exercitationem vero culpa!
            </div>
          </div>
        </div>
        <div>
          <h1>Related spiece</h1>
          <ul className="w-full grid grid-cols-5 gap-4 h-36">
            <li className="">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
            <li className="">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full object-cover"
              />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ExploreDetail;
