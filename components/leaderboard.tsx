"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

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

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get(`/api/getAll`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);
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
    <div className="bg-[#f5f5f5] min-h-screen w-full flex flex-col">
      <main className="flex-1 p-4 md:p-6">
        <div className="container mx-auto">
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
                        {product.productName}
                      </TableCell>
                      <TableCell className="text-right text-[#0077b6]">
                        {product.sales}
                      </TableCell>
                      <TableCell className="text-right text-[#0077b6]">
                        {/* {product.revenue.toLocaleString()} */}
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
