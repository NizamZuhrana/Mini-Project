import { useState } from "react";
import axios from "axios";



const useListUsers = () => {
    const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: null,
    total: null,
    total_pages: null,
  });

  const getListUsers = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${pagination.page}`
      );
      setUsers(response.data.data);
      console.log(response);
      setPagination({
        page: response.data.page,
        per_page: response.data.per_page,
        total: response.data.total,
        total_pages: response.data.total_pages,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    if (pagination.page < pagination.total_pages) {
      setPagination((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  };

  const handlePreviousPage = () => {
    if (pagination.page > 1) {
      setPagination((prevState) => ({
        ...prevState,
        page: prevState.page - 1,
      }));
    }
  };
    return { users, pagination, getListUsers, handleNextPage, handlePreviousPage };
}
 
export default useListUsers;