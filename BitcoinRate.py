import requests
rate = requests.get('https://blockchain.info/ticker')
print(rate.text)


'''https://blockchain.info/tobtc?currency=USD&value=1'''
