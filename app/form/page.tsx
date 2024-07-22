"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type FormData = {
  teamName: string;
  code: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    code: "",
  });
  const [sales, setSales] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [productUpdate, setProductUpdate] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleSalesChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseFloat(e.target.value);
    setSales(value);
  };
  const handleSales = async () => {
    try {
      const response = await axios.patch(
        `/api/team/${formData.teamName}`,
        { sales: sales },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `/api/team/${formData.teamName}`,
        { code: formData.code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setProductUpdate(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          setErrorMessage("Wrong code");
        } else if (error.response && error.response.status === 404) {
          setErrorMessage("Team not found");
        } else {
          setErrorMessage("Error fetching team data");
        }
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      {productUpdate ? (
        <div>
          <label htmlFor="sales" className="text-sm">
            Sales
          </label>
          <input
            id="sales"
            type="number"
            value={sales}
            onChange={handleSalesChange}
            className="w-full p-3 rounded dark:bg-gray-100"
          />

          <button
            onClick={handleSales}
            className="w-full bg-[#EA3A36] p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Submit
          </button>
        </div>
      ) : (
        <form noValidate={true} className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Add your Team
            </h2>
            <div className="dark:text-gray-600">
              Let others see your Revenue!
            </div>
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

          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <button
            type="submit"
            className="w-full bg-[#EA3A36] p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
