import React from "react";
import Users from "./Users";
const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 70000,
  },
  { id: 2, name: "Bob Smith", position: "Product Manager", salary: 85000 },
  { id: 3, name: "Charlie Brown", position: "UX Designer", salary: 60000 },
  { id: 4, name: "Diana Lee", position: "Data Analyst", salary: 65000 },
  { id: 5, name: "Ethan Clark", position: "DevOps Engineer", salary: 75000 },
];
// create function for get props id from the child components
const getIdUser = (id) => {
  const newId = employees.find((employee) => {
    return employee.id == id;
  });
  console.log(newId);
};

const Profile = () => {
  return (
    <div>
      {employees.map((employees) => {
        return <Users key={employees.id} {...employees} getId={getIdUser} />;
      })}
    </div>
  );
};

export default Profile;
