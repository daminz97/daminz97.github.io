import pandas as pd

csv_path = "data/All.csv"
json_path = "data/alldata.json"
csv_file = pd.DataFrame(pd.read_csv(csv_path, sep = ",", header = 0, index_col = False))
csv_file.to_json(json_path, orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)
