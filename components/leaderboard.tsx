"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import "./ranking.css";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useSales } from "@/context/SalesContext";
import Image from "next/image";
interface Products {
  id: number;
  teamName: string;
  sales: number;
  code: number;
  productName: string;
  revenue: number;
}
export function Leaderboard() {
  const [products, setProducts] = useState<Products[]>([]);
  const { refresh } = useSales();
  console.log(refresh);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get(`/api/getAll`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data);
        console.log(refresh);
      } catch (error) {
        console.log(error);
      }
    };

    const intervalId = setInterval(() => {
      init();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [refresh]);

  useEffect(() => {
    console.log("Leaderboard component refreshed");
  }, [refresh]);
  const [sortColumn, setSortColumn] = useState<keyof Products>("sales");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (column: keyof Products) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };
  console.log(products);

  const sortedProducts = [...products].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-leaderboard-bg bg-full-cover bg-no-repeat min-h-screen w-full flex flex-col ">
      <h1 className="relative text-center text-6xl mt-8 flex flex-col items-center justify-center">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#D83A56] animate-fade-in">
          Leaderboard
        </span>
      </h1>

      <main className="flex-1 p-4 md:p-6">
        <div className="topLeadersList mb-8">
          {sortedProducts.map((product, index) => (
            <div
              className={`leader ${
                index + 1 === 1
                  ? "leader-center"
                  : index + 1 === 2
                  ? "leader-left"
                  : "leader-right"
              }`}
              key={index}
            >
              {index + 1 <= 3 && (
                <div className="containerImage flex flex-col items-center">
                  <div className="relative mb-4">
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 absolute -top-6 -left-4">
                      {index + 1}
                    </span>
                    <svg
                      id="crown1"
                      fill={
                        index + 1 === 1
                          ? "#ffc107"
                          : index + 1 === 2
                          ? "#c0c0c0"
                          : "#cd7f32"
                      }
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 50"
                      width={
                        index + 1 === 1 ? "90" : index + 1 === 2 ? "65" : "45"
                      }
                      height={index + 1 === 1 ? "45" : "25"}
                    >
                      <polygon
                        className="cls-1"
                        points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                      />
                    </svg>
                  </div>
                  <div className="text-white text-center text-xl">
                    {`${product.productName}`}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="container mx-auto mt-8">
          <Card className="bg-[#ffffff] border-[#0077b6]">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Rank</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead
                      className="cursor-pointer text-right text-[#0077b6]"
                      onClick={() => handleSort("sales")}
                    >
                      <div className="flex items-center justify-end gap-2">
                        Total Sales
                        {sortColumn === "sales" && (
                          <ArrowUpDownIcon className="h-4 w-4 text-[#0077b6]" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead
                      className="cursor-pointer text-right text-[#0077b6]"
                      onClick={() => handleSort("revenue")}
                    >
                      <div className="flex items-center justify-end gap-2">
                        Revenue
                        {sortColumn === "revenue" && (
                          <ArrowUpDownIcon className="h-4 w-4 text-[#0077b6]" />
                        )}
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedProducts.map((product, index) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium text-[#ff6b00]">
                        {index + 1}
                      </TableCell>
                      <TableCell className="text-[#0077b6]">
                        {`${product.productName}  (${product.teamName})`}
                      </TableCell>
                      <TableCell className="text-right text-[#0077b6]">
                        {product.sales}
                      </TableCell>
                      <TableCell className="text-right text-[#0077b6]">
                        {product.revenue}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
