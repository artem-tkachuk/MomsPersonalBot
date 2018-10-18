from requests import get


ACCESS_KEY = "5b19066abaab62aaa882eae3b087f5b9"


def get_currency():

	currency_template = "http://data.fixer.io/api/latest?"

	currency_parameters = "access_key=" + ACCESS_KEY + "&" + "symbols=" + "RUB,USD"

	URL_currency = currency_template + currency_parameters 

	return get(URL_currency).json()
