import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Error from "../Components/Error";
import Section from "../Components/Section";
import Poster from "../Components/Poster";
import { moviesAPI, tvAPI } from "../api";
import Helmet from "react-helmet";


export default () => {
    const searchTitle = "Search Movies or TV Show"

    const useSearch = () => {
        const [searchTerm, setSearchTerm] = useState("");
        const [loading, setLoading] = useState(false);
        const [data, setData] = useState({
            movieResults: null,
            tvResults: null
        });
        const [error, setError] = useState(null);

        const handleSubmit = (event) => {
            event.preventDefault();
            getData();
        }

        const updateTerm = (event) => {
            const {
                target: {
                    value
                }
            } = event;
            setSearchTerm(value);
        }

        const getData = async () => {
            try {
                setLoading(true);
                const {
                    data: {
                        results: movieResults
                    }
                } = await moviesAPI.search(searchTerm);

                const {
                    data: {
                        results: tvResults
                    }
                } = await tvAPI.search(searchTerm);

                setData({
                    movieResults,
                    tvResults
                });
            } catch (e) {
                setError("Can't find movies and tv information.");
            } finally {
                setLoading(false);
            }
        }

        return {
            ...data,
            loading,
            error,
            handleSubmit,
            updateTerm
        }
    }

    const { movieResults, tvResults, loading, error, handleSubmit, updateTerm } = useSearch();

    return (
        <main>
            <SearchBar title={searchTitle} handleSubmit={handleSubmit} updateTerm={updateTerm} />
            {loading ? <Loader /> : (
                error ? (
                    <Error>
                        <Message text="Can't find movies information." color="#e74c3c" />
                    </Error>
                ) : (
                        <div>
                            <Helmet>
                                <title>Search | Heeflix</title>
                            </Helmet>
                            {movieResults && movieResults.length > 0 && (
                                <Section title="Movie Results">
                                    {movieResults.map((movie) => (
                                        <Poster
                                            key={movie.id}
                                            id={movie.id}
                                            imageUrl={movie.poster_path}
                                            title={movie.original_title}
                                            rating={movie.vote_average}
                                            year={movie.release_date && movie.release_date.substring(0, 4)}
                                            isMovie={true}
                                        />
                                    ))}
                                </Section>
                            )}

                            {tvResults && tvResults.length > 0 && (
                                <Section title="TV Show Results">
                                    {tvResults.map((show) => (
                                        <Poster
                                            key={show.id}
                                            id={show.id}
                                            imageUrl={show.poster_path}
                                            title={show.original_name}
                                            rating={show.vote_average}
                                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                        />
                                    ))}
                                </Section>
                            )}
                        </div>
                )
            )}
        </main>
    )
}