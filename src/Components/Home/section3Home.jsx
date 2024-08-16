import Card2 from '../Card/Card2';
import { IoSearchOutline } from 'react-icons/io5';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFilter } from '../../Context/FilterContext';

function section3Home() {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const { Filter, setFilter } = useFilter();

useEffect(() => {
  console.log('https://api-berita-indonesia.vercel.app/cnn/' + Filter);
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

console.log(data);


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
          {data.map((item, i) => (
            <Card2 key={i}img={item.thumbnail}title={item.title} date={item.pubDate} type='Nasional'/>
          ))}
        </div>
        <div className="flex items-center mt-14">
          <p>showing 1 to 10 of 97 results</p>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default section3Home;
