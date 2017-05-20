import os

import connexion
import redis

r = redis.Redis(host=os.environ['REDIS_HOST'], port=6379)

def test():
    print(r.set('test', 'value'))
    return {"message": r.get('test')}

app = connexion.App(__name__)
app.add_api('rest.yaml')

if __name__ == '__main__':
    # run our standalone gevent server
    app.run(port=8080)
