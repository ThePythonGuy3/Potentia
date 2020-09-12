import sciter
import libs

if __name__ == '__main__':
    frame = sciter.Window(ismain=True, uni_theme=True)
    frame.load_file("web/minimal.htm")
    frame.expand()
    frame.run_app()