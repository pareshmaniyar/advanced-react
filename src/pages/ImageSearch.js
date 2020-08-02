import React, { useState } from 'react';
import axios from 'axios';
import './ImageSearch.css';
import ImageRender from '../components/ImageRender';
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

function ImageSearch(){
    let [imageList, setimageList] = useState([]);
    let [page, setpage] = useState(1);
    let [searchQuery, setsearchQuery] = useState();
    let [isModalOpen, setModal] = useState(false);
    let [currentImage, setCurrentImage] = useState(false);

    function search() {
        console.log("search", searchQuery, "page", page);
        axios({
            method: 'get',
            url: 'https://api.unsplash.com/search/photos',
            params: {
              client_id: '4207199fdd3a75e974b6da10050b17abb8eb576fbeb023de2486ea4c1c42313e', //2.hesap 
            //   client_id: 'c6247455a0aefef5dcb6858a1e1e49df53c4260a8b27b1dd27b5be0ffedcf2f6',
              query: searchQuery,
              per_page: 9,
              page: 1,
            }
        })
        .then(response => {
            console.log(response.data.results)
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
        setCurrentImage(image);
        setModal(true);
    }
    function forceDownload(url, fileName){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    }

    return (
        <div className="image-search">
            <input type="text" placeholder="Search Images..." onChange={(e) => setsearchQuery(e.target.value)}/>
            <button onClick={search}>Search</button>
            <section>
                {imageList.map(image => 
                    <ImageRender 
                        key={image.id}
                        image={image}
                        imageClicked={() => openImageModal(image)}/>)
                }
            </section>
            <button onClick={loadMore}>Load More</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="popup">
                    {currentImage && 
                    (<><img 
                        src={currentImage.urls.regular}
                        className="big-image"/>
                    <button onClick={() => forceDownload(currentImage.urls.regular, "image")}>
                        Download
                    </button>    
                    </>)
                    }
                </div>
            </Modal>
        </div>
    );
}

export default ImageSearch;

