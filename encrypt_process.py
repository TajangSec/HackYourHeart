import os
import base64
from bs4 import BeautifulSoup
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend

# --- 配置区 ---
PUBLIC_DIR = "public"
TARGET_DIR = os.path.join(PUBLIC_DIR, "post")
# ---

def encrypt_data(password, plaintext):
    salt = os.urandom(16)
    nonce = os.urandom(12) 
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=100000, backend=default_backend())
    key = kdf.derive(password.encode('utf-8'))
    aesgcm = AESGCM(key)
    ciphertext = aesgcm.encrypt(nonce, plaintext.encode('utf-8'), None)
    return base64.b64encode(salt + nonce + ciphertext).decode('utf-8')

def process_html_files():
    if not os.path.exists(TARGET_DIR):
        print(f"❌ 找不到目录: {TARGET_DIR}")
        return

    for root, _, files in os.walk(TARGET_DIR):
        for file in files:
            if file == "index.html":
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8") as f:
                    soup = BeautifulSoup(f, "html.parser")

                container = soup.find("div", class_="post-html", attrs={"password": True})
                if not container:
                    continue

                password = container['password']
                print(f"🔒 正在全量加密(正文+目录): {file_path}")

                # 1. 加密正文
                content_div = container.find("div", class_="content-to-encrypt")
                if content_div:
                    content_html = "".join([str(x) for x in content_div.contents])
                    container['data-encrypted'] = encrypt_data(password, content_html)
                    content_div.decompose() # 删除明文

                # 2. 加密目录 (在同一个 HTML 页面中全局查找)
                toc_div = soup.find("div", class_="toc-to-encrypt")
                if toc_div:
                    toc_html = "".join([str(x) for x in toc_div.contents])
                    container['data-toc-encrypted'] = encrypt_data(password, toc_html)
                    toc_div.decompose() # 删除明文

                # 3. 抹除明文密码
                del container['password']

                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(str(soup))

if __name__ == "__main__":
    process_html_files()
    print("✅ 处理完成。")