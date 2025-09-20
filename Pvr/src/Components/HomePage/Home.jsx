import React, { useState, useEffect } from 'react';
import "./Home.css";
import logo from "../../assets/images/Logo.png";
import Input from '../../Components/Input/Input';
import Tribute from '../../Components/Tribute/Tribute';
import NotFound from "../../Components/NotFound/NotFound";
import ResultsPagination from "../../Components/Pagination/Pagination";
import Footer from '../Footer/Footer';
import Pagination from '@mui/material/Pagination';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itemsPerPage = 4;

  const handleSearch = () => {
    setSubmittedQuery(searchQuery);
  };

  const fetchMovieData = async () => {
    setNotFound(false);
    const API_KEY = "f4cc4db3";
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${submittedQuery}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True" && data.Search) {
        setMoviesList(data.Search);
      } else {
        setMoviesList([]);
        setNotFound(true);
      }
    } catch (err) {
      console.error("API fetch failed:", err);
      setMoviesList([]);
      setNotFound(true);
    }
  };

  useEffect(() => {
    if (submittedQuery) {
      fetchMovieData();
    }
  }, [submittedQuery]);

  const renderContent = () => {
    if (!submittedQuery) {
      return <Tribute />;
    }
    if (notFound) {
      return <NotFound />;
    }
    return (
      <ResultsPagination
        submittedQuery={submittedQuery}
        moviesList={moviesList}
        setMoviesList={setMoviesList}
        itemsPerPage={itemsPerPage}
      />
    );
  };

  return (
    <>
      <section className="hero-section">
        <img
          src={logo}
          alt="PVR Cinemas Logo"
          className="brandlogo"
        />
        <div className="hero-heading">
          <p className="hero-tagline">Find Your Favorite Movie</p>
          <h2 className="hero-title">PREMIUM</h2>
        </div>
        <div className="divider"></div>

        <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearchClick={handleSearch} />
      </section>

      {renderContent()}
      <Pagination/>
      <Footer/>
    </>
  );
};

export default Home;
