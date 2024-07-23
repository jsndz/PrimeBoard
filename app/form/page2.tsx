"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSales } from "../../context/SalesContext";
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
  const [revenue, setRevenue] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [productUpdate, setProductUpdate] = useState<boolean>(false);
  const router = useRouter();
  const { triggerRefresh } = useSales();
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
  const handleRevenueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseFloat(e.target.value);
    setRevenue(value);
  };
  const handleSales = async () => {
    try {
      const response = await axios.patch(
        `/api/team/${formData.teamName}`,
        { sales: sales, revenue: revenue },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("Triggering refresh");
        triggerRefresh();
      }
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
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-200">
      {productUpdate ? (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-900 dark:text-gray-100">
              Sales and Revenue
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Submit your latest Sales and Revenue to the Leaderboard!
            </p>
          </div>
          <div>
            <label
              htmlFor="sales"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Sales
            </label>
            <input
              id="sales"
              type="number"
              value={sales}
              onChange={handleSalesChange}
              className="w-full p-4 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:ring-[#EA3A36] focus:border-[#EA3A36]"
            />
          </div>
          <div>
            <label
              htmlFor="revenue"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Revenue
            </label>
            <input
              id="revenue"
              type="number"
              value={revenue}
              onChange={handleRevenueChange}
              className="w-full p-4 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:ring-[#EA3A36] focus:border-[#EA3A36]"
            />
          </div>
          <button
            onClick={handleSales}
            className="w-full bg-[#ff8d35] p-3 text-sm font-bold tracking-wide uppercase rounded-lg text-[#FFFFFF] shadow-md hover:bg-[#FFFFFF] hover:text-[#ff8d35] transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      ) : (
        <form noValidate className="space-y-6" onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-900 dark:text-gray-100">
              Login
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Update Your Sales and Revenue!
            </p>
          </div>

          <div>
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Team Name
            </label>
            <input
              id="teamName"
              type="text"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:ring-[#EA3A36] focus:border-[#EA3A36]"
            />
          </div>

          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Code
            </label>
            <input
              id="code"
              type="password"
              value={formData.code}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 focus:ring-[#EA3A36] focus:border-[#EA3A36]"
            />
          </div>

          {errorMessage && (
            <div className="text-[#fb0f0f] text-center">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-[#ff8d35] p-3 text-sm font-bold tracking-wide uppercase rounded-lg text-[#FFFFFF] shadow-md hover:bg-[#FFFFFF] hover:text-[#ff8d35] transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
