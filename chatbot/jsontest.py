import jsonlines

with jsonlines.open("duplicate.jsonl") as f:
    for line in f.iter():
        print(line["prompt"]) # 각 json에 해당하는 "id" 출력
        print(line["completion"]) # 각 json에 해당하는 "title" 출력