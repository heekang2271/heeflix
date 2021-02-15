import React, {useState, useEffect} from "react";
import Loader from "../Components/Loader";
import { withRouter } from "react-router-dom";
import { moviesAPI, tvAPI } from "../api";
import Error from "../Components/Error";
import Message from "../Components/Message";
import Detail from "../Components/Detail";
import noPoster from "../img/popcorn.png";
import DetailHeader from "../Components/DetailHeader";
import styled from "styled-components";

const Main = styled.main`
    padding-top: 0;
`;

export default withRouter(({ location: { pathname }, match: { params: { id } }, history: { push } }) => {
    const isMovie = pathname.includes("/movie/");

    const useGetData = () => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);

        const getData = async () => {
            const parseId = parseInt(id);
            if (isNaN(parseId)) {
                return push("/");
            }
            
            try {
                let result = null;
                if (isMovie) {
                    ({
                        data: result
                    } = await moviesAPI.movieDetail(parseId));
                } else {
                    ({
                        data: result
                    } = await tvAPI.showDetail(parseId));
                }
                setData(result);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        useEffect(() => {
            getData();
        }, [])

        return {
            data,
            loading,
            error
        }
    }

    const { data, loading, error } = useGetData();
    return (
        loading ? <div></div> : (
            error ? (
                <Error>
                    <Message text="Can't find movies information." color="#e74c3c" />
                </Error>
            ): (
                    <Main>
                        {console.log(data)}
                        <Detail
                            bgImage={data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : noPoster}
                            title={data.original_title ? data.original_title : data.original_name}
                            year={data.release_date ? data.release_date.substring(0, 4) : data.first_air_date.substring(0, 4)}
                            runtime={data.runtime || data.runtime === 0 ? data.runtime : data.episode_run_time[0]}
                            genres={data.genres}
                            overview={data.overview}
                            imdb={data.imdb_id ? `https://imdb.com/title/${data.imdb_id}` : "https://imdb.com"}
                            isMovie={isMovie}
                        />
                    </Main>
            )
        )
    )
})