import openai
from dotenv import load_dotenv

load_dotenv()
# OpenAI API 인증 설정
openai.api_key = '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'

# Fine-tuned 모델의 목록 가져오기
fine_tuned_models = openai.FineTune.list()

print(fine_tuned_models) 