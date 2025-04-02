import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
const PaginatedList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/items', {
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        setData(response.data.results);
        setTotalItems(response.data.totalItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const maxPage = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <nav>
            <ul className="pagination">
              <li>
                <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                  Previous
                </button>
              </li>
              {Array.from({ length: maxPage }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  <button onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : null}>
                    {page}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => setCurrentPage(Math.min(currentPage + 1, maxPage))} disabled={currentPage === maxPage}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default memo(PaginatedList);