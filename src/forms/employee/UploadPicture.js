import React from 'react';

const UploadPicture = () => {
    const [image, setImage] = React.useState(null);
    const handleChange = (e) => {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log(image)
    }
    return (
        <div>
            <h2 className="text-black text-2xl font-bold text-left m-8 mb-0">Upload Profile Picture:</h2>
            <div className="bg-indigo-300 w-96 h-96 mt-4 m-8 rounded-xl">
            <img src={image} alt="Placeholder" className="w-full h-full text-white object-cover rounded-xl"/>
                <input
                    className="mt-8 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-96"
                    id="file_input" type="file" onChange={handleChange}/>
            </div>
        </div>
    );
};

export default UploadPicture;