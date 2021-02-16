import React, {useState, useEffect} from "react";
import Loader from "../Components/Loader";
import { withRouter } from "react-router-dom";
import { moviesAPI, tvAPI } from "../api";
import Error from "../Components/Error";
import Message from "../Components/Message";
import DetailHeader from "../Components/DetailHeader";
import noPoster from "../img/popcorn.png";
import Helmet from "react-helmet";

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
        loading ? <Loader /> : (
            error ? (
                <Error>
                    <Message text="Can't find movies information." color="#e74c3c" />
                </Error>
            ) : (
                    <>
                        <Helmet>
                            <title>{data.original_title ? data.original_title : data.original_name} | Heeflix</title>
                        </Helmet>
                        <DetailHeader
                            cover={data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : noPoster}
                        />
                    </>
            )
        )
    )
})