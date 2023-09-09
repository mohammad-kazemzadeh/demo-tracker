FROM mysql:latest


HEALTHCHECK --interval=5s --timeout=30s \
  CMD mysqladmin ping -h localhost

ENV MYSQL_ROOT_PASSWORD=passbackendtrackerword
ENV MYSQL_DATABASE=demo_tracker_mysql

EXPOSE 3306

CMD ["mysqld"]
