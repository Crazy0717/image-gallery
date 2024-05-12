const apiKey = process.env.NEXT_PUBLIC_IMAGE_API

export const SearchService = {
  searchByKeyWord: async (
    keyWord: string | undefined,
    pageParam: string | number
  ) => {
    const url = `https://api.unsplash.com/search/photos?page=${
      pageParam || 1
    }&query=${keyWord || "nature"}&client_id=${apiKey}&per_page=15`
    const response = await fetch(url)
    return response.json()
  },
}
