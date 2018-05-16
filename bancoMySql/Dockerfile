FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD p@ssword
ENV MYSQL_DATABASE msFeatureFlag
ENV MYSQL_USER userDataBase
ENV MYSQL_PASSWORD passDataBase

ADD setup.sql /docker-entrypoint-initdb.d
