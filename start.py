import sys
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication
from PyQt5.QtWebEngineWidgets import QWebEngineView

app = QApplication(sys.argv)
view = QWebEngineView()
view.setGeometry(100, 100, 800, 600)
view.load(QUrl("file:///game/index.html"))
view.show()
sys.exit(app.exec_())
