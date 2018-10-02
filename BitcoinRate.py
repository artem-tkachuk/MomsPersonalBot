def bitcoin_rate():			#
	return requests.get('https://blockchain.info/ticker')


#link for direct bitcoin rate to U.S. dollar: https://blockchain.info/tobtc?currency=USD&value=1
