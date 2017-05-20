From python:3.6-alpine 
MAINTAINER Roland Urbano <urbano.roland@gmail.com>

RUN pip3 install --upgrade pip 

RUN mkdir /app

COPY requirements.txt /app
RUN pip3 install -r /app/requirements.txt

COPY app.py /app
COPY rest.yaml /app

EXPOSE 8080

WORKDIR /app
#ENTRYPOINT ["/bin/sh"]
ENTRYPOINT ["python3", "app.py"]
