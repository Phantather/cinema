import React, {useEffect} from 'react';
import {getCinema} from "../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";
import FilmsCard from "./FilmsCard";
import SkeletonCard from "./SkeletonCard";

const Films = () => {

    const dispatch = useDispatch()
    const {status, error, data} = useSelector((store) => store.cinema)


    useEffect(() => {
        dispatch(getCinema())
    },[])


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Фильмы
                </h2>
                <div className="films__sort">
                    <select>
                        <option value="" selected>По популярности</option>
                        <option value="" >Дате</option>
                        <option value="" >Рейтингу</option>
                    </select>
                </div>
                <div className="films__filter">
                    <div className="films__filter-sort">
                        <select>
                            <option value="" disabled>Жанры</option>
                            <option value="" >Комедии</option>
                            <option value="" >Аниме</option>
                        </select>
                        <select>
                            <option value="" disabled>Страны</option>
                            <option value="" >США</option>
                            <option value="" >Япония</option>
                        </select>
                        <select>
                            <option value="" disabled>Годы</option>
                            <option value="" >2022</option>
                            <option value="" >2021</option>
                        </select>
                    </div>

                </div>
                <div className="films__row">
                    {
                        status === 'loading' ?
                            <SkeletonCard cards={12}/>
                            : status === 'resolve' ?
                                <>
                                    {data.map((item) => (
                                        <FilmsCard item={item}/>
                                    ))
                                    }
                                </> : <h2>{error}</h2>
                    }
                </div>
            </div>
        </section>
    );
};

export default Films;