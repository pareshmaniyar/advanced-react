import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        overflow : 'inherit'
    }
};
Modal.setAppElement('#root')
import './ImageSearch.css';

function Parent(){
    let photoID = useParams().id;
    let history = useHistory();
    let [currentImage, setCurrentImage] = useState(false);
    useEffect(() => {
        function fetchImage() {
            // console.log("search", searchQuery, "page", page);
            axios({
                method: 'get',
                url: 'https://api.unsplash.com/photos/' + photoID,
                params: {
                  client_id: '4207199fdd3a75e974b6da10050b17abb8eb576fbeb023de2486ea4c1c42313e', //2.hesap 
                //   client_id: 'c6247455a0aefef5dcb6858a1e1e49df53c4260a8b27b1dd27b5be0ffedcf2f6',
                  per_page: 9,
                  page: 1,
                }
            })
            .then(response => {
                console.log(response.data)
                setCurrentImage(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        fetchImage();
    }, []);
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
        <div>
            <Modal
                isOpen={true}
                onRequestClose={() => setModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <div className="modal-cross-container">
                <div className="modal-cross" onClick={() => history.goBack()}>X</div>
            </div>
            <div className="popup">
            {currentImage && 
                (<><img 
                    src={currentImage.urls.regular}
                    className="big-image"/>
                <div className="load-more-button" onClick={() => forceDownload(currentImage.urls.regular, "image")}>
                    Download
                </div>    
                </>)
            }
            </div>
            </Modal>
        </div>
    );
}

export default Parent;