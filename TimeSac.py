import requests

payload = {'key':'KKNMU58PCCMN','format':'json','by':'zone','zone':'America/Los_Angeles'} # Параметры для get-запроса

def get_Time_Sac():
	response = requests.get("http://api.timezonedb.com/v2.1/get-time-zone", params=payload)  # get-запрос
	return response.json()