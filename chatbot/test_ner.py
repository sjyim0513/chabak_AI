import spacy
import os
from dotenv import load_dotenv
from konlpy.tag import *

load_dotenv()

hannanum = Hannanum()
kkma = Kkma()
komoran = Komoran()
okt = Okt()

#한국어 형태소 분석
def preprocess_text(text):
    # 형태소 모델 사용
    morphs = komoran.morphs(text)
    
    #리스트를 문자열로 수정
    return ' '.join(morphs)

# 저장된 모델 로드
model_path = os.getenv('NER_MODEL_PATH')
#nlp = spacy.load(model_path)
trained_ner = spacy.load(model_path)

input_text = "별 보며 힐링하기 좋은 차박지"

#형태소 함수 실행
text = preprocess_text(input_text)
print(f'text: {text}')

#ner 실행

doc2 = trained_ner(text)

#ner 출력
for ent in doc2.ents:
    print(ent.text, ent.label_)
# Access the named entities
