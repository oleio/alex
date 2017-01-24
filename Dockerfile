FROM node:0.12
RUN echo "deb http://mirrors.aliyun.com/debian/ jessie main non-free contrib" > /etc/apt/sources.list
RUN echo "deb http://mirrors.aliyun.com/debian/ jessie-proposed-updates main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb-src http://mirrors.aliyun.com/debian/ jessie main non-free contrib" >> /etc/apt/sources.list
RUN echo "deb-src http://mirrors.aliyun.com/debian/ jessie-proposed-updates main non-free contrib" >> /etc/apt/sources.list
RUN apt-get clean && apt-get update && \
    apt-get -y install locales && \
    apt-get -y install default-jdk && \
    apt-get -y install nano
RUN locale-gen C.UTF-8 
ENV LANG C.UTF-8  
ENV LANGUAGE en_US:en  
ENV LC_ALL C.UTF-8
RUN mkdir /alex
WORKDIR /alex
ADD . /alex
RUN npm install
EXPOSE 8001
CMD [ "npm", "start" ]


