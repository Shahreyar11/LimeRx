import json
import numpy as np
from sentence_transformers import SentenceTransformer

# ---------- STEP A: Read your original JSON ----------
with open("../JSON_DATA/advice_young_men.json", "r") as f:
    data = json.load(f)

# ---------- STEP B: Collect text pieces ----------
texts = []
texts.append(data["title"])
texts.append(data["core_message"])
texts.append(data["main_content"])
texts.append(data["takeaway"])

for idea in data["key_ideas"]:
    texts.append(idea)

# ---------- STEP C: Create embeddings ----------
model = SentenceTransformer("all-MiniLM-L6-v2")
embeddings = model.encode(texts)

# ---------- STEP D: SAVE BOTH TEXT + EMBEDDINGS ----------
dataset_to_save = {
    "texts": texts,
    "embeddings": embeddings.tolist()   # <-- IMPORTANT LINE
}

with open("advice_young_men_embeddings.json", "w") as f:
    json.dump(dataset_to_save, f, indent=2)

print("Saved embeddings successfully!")
