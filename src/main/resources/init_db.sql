CREATE DATABASE IF NOT EXISTS viki_db;
CREATE USER 'viki' identified by 'v1ki';
grant all on viki_db.* to 'viki';
commit;
