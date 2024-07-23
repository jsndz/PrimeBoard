"use client";
import React, { useState } from "react";
import axios from "axios";

type FormData = {
  teamName: string;
  code: string;
  productName: string;
  sales: number;
  revenue: number;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    productName: "",
    code: "",
    revenue: 0,
    sales: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === "sales" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Form data:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <form noValidate={true} className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Add your Team
          </h2>
          <div className="dark:text-gray-600">Let others see your Revenue!</div>
        </div>

        <div>
          <label htmlFor="teamName" className="text-sm">
            Team name
          </label>
          <input
            id="teamName"
            type="text"
            value={formData.teamName}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="productName" className="text-sm">
            Product name
          </label>
          <input
            id="productName"
            type="text"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="code" className="text-sm">
            Code
          </label>
          <input
            id="code"
            type="password"
            value={formData.code}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="sales" className="text-sm">
            Sales
          </label>
          <input
            id="sales"
            type="number"
            value={formData.sales}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="revenue" className="text-sm">
            Revenue
          </label>
          <input
            id="revenue"
            type="number"
            value={formData.revenue}
            onChange={handleChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#EA3A36] p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
