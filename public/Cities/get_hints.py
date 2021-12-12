import os
from simple_image_download import simple_image_download as simp

dir_list = os.listdir()
response = simp.simple_image_download
dir_list = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Indianapolis', 'Charlotte', 'San Francisco', 'Seattle', 'Denver', 'Washington', 'Nashville', 'Oklahoma City', 'El Paso', 'Boston', 'Portland', 'Las Vegas', 'Detroit', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Kansas City', 'Mesa', 'Atlanta', 'Omaha', 'Colorado Springs', 'Raleigh', 'Long Beach', 'Virginia Beach', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Bakersfield', 'Wichita', 'Arlington', 'Aurora', 'Tampa', 'New Orleans', 'Cleveland', 'Honolulu', 'Anaheim', 'Lexington KY', 'Stockton', 'Corpus Christi', 'Henderson', 'Riverside CA', 'Newark NJ', 'Saint Paul', 'Santa Ana',
            'Cincinnati', 'Irvine', 'Orlando', 'Pittsburgh', 'St. Louis', 'Greensboro', 'Jersey City', 'Anchorage', 'Lincoln NE', 'Plano', 'Durham', 'Buffalo', 'Chandler', 'Chula Vista', 'Toledo', 'Madison', 'Gilbert', 'Reno', 'Fort Wayne', 'North Las Vegas', 'St. Petersburg', 'Lubbock', 'Irving', 'Laredo', 'Winston-Salem', 'Chesapeake', 'Glendale AZ', 'Garland', 'Scottsdale', 'Norfolk', 'Boise', 'Fremont', 'Spokane', 'Santa Clarita', 'Baton Rouge', 'Richmond', 'Istanbul', 'Moscow', 'London', 'Saint Petersburg', 'Berlin', 'Madrid', 'Kyiv', 'Rome', 'Bucharest', 'Paris', 'Minsk', 'Vienna', 'Hamburg', 'Warsaw', 'Budapest', 'Barcelona', 'Munich', 'Kharkiv', 'Milan', 'Belgrade', 'Prague', 'Nizhny Novgorod', 'Kazan', 'Sofia', 'Birmingham', 'Brussels', 'Tbilisi', 'Samara', 'Ufa', 'Rostov-on-Don', 'Cologne', 'Voronezh', 'Perm', 'Volgograd', 'Odessa']
f = open("./hints.json", "w")
f.write('{')
for folder in dir_list:
    print(folder)
    resSkyline = response().urls(folder+'skyline', 1)
    resLandmark = response().urls(folder+' famous landmark', 1)
    f.write('"'+folder+'":{"skyline":"' +
            resSkyline[0]+'", "landmark":"'+resLandmark[0]+'"},' + '\n')
f.write('}')
f.close()

# response().download('bear', 5)

# print(response().urls('bear', 5))
