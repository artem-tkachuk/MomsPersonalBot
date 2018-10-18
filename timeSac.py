from requests import get


API_KEY = "PYDZV54GKIKS"


def time_sac():

	time_sac_pattern = "http://api.timezonedb.com/v2.1/get-time-zone?"

	time_sac_parameters = "key=" + API_KEY + "&" + "format=" + "json" + "&" + "fields=" + "formatted" +"&"+ "by=" + "zone" + "&" + "zone=" + "PDT"

	URL_time_sac = time_sac_pattern + time_sac_parameters

	return get(URL_time_sac).json()['formatted']