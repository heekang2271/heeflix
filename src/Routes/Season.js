import React, {useState, useEffect} from "react";
import Loader from "../Components/Loader";
import { withRouter } from "react-router-dom";
import { moviesAPI, tvAPI } from "../api";
import Error from "../Components/Error";
import Message from "../Components/Message";
import Season from "../Components/Season";
import styled from "styled-components";
import Section from "../Components/Section";

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
                        {data.seasons && data.seasons.length > 0 ? (
                            <Section title="Seasons">
                                {data.seasons.map((season, index) => (
                                    <Season
                                        key={season.id}
                                        number={season.season_number}
                                        bgUrl={season.poster_path}
                                        name={season.name}
                                        date={season.air_date}
                                        delay={(index + 1) * 0.3}
                                    />
                                ))}
                            </Section>
                        ): (
                            <Message text="Season information does not exist." color="#e74c3c" />
                        )}
                    </Main>
            )
        )
    )
})