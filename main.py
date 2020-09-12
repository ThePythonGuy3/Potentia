import sciter
import libs

if __name__ == '__main__':
	frame = sciter.Window(ismain=True, uni_theme=True)
	#example web, learning purposes
	#frame.load_file("web/example.html")
	frame.expand()
	frame.run_app()