import datetime
def timer():
    arrivalday = 26
    arrivalmon= 12
    ''''''
    a = str(datetime.date.today())
    today = int(a[8:10])
    tomon = int(a[5:7])
    ''''''
    num_day = arrivalday - today
    if num_day < 0:
        num_day = num_day * -1
    ''''''
    num_mon = arrivalmon - tomon
    if num_mon < 0:
        num_mon = num_mon * -1
    ''''''
    if num_day < 4:
        num_day = str(num_day)
        retday1 = num_day + " Дней и "
    else:
         num_day = str(num_day)
         retday1 = num_day + " Дня и "
    ''''''
    if num_mon > 4:
        num_mon = str(num_mon)
        retmon1 = num_mon + " Месяцев "
    elif num_mon == 1:
        num_mon = str(num_mon)
        retmon1 = num_mon + " Месяц "
    else:
         num_mon = str(num_mon)
         retmon1 = num_mon + " Месяца "
    ret = retday1 + retmon1
    return ret



