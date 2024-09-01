// import React, { useState } from 'react';
// import axios from 'axios';

// const Gallery = () => {
//   const [images, setImages] = useState([
//     { src: 'images/slide1.jpeg', alt: 'Event 1' },
//     { src: 'images/slide2.jpeg', alt: 'Event 2' },
//     { src: 'images/slide3.jpeg', alt: 'Event 3' }
//   ]);
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert('Please select a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       await axios.post('/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
      
//       // Fetch the updated list of images
//       const response = await axios.get('/images'); // Adjust this URL based on your backend API
//       setImages(response.data);

//       // Clear the file input after upload
//       setFile(null);
//     } catch (error) {
//       console.error('Error uploading file', error);
//     }
//   };

//   return (
//     <section id="gallery">
//       <h2>Gallery</h2>
//       <div className="gallery-container">
//         {images.map((image, index) => (
//           <div key={index} className="gallery-item">
//             <img src={image.src} alt={image.alt} />
//           </div>
//         ))}
//       </div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Image</button>
//     </section>
//   );
// };

// export default Gallery;
