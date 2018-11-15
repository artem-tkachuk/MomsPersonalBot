from requests import get

def bitcoin_rate(currency = "USD"):			#
	return get('https://blockchain.info/ticker').json()[currency]


#link for direct bitcoin rate to U.S. dollar: https://blockchain.info/tobtc?currency=USD&value=1