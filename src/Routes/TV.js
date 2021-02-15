import React, {useState, useEffect, useRef} from "react";
import { tvAPI } from "../api";
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
            topRated: null,
            popular: null,
            airingToday: null
        });
    
        const getData = async () => {
            try {
                const {
                    data: {
                        results: topRated
                    }
                } = await tvAPI.topRated();
                
                const {
                    data: {
                        results: popular
                    }
                } = await tvAPI.popular();
    
                const {
                    data: {
                        results: airingToday
                    }
                } = await tvAPI.airingToday();
    
                setData({
                    topRated,
                    popular,
                    airingToday
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

    const { topRated, popular, airingToday, error, loading } = useGetData();

    return (
        loading ? <Loader /> : (
            error ? (
                <Error>
                    <Message text="Can't find tv information." color="#e74c3c" />
                </Error>
            ) : (
                    <main>
                        <Section title="Top Rated Show">
                            {topRated.map(show => (
                                <Poster 
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                    isMovie={false}
                                />
                            ))}
                        </Section>
                    
                        <Section title="Popular Show">
                            {popular.map(show => (
                                <Poster 
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                    isMovie={false}
                                />
                            ))}
                        </Section>
                    
                        <Section title="Airing Today">
                            {airingToday.map(show => (
                                <Poster 
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                    isMovie={false}
                                />
                            ))}
                        </Section>
                    </main>
            )
        )
    )
};