"use client";

import React from "react";
import { MantineReactTable, MRT_Cell } from "mantine-react-table";
import { Button, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

const sampleData: Person[] = [
  { id: 1, firstName: "Alice", lastName: "Johnson", age: 25 },
  { id: 2, firstName: "Bob", lastName: "Smith", age: 35 },
  { id: 3, firstName: "Charlie", lastName: "Brown", age: 29 },
  { id: 4, firstName: "Dana", lastName: "White", age: 42 },
  { id: 5, firstName: "Eve", lastName: "Davis", age: 31 },
  { id: 6, firstName: "Frank", lastName: "Miller", age: 27 },
  { id: 7, firstName: "Grace", lastName: "Lee", age: 33 },
  { id: 8, firstName: "Hannah", lastName: "Wilson", age: 28 },
  { id: 9, firstName: "Ian", lastName: "Taylor", age: 36 },
  { id: 10, firstName: "Jack", lastName: "Anderson", age: 24 },
  { id: 11, firstName: "Karen", lastName: "Thomas", age: 39 },
  { id: 12, firstName: "Leo", lastName: "Jackson", age: 30 },
  { id: 13, firstName: "Mia", lastName: "Martin", age: 26 },
  { id: 14, firstName: "Nina", lastName: "Garcia", age: 32 },
  { id: 15, firstName: "Oscar", lastName: "Martinez", age: 40 },
  { id: 16, firstName: "Paul", lastName: "Rodriguez", age: 29 },
  { id: 17, firstName: "Quinn", lastName: "Lopez", age: 27 },
  { id: 18, firstName: "Rachel", lastName: "Gonzalez", age: 34 },
  { id: 19, firstName: "Sam", lastName: "Wilson", age: 31 },
  { id: 20, firstName: "Tina", lastName: "Perez", age: 28 },
  { id: 21, firstName: "Uma", lastName: "Sanchez", age: 33 },
  { id: 22, firstName: "Victor", lastName: "Clark", age: 37 },
  { id: 23, firstName: "Wendy", lastName: "Ramirez", age: 25 },
  { id: 24, firstName: "Xander", lastName: "Lewis", age: 38 },
  { id: 25, firstName: "Yara", lastName: "Robinson", age: 29 },
  { id: 26, firstName: "Zane", lastName: "Walker", age: 30 },
  { id: 27, firstName: "Amy", lastName: "Young", age: 26 },
  { id: 28, firstName: "Brian", lastName: "King", age: 35 },
  { id: 29, firstName: "Cathy", lastName: "Scott", age: 32 },
  { id: 30, firstName: "David", lastName: "Green", age: 40 },
  { id: 31, firstName: "Ella", lastName: "Adams", age: 27 },
  { id: 32, firstName: "Finn", lastName: "Baker", age: 34 },
  { id: 33, firstName: "Gina", lastName: "Nelson", age: 28 },
  { id: 34, firstName: "Henry", lastName: "Carter", age: 36 },
  { id: 35, firstName: "Ivy", lastName: "Mitchell", age: 31 },
  { id: 36, firstName: "Jake", lastName: "Perez", age: 29 },
  { id: 37, firstName: "Kara", lastName: "Roberts", age: 33 },
];

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    size: 150,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    size: 150,
  },
  {
    accessorKey: "age",
    header: "Age",
    size: 100,
    Cell: ({ cell }: { cell: MRT_Cell<Person> }) => {
      const age = cell.getValue<number>();
      return <Text color={age < 30 ? "red" : "green"}>{age}</Text>;
    },
  },
  {
    header: "Full Name",
    id: "fullName",
    accessorFn: (row: Person) => `${row.firstName} ${row.lastName}`,
    size: 200,
  },
];

export default function TableExample() {
  const router = useRouter();

  return (
    <>
      <div className="text-center text-gray-500 font-bold text-3xl mt-2">
        Mantine React Table
      </div>
      <div className="container m-auto my-16">
        <MantineReactTable<Person>
          columns={columns}
          data={sampleData}
          enableColumnResizing
          enableColumnOrdering
          enableGlobalFilter
          initialState={{
            pagination: { pageSize: 5, pageIndex: 0 },
          }}
          mantinePaginationProps={{
            rowsPerPageOptions: ["5", "10", "20"],
          }}
        />
      </div>
      <div className="flex justify-center align-middle my-16">
        <Button onClick={() => router.push("/")} className="m-auto">
          Back to home
        </Button>
      </div>
    </>
  );
}
