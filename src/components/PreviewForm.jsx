import { useState } from "react";

const PreviewForm = ({ preview }) => {
  // formData to store the form data
  const [formData, setFormData] = useState({});

  const renderFormItem = (item) => {
    // switch case for different UI types
    switch (item.uiType) {
      case "Input":
        return (
          <input
            type="text"
            placeholder={item.placeholder}
            className="border p-3 rounded-md w-full focus:outline-none focus:border-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, [item.jsonKey]: e.target.value })
            }
          />
        );
      case "Select":
        return (
          <select
            className="border p-3 rounded-md w-full focus:outline-none focus:border-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, [item.jsonKey]: e.target.value })
            }
          >
            {item.validate.options.map((option) => (
              <option key={option.value} value={option.value} className="p-1">
                {option.label}
              </option>
            ))}
          </select>
        );
      case "Radio":
        return (
          <div className="flex justify-between gap-5">
            {item.validate.options.map((option) => (
              <div
                key={option.jsonKey}
                className="flex items-center border p-2 rounded w-full"
              >
                <input
                  className="styled-radio"
                  type="radio"
                  id={option.value}
                  name={option.jsonKey}
                  value={option.value}
                  onChange={() =>
                    setFormData({ ...formData, [item.jsonKey]: option.value })
                  }
                />
                <label className="mx-auto">{option.label}</label>
              </div>
            ))}
          </div>
        );
      case "Switch":
        return (
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) =>
                setFormData({ ...formData, [item.jsonKey]: e.target.checked })
              }
            />
            {item.label}
          </label>
        );
      
        // Any other UI type can be added here
      default:
        return null;
    }
  };

  // render sub parameters with the JSON
  const renderSubParameters = (subParameters) => {
    return subParameters.map((subItem) => (
      <div key={subItem.jsonKey} className="m-6">
        <label className="block font-bold mb-2 text-gray-700">
          {subItem.label}
        </label>
        {renderFormItem(subItem)}
      </div>
    ));
  };

  // render form items with the JSON
  const renderFormItems = (items) => {
    return items.map((item) => (
      <div key={item.jsonKey} className="m-2">
        <label className="block font-bold mb-2 text-2xl text-gray-800">
          {item.label}
        </label>
        {item.uiType === "Group" &&
        item.subParameters &&
        item.jsonKey === "pizza_type" ? (
          <div className="relative">{renderFormItem(item)}</div>
        ) : (
          renderFormItem(item)
        )}
        {item.uiType === "Group" &&
          item.subParameters &&
          renderSubParameters(item.subParameters)}
      </div>
    ));
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold mb-3">Preview Form</h1>
      <div className="mx-auto p-6 bg-white rounded-md shadow-md border">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Order Form
        </h2>
        {/* preview used as prop to pass JSON data */}
        {preview && preview.length > 0 && renderFormItems(preview)}
        <button
          onClick={() => console.log("Form Data:", formData)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
        {/* This is used to show the options which are selected in the form */}
        {Object.keys(formData).length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Form Data:</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewForm;
