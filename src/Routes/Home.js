import React from "react";
import Loader from "../Components/Loader";
import styled from "styled-components";
import Nomad from "../img/nomad.png";
import Poster1 from "../img/main1.png";
import Poster2 from "../img/main3.png";
import SearchImage from "../img/main2.png";
import HomeContent from "../Components/HomeContent";
import Helmet from "react-helmet";

const Container = styled.div`
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
`;

const Cover = styled.div`
    position:absolute;
    background-image: url(${props => props.small});
    width: 100%;
    height: 400px;
    @media only screen and (min-width: 800px) {
        height: 600px;
    }

    @media only screen and (min-width: 1280px) {
        background-image: url(${props => props.medium});
        height: 800px;
    }

    @media only screen and (min-width: 2000px) {
        background-image: url(${props => props.large});
        height: 1000px;
    }

    opacity: 0.3;
    z-index: -1;
`;

const Wrap = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MyLogo = styled.li`
    font-family: 'Niconne', cursive;
    font-size: 70px;
    text-shadow: 5px 5px 5px #202020;
    color: #E7E7E7;
    margin: 0 40px;
`;

const Collabo = styled.li`
    & span {
        font-size: 50px;
        color: #F0F0F0;
    }
`;

const NomadLogo = styled.li`
    width: 150px;
    & img {
        width: 100%;
        height: auto;
    }
`;

const Intro = styled.p`
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
    line-height: 1.5;
`;

const LogoList = styled.ul`
    display: flex;
    align-items: center;
`;

const First = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    flex-direction: column;

    & ${Wrap} {
        flex-direction: column;
    }

    @media only screen and (min-width: 800px) {
        height: 600px;

        ${NomadLogo} {
            width: 250px;
        }
        ${MyLogo} {
            font-size: 100px;
            margin: 0 60px;
        }
        ${Collabo} {

        }
        ${Intro} {
            font-size: 26px;
        }
    }

    @media only screen and (min-width: 1280px) {
        height: 800px;
        ${NomadLogo} {
            width: 350px;
        }
        ${MyLogo} {
            font-size: 150px;
            margin: 0 90px;
        }
        ${Collabo} {
            & span {
                font-size: 80px;
            }
        }
        ${Intro} {
            font-size: 38px;
        }
    }

    @media only screen and (min-width: 2000px) {
        height: 1000px;
        ${NomadLogo} {
            width: 450px;
        }
        ${MyLogo} {
            font-size: 200px;
            margin: 0 120px;
        }
        ${Collabo} {
            & span {
                font-size: 120px;
            }
        }
        ${Intro} {
            font-size: 50px;
        }
    }
`;

const RotateHolder = styled.div`
    position: relative;
    width: 140px;
    height: 210px;
`;

const Image = styled.img`
    width: 200px;
    height: auto;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;

    &:not(:last-child) {
        border-top: 10px solid #303030;
        border-bottom: 10px solid #303030;
    }

    @media only screen and (min-width: 800px) {
        height: 400px;
        ${RotateHolder} {
            width: 200px;
            height: 270px;
        }
        ${Intro} {
            font-size: 26px;
        }
        ${Image} {
            width: 400px;
        }
    }

    @media only screen and (min-width: 1280px) {
        height: 600px;
        ${RotateHolder} {
            width: 250px;
            height: 320px;
        }
        ${Intro} {
            font-size: 30px;
        }
        ${Image} {
            width: 400px;
        }
    }

    @media only screen and (min-width: 2000px) {
        height: 700px;
        ${RotateHolder} {
            width: 300px;
            height: 370px;
        }
        ${Intro} {
            font-size: 50px;
        }
        ${Image} {
            width: 320px;
        }
    }

    & ${Wrap} {
        justify-content: space-between;
        width: 100%;
        max-width: 1100px;
    }
`;

const RotateImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bg});
    top: 0;
    left: 0;
    background-size: 300px;
    background-position-x: center;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 10px 0px #E50914;
    &:nth-child(1) {
        z-index: 10;
        animation: rotate1 12s ease-in-out infinite;
    }
    &:nth-child(2) {
        z-index: 0;
        animation: rotate2 12s ease-in-out infinite;
    }

    @keyframes rotate1 {
        0% {
            z-index: 10;
            transform: perspective(800px) rotateY(0deg);
        }
        50% {
            z-index: 0;
            transform: perspective(800px) rotateY(180deg);
        }
        100% {
            z-index: 10;
            transform: perspective(800px) rotateY(360deg);
        }
    }

    @keyframes rotate2 {
        0% {
            z-index: 0;
            transform: perspective(800px) rotateY(180deg);
        }
        50% {
            z-index: 10;
            transform: perspective(800px) rotateY(360deg);
        }
        100% {
            z-index: 0;
            transform: perspective(800px) rotateY(540deg);
        }
    }
`;

const Main = () => {
    return (
        <Container>
            <Helmet>
                <title>Heeflix</title>
            </Helmet>
            <Cover
                small="https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/27a75e5a-803d-4318-be42-00ac58ea24aa/KR-ko-20210208-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                medium="https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/27a75e5a-803d-4318-be42-00ac58ea24aa/KR-ko-20210208-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                large="https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/27a75e5a-803d-4318-be42-00ac58ea24aa/KR-ko-20210208-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            >
            </Cover>
            <First>
                <Wrap>
                    <LogoList>
                        <MyLogo>Hee</MyLogo>
                        <Collabo><span class="material-icons">clear</span></Collabo>
                        <NomadLogo>
                            <img src={Nomad} />
                        </NomadLogo>
                    </LogoList>
                    <Intro>
                        {/* Code challenge project using React JS with Nomad */}
                        노마드코더 React JS 코드 챌린지 프로젝트
                    </Intro>
                </Wrap>
            </First>
            <Content>
                <HomeContent>
                    <Wrap>
                        <Intro>
                            Movie / TV Show<br /><br />
                            현재 상영작부터,<br />
                            인기있는 작품목록,<br />
                            작품의 다양한 정보를<br />
                            제공합니다.
                        </Intro>
                        <RotateHolder>
                            <RotateImage bg={Poster1} />
                            <RotateImage bg={ Poster2 } />
                        </RotateHolder>
                    </Wrap>
                </HomeContent>
            </Content>
            <Content>
                <HomeContent>
                    <Wrap>
                        <Image src={SearchImage} />
                        <Intro>
                            Search<br /><br />
                            내가 찾고 싶은 영화, <br />
                            TV 방송 및 애니메이션을<br />
                            검색하세요.<br />
                        </Intro>
                    </Wrap>
                </HomeContent>
            </Content>
            
        </Container>
    );
}

export default Main;