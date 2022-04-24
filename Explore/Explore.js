import ClientNavigation from "../ClientHeader/ClientNavigation";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    src: "https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?b=1&k=20&m=1361394182&s=170667a&w=0&h=cW_NDV-D-jrWBVcEPclIU9vRipFQZQC0armvGMN7w-c=",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/photos/humpback-whale-playfully-swimming-in-clear-blue-ocean-picture-id1301667498?b=1&k=20&m=1301667498&s=170667a&w=0&h=4vBxtBbCc71tOOtE-5uYNew0xh8B_SSliPoXtmSdFIM=",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/photos/red-panda-in-a-tree-looking-at-the-camera-picture-id147050490?b=1&k=20&m=147050490&s=170667a&w=0&h=3-9IptYytYro9tH9z0zVtz5lPYum-UIR4fX9LzKo7ew=",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/photos/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-picture-id1296353202?b=1&k=20&m=1296353202&s=170667a&w=0&h=PZjACFOzhvma6vorhg2TXRwrZwo6rHt4ttCTUctGZaQ=",
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/photos/humpback-whale-fluke-while-playfully-swimming-in-clear-blue-ocean-picture-id1301711836?b=1&k=20&m=1301711836&s=170667a&w=0&h=oitEgi4VygVu8DBT2Nn0KnGD5teUTSgiVJzjbtlHkN4=",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const Explore = () => {
  return (
    <div className="">
      <ClientNavigation />
      <div className="mt-[5%] p-[5%]">
        <h1 className="font-semibold my-6 text-2xl">
          Explore your favorite spiece
        </h1>
        <ul className="grid grid-cols-4 gap-4">
          {data?.map((data) => (
            <li className="h-64 list-none">
              <Link to={`/explore/${data.id}`}>
                <img
                  src={data.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default Explore;
