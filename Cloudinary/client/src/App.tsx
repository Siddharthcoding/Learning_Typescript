import { useState, useRef } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Cloudinary for displaying images
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dsyxn1tym'
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setError(null);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first!");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      // Send the file to our backend
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      const data = await response.json();
      
      // Update state with the Cloudinary URL
      setImageUrl(data.imageUrl);
      
    } catch (err) {
      console.error(err);
      setError('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Create optimized image with transformations
  const getOptimizedImage = () => {
    if (!imageUrl) return null;
    
    // Extract publicId correctly - this is the key fix
    const urlParts = imageUrl.split('/');
    const uploadIndex = urlParts.findIndex(part => part === 'upload');
    
    if (uploadIndex === -1 || uploadIndex === urlParts.length - 1) {
      return null;
    }
    
    // Get everything after 'upload' but before file extension
    const publicIdWithExt = urlParts.slice(uploadIndex + 1).join('/');
    const publicId = publicIdWithExt.substring(0, publicIdWithExt.lastIndexOf('.'));
    
    return cld.image(publicId)
      .format('auto')
      .quality('auto')
      .resize(fill().width(500).height(300).gravity(autoGravity()));
  }
  

  const optimizedImage = getOptimizedImage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Cloudinary Image Upload
            </span>
          </h2>
          
          <div 
            className={`relative border-2 border-dashed rounded-lg p-8 transition-all duration-200 ease-in-out text-center
              ${dragActive 
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
              }
              ${file ? "border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20" : ""}
            `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={inputRef}
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept="image/*"
            />
            
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4">
                {file ? (
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {file ? file.name : 'Drag and drop your image here'}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {file 
                  ? `${(file.size / 1024 / 1024).toFixed(2)} MB · ${file.type}` 
                  : 'or click to select a file from your device'
                }
              </p>
              
              {file && (
                <button
                  onClick={handleButtonClick}
                  type="button"
                  className="mt-4 inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Choose different file
                </button>
              )}
            </div>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-400">
                <span className="font-medium">Error:</span> {error}
              </p>
            </div>
          )}
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleUpload}
              disabled={!file || loading}
              className={`
                relative inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-medium 
                transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                ${!file 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg"
                }
              `}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                <>
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Image
                </>
              )}
            </button>
          </div>
        </div>
        
        {imageUrl && (
          <div className="bg-gray-50 dark:bg-gray-900 p-8 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Original Upload</h3>
                <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                  <img 
                    src={imageUrl} 
                    alt="Uploaded" 
                    className="h-full w-full object-cover transition-all duration-300 hover:scale-105" 
                  />
                </div>
                <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">View full size</a>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Optimized Version</h3>
                <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                  {optimizedImage ? (
                    <AdvancedImage 
                      cldImg={optimizedImage}
                      className="h-full w-full object-cover transition-all duration-300 hover:scale-105" 
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Processing image...</p>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Automatically optimized with Cloudinary</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
