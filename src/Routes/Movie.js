import React, {useState, useEffect, useRef} from "react";
import { moviesAPI } from "../api";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Error from "../Components/Error";
import Section from "../Components/Section";
import Poster from "../Components/Poster";

export default () => {
    const useGetData = () => {
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const [data, setData] = useState({
            nowPlaying: null,
            upcoming: null,
            popular: null
        });
    
        const getData = async () => {
            try {
                const {
                    data: {
                        results: nowPlaying
                    }
                } = await moviesAPI.nowPlaying();
                
                const {
                    data: {
                        results: upcoming
                    }
                } = await moviesAPI.upcoming();
    
                const {
                    data: {
                        results: popular
                    }
                } = await moviesAPI.popular();
    
                setData({
                    nowPlaying,
                    upcoming,
                    popular
                });
            } catch (e) {
                setError(true);
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1500);
            }
        }

        useEffect(() => {
            getData();
        }, []);

        return {
            ...data,
            loading,
            error
        }
    }

    const { nowPlaying, upcoming, popular, error, loading } = useGetData();

    return (
        loading ? <Loader /> : (
            error ? (
                <Error>
                    <Message text="Can't find movies information." color="#e74c3c" />
                </Error>
            ) : (
                    <main>
                        <Section title="Now Playing">
                            {nowPlaying.map(movie => (
                                <Poster 
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    isMovie={ true}
                                />
                            ))}
                        </Section>
                    
                        <Section title="Upcoming Movies">
                            {upcoming.map(movie => (
                                <Poster 
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    isMovie={ true}
                                />
                            ))}
                        </Section>
                    
                        <Section title="Popular Movies">
                            {popular.map(movie => (
                                <Poster 
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    isMovie={ true}
                                />
                            ))}
                        </Section>
                    </main>
            )
        )
    )
};