from datetime import datetime


def count_remaining_time(today_date, arrival_date): 	#counts the delta between today's date and mentioned date using datatime framework
	

	d1 = datetime.strptime(today_date, "%m/%d/%Y").date()
	d2 = datetime.strptime(arrival_date, "%m/%d/%Y").date()

	return ((d2 - d1).days)






#from datetime import datetime
#monthDays = {
#				"Январь 1": 1, 	
#				"Февраль": 31,
#				"Март": 59,
#				"Апрель": 90,
#				"Май": 120,
#				"Июнь": 151,
#				"Июль": 181,
#				"Август": 212,
#				"Сентябрь": 243,
#				"Октябрь": 273,
#				"Ноябрь": 304,
#				"Декабрь": 334,
#				"Январь 2": 365,
#			}

#date_1 = "10/18/2018"
#date_2 = "12/26/2018"



#	if (year % 4) == 0:								#Високосный год
#
#		for (month, days) in monthDays.items():
#
#			if month != "Январь 1":
#
#				days += 1

	#some
	#cool
	#stuff

	#return ("До моего приезда осталось {0}".format(count_remaining_time(26, 12, 2018)))		#  ==> to main.py
	