import requests

payload = {'APPID':'d8973bd4eedd89114bd59d13392b06cc','units':'metric','lang':'ru','q':'Sacramento'} # Параметры для get-запроса

def get_Weather_Sac():
	response = requests.get("http://api.openweathermap.org/data/2.5/weather", params=payload) # get-запрос
	return esponse.json()