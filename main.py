import sciter
from libs.pnglib import *

if __name__ == '__main__':
	frame = sciter.Window(ismain=True, uni_theme=True)
	#example web, learning purposes
	frame.load_file("web/index.html")
	frame.expand()
	frame.run_app()