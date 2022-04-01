import React, { useState } from 'react'
import Axios from 'axios';

const Details = ({ data1 }) => {
    const [search, setSearch] = useState("");
    const [Value, setValue] = useState("");
    const [searchFilter, setSearchFilter] = useState(data1);
    const [ten, tenPlus] = useState(6)
    console.log(data1);
    const handelChange = (a) => {
        setSearch(a.target.value);
        filterdata(search);

    }
    const value = Value.toLowerCase().trim();
    const lower = search.toLowerCase().trim();
    function filterdata(search) {
        console.log(typeof (search));
        const filteredData = data1.filter(items => {
            // console.log(items);
            switch (value) {
                case "country":
                    return items.country.toString().toLowerCase().includes(lower);
                case "topic":
                    return items.topic.toString().toLowerCase().includes(lower);
                case "insight":
                    return items.insight.toString().toLowerCase().includes(lower);
                case "region":
                    return items.region.toString().toLowerCase().includes(lower);

                default:
                    break;
            }
            //    return  items.country.toString().toLowerCase().includes(lower);
            // return Object.keys(items).some(key => {
            //     return items[key].toString().toLowerCase().includes(lower)
            // })
        }
        );
        setSearchFilter(filteredData);

    }
    const increaseBox = () => {
        tenPlus(val => val + 6)
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div>
                    search by:
                    <select onChange={a => setValue(a.target.value)}>
                        <option value=""></option>
                        <option value="topic">topic</option>
                        <option value="country">country</option>
                        <option value="insight">insight</option>
                        <option value="region">region</option>
                    </select>
                </div>
                {/* <form class="form-inline my-2 my-lg-0 "> */}
                <input id="searchTxt" autocomplete="off" placeholder={`search by ${Value}`} value={search} onChange={a => handelChange(a)} aria-label="Search" />
                {/* </form> */}
            </nav>

            <div className="body" >
                {!lower ?
                    data1.slice(0, ten).map((val, key) => (
                        <div className="box" id={val._id}>
                            <div id="content" className="content">
                                <div className="lable"><h3>{key + 1}</h3></div>
                                <div className="labels">intensity: {val.intensity}</div>
                                <div className="labels">likelihood: {val.likelihood}</div>
                                <div className="labels">relevance: {val.relevance}</div>
                                <div className="labels">year: {val.year}</div>
                                <div className="labels">country: {val.country}</div>
                                <div className="labels">topic:   {val.topic}</div>
                                <div className="labels">region: {val.region}</div>
                                <div className="labels">insight: {val.insight}</div>
                                <div className="labels">end_year: {val.end_year}</div>
                                <div className="labels">sector: {val.sector}</div>
                                <div className="labels">source: {val.source}</div>
                            </div>
                        </div>
                    ))
                    :
                    searchFilter.map((val, key) => (
                        <div className="box" id={val._id}>
                            <div id="content" className="content">
                                <div className="lable"><h3>{key + 1}</h3></div>
                                <div className="labels">intensity: {val.intensity}</div>
                                <div className="labels">likelihood: {val.likelihood}</div>
                                <div className="labels">relevance: {val.relevance}</div>
                                <div className="labels">year: {val.year}</div>
                                <div className="labels">country: {val.country}</div>
                                <div className="labels">topic:   {val.topic}</div>
                                <div className="labels">region: {val.region}</div>
                                <div className="labels">insight: {val.insight}</div>
                                <div className="labels">end_year: {val.end_year}</div>
                                <div className="labels">sector: {val.sector}</div>
                                <div className="labels">source: {val.source}</div>
                            </div>
                        </div>
                    ))}
                {data1.length === 0 && <span> no such data </span>}
            </div>
            <div className="button">
                <button onClick={increaseBox} className="btn">Next</button>
            </div>

        </>
    )
}

export default Details;
