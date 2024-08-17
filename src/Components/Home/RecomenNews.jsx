import Card2 from '../Card/Card2';
import { IoSearchOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFilter } from '../../Context/FilterContext';
import ReactPaginate from 'react-paginate';

function RecomenNews(props) {
  const{onClick}=props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { Filter, setFilter } = useFilter();

  const [currentPage, setCurrentPage] = useState(0);

  const perPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 8;
  const pageCount = Math.ceil(data && data.length / perPage);

  useEffect(() => {
    axios
      .get('https://api-berita-indonesia.vercel.app/cnn/' + Filter)
      .then((response) => {
        setData(response.data.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [Filter]); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const offset = currentPage * perPage;
  const currentPageData = data ? data.slice(offset, offset + perPage) : '';
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="relative w-full">
      <div className="max-w-[1440px] mx-auto w-full h-auto px-36 py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <nav className="w-1 h-8 bg-[#0090ff]"></nav>
            <h3 className="text-xl font-bold font-Nunito">Rekomendasi Untuk Anda</h3>
          </div>
          <form className="bg-white w-96 mt-5 rounded-md border-2 flex items-center py-1">
            <input type="text" placeholder="Cari disini . . ." className="outline-none text-black px-2 py-2 rounded-md w-80" />
            <IoSearchOutline className="w-6 h-6 ml-5" />
          </form>
        </div>

        <div className="flex items-center justify-center gap-12 flex-wrap mt-12">
          {currentPageData.map((item, i) => (
            <Card2 key={i} img={item.thumbnail} title={item.title} date={item.pubDate} type="Nasional" onClick={onClick}/>
          ))}
        </div>
        <div className="flex items-center mt-14">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active bg-blue_color border-none text-white_color'}
            className="flex justify-center space-x-5 mt-6 flex-wrap w-full"
            previousClassName="flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color border-2 border-gray_color"
            nextClassName="border-2 border-gray_color border-gray-500 flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color"
            pageClassName="border-2 border-gray_color flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text-black mb-4"
          />
        </div>
      </div>
    </section>
  );
}

export default RecomenNews;
