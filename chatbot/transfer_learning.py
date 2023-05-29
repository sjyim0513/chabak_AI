import openai
import os
from dotenv import load_dotenv

# OpenAI API 인증 정보 설정
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")


# 데이터셋 업로드
response = openai.Dataset.create(
    name="transfer_learning_01",
    data="test_data_prepared(2).jsonl",
    description="first"
)

print(response)