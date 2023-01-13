import {BASE_URL} from "./constants"

export class NewsService {
	static async getOneNewsLine(number: number) {
		const response = await fetch(BASE_URL + "/top-headlines/category/health/in.json")
		const news = await response.json()
		const oneNews = news.articles[number].description
		return oneNews
	}
}
