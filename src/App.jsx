"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Mic, Camera, MoreVertical, X, Share, Bookmark } from "lucide-react"

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [isAnimating, setIsAnimating] = useState(false)
  const imageRefs = useRef({})
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })

  const images = [
    {
      id: 1,
      src: "https://parade.com/.image/t_share/MTkwNTc4NzcwMDEwOTczMzA5/tom-cruise-net-worth.jpg",
      title: "Tom Cruise - Wikipedia",
      source: "Wikipedia",
      sourceIcon: "W",
      time: "",
      height: "h-72",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjALPsEusiiZNaV_cqH2VOYUjgZbB3O3vMqw&s",
      title: "Tom Cruise - IMDb",
      source: "IMDb",
      sourceIcon: "📺",
      time: "",
      height: "h-48",
    },
    {
      id: 3,
      src: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/04/27/USAT/83313209007-mi-8-ff-005-k.jpg?crop=1759,1755,x1505,y4",
      title: "Tom Cruise: Biography, Actor, ...",
      source: "Biography",
      sourceIcon: "B",
      time: "",
      height: "h-32",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Tom_Cruise_Sydney_Premiere_Mission_Impossible_part_one_%2853019353900%29_%28cropped%29.jpg/250px-Tom_Cruise_Sydney_Premiere_Mission_Impossible_part_one_%2853019353900%29_%28cropped%29.jpg",
      title: "Tom Cruise Movies",
      source: "Entertainment",
      sourceIcon: "E",
      time: "2 days ago",
      height: "h-72",
    },
    {
      id: 5,
      src: "https://static.independent.co.uk/2022/05/19/19/1634b8eed67e000f880828c1232160b4Y29udGVudHNlYXJjaGFwaSwxNjUzMDcwNzEy-2.66984344.jpg",
      title: "Top Gun",
      source: "Paramount",
      sourceIcon: "P",
      time: "",
      height: "h-48",
    },
    {
      id: 6,
      src: "http://parade.com/.image/t_share/ODowMDAwMDAwMDAwNjUzMDc4/mission-impossible---dead-reckoning-part-one-new-york-premiere.jpg",
      title: "Top Gun Maverick",
      source: "Movies",
      sourceIcon: "M",
      time: "1 week ago",
      height: "h-32",
    },

    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjALPsEusiiZNaV_cqH2VOYUjgZbB3O3vMqw&s",
      title: "Tom Cruise - IMDb",
      source: "IMDb",
      sourceIcon: "📺",
      time: "",
      height: "h-72",
    },
    {
      id: 8,
      src: "https://parade.com/.image/t_share/MTkwNTc4NzcwMDEwOTczMzA5/tom-cruise-net-worth.jpg",
      title: "Tom Cruise - Wikipedia",
      source: "Wikipedia",
      sourceIcon: "W",
      time: "4 days ago",
      height: "h-48",
    },
    {
      id: 9,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Tom_Cruise_Sydney_Premiere_Mission_Impossible_part_one_%2853019353900%29_%28cropped%29.jpg/250px-Tom_Cruise_Sydney_Premiere_Mission_Impossible_part_one_%2853019353900%29_%28cropped%29.jpg",
      title: "Tom Cruise Movies",
      source: "Entertainment",
      sourceIcon: "E",
      time: "2 days ago",
      height: "h-72",
    },
    {
      id: 10,
      src: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/04/27/USAT/83313209007-mi-8-ff-005-k.jpg?crop=1759,1755,x1505,y4",
      title: "Tom Cruise: Biography, Actor, ...",
      source: "Biography",
      sourceIcon: "B",
      time: "",
      height: "h-32",
    },
    {
      id: 11,
      src: "https://static.independent.co.uk/2022/05/19/19/1634b8eed67e000f880828c1232160b4Y29udGVudHNlYXJjaGFwaSwxNjUzMDcwNzEy-2.66984344.jpg",
      title: "Top Gun",
      source: "Paramount",
      sourceIcon: "P",
      time: "",
      height: "h-48",
    },
    {
      id: 12,
      src: "http://parade.com/.image/t_share/ODowMDAwMDAwMDAwNjUzMDc4/mission-impossible---dead-reckoning-part-one-new-york-premiere.jpg",
      title: "Top Gun Maverick",
      source: "Movies",
      sourceIcon: "M",
      time: "1 week ago",
      height: "h-32",
    },
    {
      id: 13,
      src: "https://parade.com/.image/t_share/MTkwNTc4NzcwMDEwOTczMzA5/tom-cruise-net-worth.jpg",
      title: "Tom Cruise - Wikipedia",
      source: "Wikipedia",
      sourceIcon: "W",
      time: "4 days ago",
      height: "h-48",
    },
    {
      id: 14,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjALPsEusiiZNaV_cqH2VOYUjgZbB3O3vMqw&s",
      title: "Tom Cruise - IMDb",
      source: "IMDb",
      sourceIcon: "📺",
      time: "",
      height: "h-72",
    },
    {
      id: 15,
      src: "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/04/27/USAT/83313209007-mi-8-ff-005-k.jpg?crop=1759,1755,x1505,y4",
      title: "Tom Cruise: Biography, Actor, ...",
      source: "Biography",
      sourceIcon: "B",
      time: "",
      height: "h-32",
    },
    {
      id: 16,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Tom_Cruise_Sydney_Premiere_Mission_Impossible_part_one_%2853019353900%29_%28cropped%29.jpg/250px-Tom_Cruise_Sydney_Premiere_Mission_Impossible_part_one_%2853019353900%29_%28cropped%29.jpg",
      title: "Tom Cruise Movies",
      source: "Entertainment",
      sourceIcon: "E",
      time: "2 days ago",
      height: "h-72",
    },
    {
      id: 17,
      src: "https://static.independent.co.uk/2022/05/19/19/1634b8eed67e000f880828c1232160b4Y29udGVudHNlYXJjaGFwaSwxNjUzMDcwNzEy-2.66984344.jpg",
      title: "Top Gun",
      source: "Paramount",
      sourceIcon: "P",
      time: "",
      height: "h-48",
    },
    {
      id: 18,
      src: "http://parade.com/.image/t_share/ODowMDAwMDAwMDAwNjUzMDc4/mission-impossible---dead-reckoning-part-one-new-york-premiere.jpg",
      title: "Top Gun Maverick",
      source: "Movies",
      sourceIcon: "M",
      time: "1 week ago",
      height: "h-32",
    },
    {
      id: 19,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjALPsEusiiZNaV_cqH2VOYUjgZbB3O3vMqw&s",
      title: "Tom Cruise - IMDb",
      source: "IMDb",
      sourceIcon: "📺",
      time: "",
      height: "h-72",
    },
    {
      id: 20,
      src: "https://parade.com/.image/t_share/MTkwNTc4NzcwMDEwOTczMzA5/tom-cruise-net-worth.jpg",
      title: "Tom Cruise - Wikipedia",
      source: "Wikipedia",
      sourceIcon: "W",
      time: "4 days ago",
      height: "h-48",
    },
  ]

  const handleImageClick = (image, event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setModalPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    })
    setSelectedImage(image)
    setIsAnimating(true)
  }

  const handleCloseModal = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setSelectedImage(null)
    }, 350)
  }

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  const handleImageLoad = (event) => {
    const img = event.target
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>

        <div className="text-2xl font-normal">Google</div>

        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">I</div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="bg-gray-800 rounded-full flex items-center px-4 py-3">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="tom cruise"
            className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none"
            defaultValue="tom cruise"
          />
          <Mic className="w-5 h-5 text-blue-400 ml-3" />
          <Camera className="w-5 h-5 text-blue-400 ml-3" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex px-4 mb-4 space-x-6">
        <span className="text-gray-400">All</span>
        <span className="text-white border-b-2 border-white pb-1">Images</span>
        <span className="text-gray-400">News</span>
        <span className="text-gray-400">Forums</span>
        <span className="text-gray-400">Shorts</span>
        <span className="text-gray-400">Web</span>
      </div>

      {/* Filter Chips */}
      <div className="flex px-4 mb-6 space-x-3">
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2">
          <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
          <span className="text-sm">Maverick</span>
        </div>
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2">
          <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
          <span className="text-sm">Mission</span>
        </div>
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2">
          <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
          <span className="text-sm">Tooth</span>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="px-4">
        <div className="columns-2 gap-3 space-y-3">
          {images.map((image) => (
            <div
              key={image.id}
              ref={(el) => (imageRefs.current[image.id] = el)}
              className="break-inside-avoid cursor-pointer"
              onClick={(e) => handleImageClick(image, e)}
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className={`w-full object-cover ${image.height}`}
                  onError={(e) => {
                    e.target.src = `/placeholder.svg?height=400&width=300&text=${encodeURIComponent(image.title)}`
                  }}
                />
                <div className="p-3">
                  <div className="text-sm text-white mb-1">{image.title}</div>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="w-4 h-4 bg-gray-600 rounded mr-2 flex items-center justify-center text-xs">
                      {image.sourceIcon}
                    </span>
                    <span>{image.source}</span>
                    {image.time && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{image.time}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isAnimating ? "opacity-90" : "opacity-0"
            }`}
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div
            className={`absolute bg-gray-900 overflow-hidden transition-all duration-300 ease-out ${
              isAnimating ? "inset-0" : ""
            }`}
            style={
              !isAnimating
                ? {
                    left: modalPosition.x,
                    top: modalPosition.y,
                    width: modalPosition.width,
                    height: modalPosition.height,
                    borderRadius: "8px",
                  }
                : {
                    borderRadius: "0px",
                  }
            }
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gray-800">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-sm">W</span>
                </div>
                <span className="text-white font-medium">Wikipedia</span>
              </div>
              <div className="flex items-center space-x-4">
                <MoreVertical className="w-5 h-5 text-gray-400" />
                <X className="w-6 h-6 text-gray-400 cursor-pointer" onClick={handleCloseModal} />
              </div>
            </div>

            {/* Modal Content Scrollable */}
            <div className="flex flex-col h-full">
              {/* Image Section */}
              <div className="relative flex-shrink-0 flex justify-center bg-black">
                <img
                  src={selectedImage.src || "/placeholder.svg?height=400&width=400"}
                  alt={selectedImage.title}
                  onLoad={handleImageLoad}
                  onError={(e) => {
                    e.target.src = `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(selectedImage.title)}`
                  }}
                  className={`max-w-full max-h-[60vh] object-contain ${
                    imageDimensions.width > imageDimensions.height
                      ? "w-full h-auto" // Landscape: full width
                      : "h-[60vh] w-auto" // Portrait: fixed height, auto width
                  }`}
                />
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-gray-800 bg-opacity-75 rounded flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <h2 className="text-white text-lg font-medium mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-400 text-sm mb-6">
                    Images may be subject to copyright. <span className="text-blue-400 underline">Learn More</span>
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mb-4">
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-full flex items-center justify-center transition-colors">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </button>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-full flex items-center justify-center transition-colors">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </button>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full font-medium transition-colors">
                    Visit →
                  </button>

                  {/* Related Images */}
                  <div className="mt-6">
                    <div className="flex space-x-3">
                      <div className="relative">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Related"
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">Related</span>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Related"
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">Related</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
