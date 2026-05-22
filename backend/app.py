from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = {}

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username in users:
        return jsonify({"msg": "用户已存在"})

    users[username] = password
    print(users)  # 加上这一句，让程序把数据打印到终端
    return jsonify({"msg": "注册成功"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if users.get(username) == password:
        return jsonify({"msg": "登录成功"})
    else:
        return jsonify({"msg": "用户名或密码错误"})

if __name__ == "__main__":
    app.run()
