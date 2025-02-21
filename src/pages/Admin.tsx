import { FC, useEffect, useState } from "react";
import Table from "../components/common/Table";
import UpdateAdminPopup from "../components/Admin/UpdateAdminPopup";

const Admin : FC = () => {
    //declare products state
    const [products, setProducts] = useState([]);

    const columns = [
        {name: "Tên sản phẩm", key: "title", type: "text"},
        {name: "Giá", key: "price"},
        {name: "Hình ảnh", key: "images", type: "image"},
        {name: "", key: "Xóa", type: "button"},
        {name: "", key: "Sửa", type: "button"},
    ]

    //fetch products from the server
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=5")
        .then((response) => response.json())
        .then(({products}) => setProducts(products));
    }, []);

    // declare state for popup
    const [isOpen, setIsOpen] = useState(false);

    // function to close popup
    const closePopup = () => setIsOpen(false);

    // function to update admin
    const updateAdmin = (data: any) => {
        console.log("Admin updated", data);
        setIsOpen(false);
    };

    const deleteRow = (data: any) => {
        //update products state
        setProducts(products.filter((product: any) => product.id !== data.id));
    }

    return (
      <>
        <div className="container mx-auto px-4 min-h-[83vh]">
          <h1>Admin Page</h1>
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
          <div></div>
          <div className="flex w-full gap-2 shrink-0 md:w-max">
            <div className="w-full md:w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Tìm kiếm
                </label>
              </div>
            </div>
            <button onClick={() => setIsOpen(true)}
              className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Thêm mới
            </button>
          </div>
        </div>
      </div>
          <Table columns={columns} data={products} deleteRow={deleteRow}/>
        </div>
        <UpdateAdminPopup isOpen={isOpen} onClose={closePopup} onSubmit={updateAdmin}/>
      </>
    );

}

export default Admin;