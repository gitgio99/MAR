import json

# Redis에서 가져온 JSON 문자열
json_data = "[{\"name\": \"chair\", \"expiration_date\": \"2024-08-07\", \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"refrigerator\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"microwave\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"bottle\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"scissors\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"cup\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"cell phone\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"banana\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"vase\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"apple\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"toilet\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"broccoli\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}, {\"name\": \"person\", \"expiration_date\": null, \"in_fridge_since\": \"2024-08-07\", \"status\": \"stolen\"}]"

# JSON 문자열을 파이썬 객체로 파싱
items = json.loads(json_data)

# 읽기 쉽게 출력
print(json.dumps(items, indent=4))
