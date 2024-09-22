import { useEffect, useState } from "react";
import { fetchImages } from "./unsplash-api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import SearchBar from "./SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";


const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [isMore, setIsMore] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        async function search() {
          try {
            setError(false);
            if(searchText.length > 0){
                setLoading(true);
                const imagesData = await fetchImages(searchText, page);
                if (imagesData.length > 0) {
                    setImages(prevImagesData => [...prevImagesData, ...imagesData]);
                } else {
                    setIsMore(false);
                }        
            }   
          } catch (error) {
            console.log(error);
            setError(true);
          } finally {
            setLoading(false);
          }
        }
    
        search();
      }, [searchText, page]);

      const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
      };

      const handleImageClick = image => {
        setSelectedImage(image);
      };
    
      const closeModal = () => {
        setSelectedImage(null);
      };

      const handleSearch = search => {
        if(search.length > 0){
            setSearchText(search);
            setPage(1);
            setImages([]);
            setIsMore(true);
        }
      };  


    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {loading && <Loader />}
            {error && <ErrorMessage />}
            {images.length > 0 && 
                <ImageGallery items={images} imageClick={handleImageClick} />       
            }
            {isMore && <LoadMoreBtn onClick={handleLoadMore} />}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={closeModal}
                image={selectedImage}
            />
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default App