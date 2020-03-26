#!/usr/bin/env python
import json
import datetime

source_file = "../data/raw-data.geojson"
destination_file = "../data/processed-data.geojson"


def main():

    with open(source_file) as in_f:
        data = json.load(in_f)

    for feature in data["features"]:
        props = feature["properties"]
        props["time"] = datetime.datetime.fromtimestamp(
            props["time"] / 1000
        ).isoformat()  # timestamp is in millis

    with open(destination_file, "w") as out_f:
        json.dump(data, out_f)


if __name__ == "__main__":
    main()

    print(f"wrote geojson data (with ISO8601 timestamps) to {destination_file}")
