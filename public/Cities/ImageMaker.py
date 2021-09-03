from PIL import Image, ImageGrab
import os
from pywinauto.application import Application
from pywinauto.keyboard import send_keys
from pywinauto.mouse import click, scroll
import time

app = Application(backend='uia').connect(path='googleearth.exe')
dlg = app['Google Earth']

print('Welcome to the map maker. Please have google earth in a small window. Pull the side menu to the left and turn off the top menu.')
cn = input('City Name (seperate multiple with commas and no spaces): ')

cn = cn.split(',')
dlg['Maximize'].click()
time.sleep(.5)
for name in cn:
    dir = os.listdir()
    if name in dir:
        print(name, 'already exists, skipping..')
    else:
        print('Creating', name)
        os.mkdir(name)

        click(button='left', coords=(68, 87))
        time.sleep(.5)
        send_keys(name)
        time.sleep(.5)
        click(button='left', coords=(177, 91))
        time.sleep(9)
        dlg['Clear'].click()
        time.sleep(.5)
        send_keys('^%b')
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        time.sleep(.5)
        screenshot = ImageGrab.grab()
        screenshot.save('./'+name+'/'+name+'0.png')
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=-1)
        scroll(coords=(1720, 720), wheel_dist=-1)
        scroll(coords=(1720, 720), wheel_dist=-1)
        scroll(coords=(1720, 720), wheel_dist=-1)
        time.sleep(.5)
        screenshot = ImageGrab.grab()
        screenshot.save('./'+name+'/'+name+'-1.png')
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=-1)
        scroll(coords=(1720, 720), wheel_dist=-1)
        scroll(coords=(1720, 720), wheel_dist=-1)
        scroll(coords=(1720, 720), wheel_dist=-1)
        time.sleep(.5)
        screenshot = ImageGrab.grab()
        screenshot.save('./'+name+'/'+name+'-2.png')
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        time.sleep(.5)
        screenshot = ImageGrab.grab()
        screenshot.save('./'+name+'/'+name+'1.png')
        time.sleep(.5)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        scroll(coords=(1720, 720), wheel_dist=1)
        time.sleep(.5)
        screenshot = ImageGrab.grab()
        screenshot.save('./'+name+'/'+name+'2.png')
        time.sleep(1)
        send_keys('^%b')

        files = os.listdir(name + '/')
        count = 0
        for i in files:
            print(i)
            im = Image.open(name + '/' + i)
            left = 1044
            top = 44
            right = 2396
            bottom = 1395
            im1 = im.crop((left, top, right, bottom))
            im1 = im1.save(name + '/' + i)
dlg['RestoreDown'].click()
input('Done')
