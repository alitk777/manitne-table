"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MantineReactTable } from "mantine-react-table";
import { Button } from "@mantine/core";

export default function Home() {
  const router = useRouter();

  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 28,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 34,
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      age: 22,
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      age: 45,
    },
    {
      id: 5,
      firstName: "Charlie",
      lastName: "Davis",
      age: 30,
    },
    {
      id: 6,
      firstName: "David",
      lastName: "Wilson",
      age: 27,
    },
    {
      id: 7,
      firstName: "Eve",
      lastName: "Miller",
      age: 29,
    },
    {
      id: 8,
      firstName: "Frank",
      lastName: "Moore",
      age: 33,
    },
    {
      id: 9,
      firstName: "Grace",
      lastName: "Taylor",
      age: 31,
    },
    {
      id: 10,
      firstName: "Hank",
      lastName: "Anderson",
      age: 26,
    },
    {
      id: 11,
      firstName: "Ivy",
      lastName: "Thomas",
      age: 24,
    },
    {
      id: 12,
      firstName: "Jack",
      lastName: "Jackson",
      age: 35,
    },
    {
      id: 13,
      firstName: "Karen",
      lastName: "White",
      age: 32,
    },
    {
      id: 14,
      firstName: "Leo",
      lastName: "Harris",
      age: 28,
    },
    {
      id: 15,
      firstName: "Mia",
      lastName: "Martin",
      age: 23,
    },
    {
      id: 16,
      firstName: "Nick",
      lastName: "Thompson",
      age: 36,
    },
    {
      id: 17,
      firstName: "Olivia",
      lastName: "Garcia",
      age: 27,
    },
    {
      id: 18,
      firstName: "Paul",
      lastName: "Martinez",
      age: 29,
    },
    {
      id: 19,
      firstName: "Quinn",
      lastName: "Robinson",
      age: 25,
    },
    {
      id: 20,
      firstName: "Rachel",
      lastName: "Clark",
      age: 34,
    },
  ];

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
  ];

  return (
    <>
      <div className="text-center text-gray-500 font-bold text-3xl mt-2">
        Mantine React Table
      </div>
      <div className="container m-auto my-16">
        <MantineReactTable
          columns={columns}
          data={data}
          enablePagination
          enableSorting
        />
      </div>
      <div className="flex justify-center align-middle my-16">
        <Button
          onClick={() => router.push("/mantine-react-table")}
          className="m-auto"
        >
          Another Mantine react table example
        </Button>
      </div>
    </>
  );
}
