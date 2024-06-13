import React, { ChangeEvent, FormEvent, useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    wantsFood: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, type, name } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newVal });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Gender:</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="form-radio"
              required
            />
            <span className="ml-2 text-black">Male</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2 text-black">Female</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="wantsFood"
            checked={formData.wantsFood}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span className="ml-2 text-black">Do you want food?</span>
        </label>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ControlledForm;
