from PIL import Image, ImageGrab
import os


print('Welcome to the cropper.')
cn = input('City Name: ')
files = os.listdir('./' + cn + '/')
count = 0
for i in files:
    print(i)
    im = Image.open('./' + cn + '/' + i)
    left = 1044
    top = 44
    right = 2396
    bottom = 1395
    im1 = im.crop((left, top, right, bottom))
    im1 = im1.save(cn + '/' + cn+str(count)+'.png')
    if count == 0:
        count = -2
    elif count == -2:
        count = -1
    elif count == -1:
        count = 1
    elif count == 1:
        count = 2
input('Done')
