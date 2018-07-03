#!/bin/bash

curl "http://localhost:4741/goals/${ID}" \
  --include \
  --request DELETE \

echo
