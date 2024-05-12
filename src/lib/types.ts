export interface User {
  id: string
  username: string
  name: string
  firstName: string
  lastName: string
  instagramUsername: string | null
  twitterUsername: string | null
  portfolioUrl: string | null
  profileImage: {
    small: string
    medium: string
    large: string
  }
  links: {
    self: string
    html: string
    photos: string
    likes: string
  }
}

export interface Photo {
  id: string
  createdAt: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  likedByUser: boolean
  description: string | null
  user: User
  currentUserCollections: any[]
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  links: {
    self: string
    html: string
    download: string
  }
}

export interface PhotosResponse {
  total: number
  totalPages: number
  results: Photo[]
}
