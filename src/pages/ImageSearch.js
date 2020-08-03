import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import './ImageSearch.css';
import ImageRender from '../components/ImageRender';
import Search from '../assets/search.svg';

function ImageSearch(){
    let text = new URLSearchParams(useLocation().search).get('text');
    let [imageList, setimageList] = useState([]);
    let [page, setpage] = useState(1);
    let [searchQuery, setsearchQuery] = useState(text);
    let history = useHistory();
    function search() {
        console.log("search", searchQuery, "page", page);
        axios({
            method: 'get',
            url: 'https://api.unsplash.com/search/photos',
            params: {
            //   client_id: '4207199fdd3a75e974b6da10050b17abb8eb576fbeb023de2486ea4c1c42313e', //2.hesap 
            //   client_id: 'c6247455a0aefef5dcb6858a1e1e49df53c4260a8b27b1dd27b5be0ffedcf2f6',
                client_id: 'Hu0H0vwQo-Yej_eAnkcAieWEdpZyaSlO3AuZLdcubtk',
                query: searchQuery,
                per_page: 9,
                page: 1,
            }
        })
        .then(response => {
            console.log(response.data.results);
            setimageList(response.data.results);
            setpage(2);
        })
        .catch(err => {
            console.log(err);
        })
    }
    function loadMore() {
        console.log("loadMore", searchQuery, "page", page);
        axios({
            method: 'get',
            url: 'https://api.unsplash.com/search/photos',
            params: {
              client_id: '4207199fdd3a75e974b6da10050b17abb8eb576fbeb023de2486ea4c1c42313e', //2.hesap 
            //   client_id: 'c6247455a0aefef5dcb6858a1e1e49df53c4260a8b27b1dd27b5be0ffedcf2f6',
              query: searchQuery,
              per_page: 9,
              page: page,
            }
        })
        .then(response => {
            setimageList([...imageList, ...response.data.results]);
            setpage(page + 1);
        })
        .catch(err => {
            console.log(err);
        })
    }
    function openImageModal(image){
        history.push('/image/' + image.id);
    }
    useEffect(() => {
        search();
    }, [])

    return (
        <div className="image-search">
            <div className="search-feild">
                <input type="text" placeholder="Search for Images here..." onChange={(e) => setsearchQuery(e.target.value)}/>
                <img src={Search} onClick={search}/>
            </div>
            <section>
                {imageList.map(image => 
                    <ImageRender 
                        key={image.id}
                        image={image}
                        imageClicked={() => openImageModal(image)}/>)
                }
            </section>
            <div className="load-more-container">
                <div className="load-more-button" onClick={loadMore}>Load More</div>
            </div>
        </div>
    );
}

export default ImageSearch;

