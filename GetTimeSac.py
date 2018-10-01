import requests

response = requests.get('http://api.timezonedb.com/v2.1/get-time-zone?key=KKNMU58PCCMN&format=json&by=zone&zone=America/Los_Angeles') # get-запрос
print(response.text)