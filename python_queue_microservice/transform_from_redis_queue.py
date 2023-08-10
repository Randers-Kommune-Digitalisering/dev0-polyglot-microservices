import json
import redis
import time

def transform(data):
    # Return the input data unchanged
    return data

# Connect to the Redis server using the correct hostname
r = redis.Redis(host='redis_microservice')

# Subscribe to the "data" topic
p = r.pubsub()
p.subscribe('data')

# Listen for new messages
while True:
    # Get a new message if one is available
    message = p.get_message()
    
    # If no message is available, sleep for a short time and try again
    if not message:
        time.sleep(0.001)
        continue

    # Ignore non-data messages
    if message['type'] != 'message':
        continue
    
    # Transform the data and Return the transformed data on the "results" topic
    r.publish('results', json.dumps(transform(message['data'])))
