import kinto_http
# client = kinto_http.Client(server_url="http://localhost:8888/v1")
client = kinto_http.Client(server_url="http://45.33.110.251:8888/v1")
# client = kinto_http.Client(server_url="https://kinto.mozvoice.org/v1")
language = "en"
collection = "Sentences_Meta_" + language
print("Starting calls..");
for page in client.get_paginated_records(bucket="App", collection=collection):
  print(len(page["data"]));