drop table if exists helousers;

create table helousers
(user_id serial primary key,
username varchar(190),
password varchar(180))

insert into helousers(username, password)
values('person', 'mynameisperson')
 

drop table if exists posts;

create table posts(
id serial primary key,
username varchar(190),
user_img text,
post varchar(200))

insert into posts(username, user_img, post)
values('person', 'adsf;lgjadsfl;jg','this is my first post')