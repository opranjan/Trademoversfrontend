import React, { useState, useEffect } from "react";
import "../NewComponent.css";
import axios from "axios";
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const ContactComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://trademovers.onrender.com/contacts"); // Replace with your API endpoint
        setData(response.data);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




    // Function to convert data to Excel format (CSV)
    const convertDataToCSV =async () => {
      const csvData = await Papa.unparse(data);
      return new Blob([csvData], { type: 'text/csv' });
    };
  
    // Function to initiate the download
    const downloadExcel = async() => {
      const dataBlob =await convertDataToCSV();
      saveAs(dataBlob, 'api_data.csv');
    };

    
  

  return (
    <>
      <div>
        {data ? (
          <div className="conatineallblock">
            <h1>Enquiry List:</h1>
            <button onClick={downloadExcel} className="download">Download Excel</button>
            <ul>
              {data.map((item) => (
                <div className="contactCardContainer">
                <div key={item._id} className="contactCard">
                {/* <p>{item._id}</p> */}
                <p>{`Name of Person : ${item.name_of_person}`}</p>
                <p>{`Name of Company : ${item.name_of_company}`}</p>
                <p>{`Mobile No. : ${item.mobileno_of_person}`}</p>
                <p>{`Email of Person : ${item.email_of_person}`}</p>
                <p>{`Amount of Product Required : ${item.product_required}`}</p>
                <p>{`City : ${item.place}`}</p>
                <p>{`Designation :${item.designation}`}</p>
                <p>{`Description : ${item.description}`}</p>
                </div>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default ContactComponent;
