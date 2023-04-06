import React from "react";

async function CallUSER() {
  const res = await fetch("http://localhost:3000/api/raw");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const data = await CallUSER();
  console.log("Raw Page", data);
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>{item.first_name}</div>
      ))}
    </div>
  );
};

export default page;
