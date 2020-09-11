from PIL import Image

#example data
d = [[(50, 50, 60, 255), (50, 50, 70, 255)], [(50, 50, 80, 255), (50, 50, 90, 255)]]

#example image
image = Image.open("test.png")

#write a data array to a certain image
def write(data, image, name):
	#load the image data
	pix = image.load()
	w, h = image.size
	for x in range(w):
		for y in range(h):
			#rewrite the data per pixel
			pix[x, y] = data[x][y]
	image.save(name + ".png")

#create an image with certain data
def create(data, width, height, name):
	#make a new image object
	image = Image.new("RGB", (width, height));
	#load the image data
	pix = image.load()
	w, h = image.size
	for x in range(w):
		for y in range(h):
			#rewrite the data per pixel
			pix[x, y] = data[x][y]
	image.save(name + ".png")

#get the data from a certain image
def read(image):
	data = []
	pix = image.load()
	w, h = image.size
	for x in range(w):
		#add the second dimension array to the 2d array
		data.insert(x, [])
		for y in range(h):
			#read data per pixel and attach it to a 2d array
			r, g, b, a = pix[x, y]
			data[x].insert(y, (r, g, b, a))
	return data
