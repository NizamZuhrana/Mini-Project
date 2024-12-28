import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const useDetailsData = () => {
  const [detailsData, setDetailsData] = useState({});
  const { id } = useParams();

  const getDetails = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setDetailsData(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { detailsData, getDetails };
};

export default useDetailsData;
