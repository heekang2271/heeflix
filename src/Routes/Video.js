import React, {useState, useEffect} from "react";
import Loader from "../Components/Loader";
import { withRouter } from "react-router-dom";
import { moviesAPI, tvAPI } from "../api";
import Error from "../Components/Error";
import Message from "../Components/Message";
import Video from "../Components/Video";
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
                        {data.videos.results && data.videos.results.length > 0 ? 
                            <Video videos={data.videos.results} /> :
                            <Message text="The video does not exist." color="#FFF" />
                        }
                    </Main>
            )
        )
    )
})