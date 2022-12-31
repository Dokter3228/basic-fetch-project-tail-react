import React, { useState, useEffect } from "react";
import Input from "../components/Input";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col items-center">
      {/* input container */}
      <Input />
      <h1 className="text-4xl mt-12 font-medium">Cocktails</h1>
      <div className="container flex flex-col items-center">
        {loading && (
          <h1 className="text-center">Please wait, I'm loading...</h1>
        )}
        {error && <h1 className="text-center">Sorry, there's an error</h1>}
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-3/4 m-4 bg-white p-6 rounded-r-sm shadow-md flex flex-col items-center justify-center"
              >
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.body}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
