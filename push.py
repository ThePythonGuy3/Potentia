import os

name = input("Commit name: ")

os.system("git add .")
os.system("git commit -m \"" + name + "\"")
os.system("git push")

while 1:
	print(" ", end = "\r")
