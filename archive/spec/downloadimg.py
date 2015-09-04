
from HTMLParser import HTMLParser
import urllib
#f = open('00000001.jpg','wb')
#f.write(urllib.urlopen('http://www.gunnerkrigg.com//comics/00000001.jpg').read())
#f.close()


class MyHTMLParser(HTMLParser):

    def __init__(self):
	HTMLParser.__init__(self)
    	self.data = []
	self.actualurl = ""
	self.found = 0

    def handle_starttag(self, tag, attrs):  
	if (tag == 'a'):
		if (len(attrs) > 0):
			self.actualurl = "http://www.tuttoscout.org/distintivi/" + attrs[0][1]
			self.found = 1

    def handle_endtag(self, tag):
	pippo = 0
	

    def handle_data(self, data):
	if (self.found == 1):
		imgname = data.lower().replace(" ","") + ".jpg"
		#print imgname		
		f = open(imgname,'wb')
		f.write(urllib.urlopen(self.actualurl).read())
		f.close()
		self.found = 0

# instantiate the parser and fed it some HTML
parser = MyHTMLParser()

f = open('imgspec', 'r')
for line in f:
	parser.feed(line)

# print s
f.close()
