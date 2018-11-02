#coding=utf-8

import requests
import logging


# 全局配置
REPORTER_AUTH_TOKEN = None
REPORTER_AUTH_URL = "http://api.goolya.cn/api/core/pub/auth"
REPORTER_PUSH_URL = "http://api.goolya.cn/api/core/pub/assess"

logger = logging.getLogger("django")

def reset_token():
    global REPORTER_AUTH_TOKEN
    try:
        resp = requests.post(REPORTER_AUTH_URL,
                            json={"app_key": "b1916f88b58e11e887a728c2dd28288a",
                                 "app_secret": "8b92c9b6bc7611e8bc1f28c2dd28288a8b92c9b7bc7611e8bebf28c2dd28288a"}
                            )
        REPORTER_AUTH_TOKEN = resp.json().get("data", {}).get("token")
    except Exception as e:
        logger.error(e)


def report(data):
    if not REPORTER_AUTH_TOKEN:
        reset_token()
    try:
        resp = requests.post(REPORTER_PUSH_URL, json=data,
                             headers={"Content-Type": "application/json", "Authorization": REPORTER_AUTH_TOKEN}
                             )
        if not resp.text:
            # 按照token过期处理
            reset_token()
            resp = requests.post("http://api.goolya.cn/api/core/pub/assess", json=data,
                                 headers={"Content-Type": "application/json", "Authorization": REPORTER_AUTH_TOKEN}
                                 )
        result = resp.json()
        logger.error(data)
        logger.error(result)
        assert result.get("status", 0) == 1, "返回报告出错"
        return result.get("data")
    except Exception as e:
        logger.error(e)


# 测试数据
if __name__ == "__main__":
    data = {
            "assess_serial": "序列号",
            "scale_code": "A001",
            "gender": "男",
            "scale_answers": [
                {"question_id": "001000001", "answer": "A"}, {"question_id": "001000002", "answer": "B"}, {"question_id": "001000003", "answer": "A"}, {"question_id": "001000004", "answer": "A"},
                {"question_id": "001000005", "answer": "B"}, {"question_id": "001000006", "answer": "B"}, {"question_id": "001000007", "answer": "A"}, {"question_id": "001000008", "answer": "B"}
                ]
            }
    print(report(data))
