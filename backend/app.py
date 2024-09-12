from app import app 
from config.config import prod, port

if __name__ == '__main__':
    app.run(debug=prod, host='0.0.0.0', port=port)