from requests import get


API_key = "d83fa7e532f123de191764c7c185a6a6"


def weather_city(ID_city):
	
	weather_pattern = "https://api.openweathermap.org/data/2.5/weather?"

	weather_parameters = "APPID=" + API_key + "&" + "id=" + ID_city + "&" + "units=" + "metric" + "&" "lang=" + "ru"

	URL_weather = weather_pattern + weather_parameters

	return get(URL_weather).json()

