"use client"
import { Photo } from "@/lib/types"
import React, { useState } from "react"
import { TbCloudDownload } from "react-icons/tb"
import { saveAs } from "file-saver"
import Loading from "./Loading"
import Image from "next/image"

interface propsTypes {
  photo: Photo
}

const ImageCard = ({ photo }: propsTypes) => {
  console.log(photo)
  return (
    <div className="imageCard mb-4 relative transition-all overflow-hidden break-inside-avoid hover:brightness-95">
      <DownLoadButton photo={photo} />
      {/* <img
        className="w-auto h-auto max-h-full max-w-full object-contain"
        width={500}
        height={500}
        src={photo?.urls.regular}
        alt="img"
      /> */}
      <Image
        placeholder="blur"
        blurDataURL={photo.blur_hash}
        src={photo?.urls.regular}
        width={500}
        height={500}
        alt="image"
      />
    </div>
  )
}

function DownLoadButton({ photo }: propsTypes) {
  const [isDownloading, setIsDownloading] = useState(false)
  const downloadImage = async (imageUrl: string, imageName: string) => {
    try {
      setIsDownloading(true)
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      saveAs(blob, `${imageName}.png`)
      setIsDownloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      onClick={() => downloadImage(photo.urls.regular, photo.id)}
      className="hidden p-2 absolute top-5 right-5 border bg-black/80 rounded-full hover:bg-black/50"
    >
      {isDownloading ? (
        <Loading size={5} />
      ) : (
        <TbCloudDownload className="text-xl text-white" />
      )}
    </button>
  )
}

export default ImageCard
