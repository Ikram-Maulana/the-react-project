import { Card } from "flowbite-react";
import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - The React Project";
  }, []);

  return (
    <section className="container p-5 mx-auto">
      <Card>
        <h5 className="text-2xl text-center md:text-left font-bold tracking-tight text-gray-900 dark:text-white">
          404
        </h5>
        <p className="font-normal text-center md:text-left text-gray-700 dark:text-gray-400">
          Request Not Found
        </p>
      </Card>
    </section>
  );
};

export default NotFound;
