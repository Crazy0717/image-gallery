import React, { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import { useInView } from "react-intersection-observer"
import { SearchService } from "@/service/search"
import { Photo } from "@/lib/types"
import Loading from "./Loading"

interface Props {
  searchWord?: string
}

const InfiniteScroll: React.FC<Props> = ({ searchWord }) => {
  const { ref, inView } = useInView()
  const [images, setImages] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLaoding] = useState(false)

  const search = async () => {
    setIsLaoding(true)
    const response = await SearchService.searchByKeyWord(searchWord, page)
    setImages(images.concat(response.results))
    setIsLaoding(false)
  }

  useEffect(() => {
    setPage(page + 1)
    search()
  }, [inView])

  useEffect(() => {
    setPage(1)
    setImages([])
    search()
  }, [searchWord])

  return (
    <div>
      <div className="columns-1 md:columns-2 xl:columns-4 gap-4 p-3">
        {images &&
          images.map((photo) => <ImageCard key={photo.id} photo={photo} />)}
      </div>
      <div ref={ref} className="h-10 flex justify-center">
        <Loading size={30} />
      </div>
    </div>
  )
}

export default InfiniteScroll
