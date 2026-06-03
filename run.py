import http.server
import socketserver
import webbrowser
import threading
import time
import os

PORT = 8000

def start_server():
    Handler = http.server.SimpleHTTPRequestHandler
    
    # Try to use port 8000. If it's already in use, let the OS pick a random free port.
    try:
        httpd = socketserver.TCPServer(("", PORT), Handler)
        actual_port = PORT
    except OSError:
        httpd = socketserver.TCPServer(("", 0), Handler)
        actual_port = httpd.server_address[1]
        
    url = f"http://localhost:{actual_port}/index.html"
    print(f"Server started at {url}")
    
    # Function to open the browser after a short delay
    def open_browser():
        time.sleep(0.5)  # Wait for the server to be fully ready
        print("Opening browser...")
        webbrowser.open(url)
        
    # Start the browser-opening function in a background thread
    threading.Thread(target=open_browser, daemon=True).start()
    
    # Start the server (this will block the main thread and keep the script running)
    httpd.serve_forever()

if __name__ == "__main__":
    # Ensure we are serving files from the directory where this script is located
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print("Starting the development server... Press Ctrl+C to stop.")
    try:
        start_server()
    except KeyboardInterrupt:
        print("\nServer stopped.")
