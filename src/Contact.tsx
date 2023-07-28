import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteFormData, updateFormData } from "./slices/formSlice";

export default function Contact() {
  const formData = useSelector((state) => state.form.data);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFormData(id));
  };

  const handleEdit = (id, updatedData) => {
    // open form modal with data
    dispatch(updateFormData(id, updatedData));
  };

  //   const { firstName, lastName, status } = formData;
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <header>
        <NavLink
          to="/contact/create"
          className=" px-4 py-2 bg-orange-500 rounded-lg text-center mr-0"
        >
          Create Contact
        </NavLink>
      </header>
      {/* <div className=" flex flex-col md:flex-row flex-wrap">
        {formData &&
          formData.map((item) => (
            <div key={item.id} className="md:ml-3 mt-4">
              <p>ID: {item.id}</p>
              <p>First Name: {item.firstName}</p>
              <p>Last Name: {item.lastName}</p>
              <p>Status: {item.status}</p>
              <button
                className=" px-2 py-1 bg-orange-600 rounded-lg "
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
              <button
                className=" px-2 py-1 bg-orange-600 rounded-lg ml-2"
                onClick={() => handleEdit(item.id, item)}
              >
                Edit
              </button>
            </div>
          ))}
      </div> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formData &&
            formData.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
              >
                <div className="p-4 md:p-6">
                  <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    contact
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {item.id}
                  </h3>
                  <h3 className="mt-3 text-gray-500">
                    {item.firstName + " " + item.lastName}
                  </h3>
                  <h3 className="mt-3 text-gray-500">{item.status}</h3>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <button
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    onClick={() => handleEdit(item.id, item)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
