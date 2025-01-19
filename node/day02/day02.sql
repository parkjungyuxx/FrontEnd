create database postify;
/* 
users, posts
drop database postify = 데이터베이스 삭제use
*/

use postify;
-- 여러개의 DB중에 postify DB를 사용하겠다는 명령어 --

create table dn_users (
    user_id bigint primary key auto_increment,
    user_email varchar(100) not null unique,
    user_pw varchar(100),
    createdAt datetime default current_timestamp
);

-- drop table dn_users 테이블 제거 --

alter table dn_users modify column user_pw varchar(100) not null;
-- 주의사항 : 이미 데이터가 존재하고 있다면 해당 데이터가 자료형과 일치하지 않으면 에러 --

select * from dn_users;

insert into dn_users (user_email, user_pw) values ("exmaple@example.com", "1234");
-- 회원 가입 -- 

update dn_users set user_email = 'parkjungyu@example.com' where user_id = 1;
-- 회원 정보 수정 --

select user_email from dn_users;
-- 회원 상세 정보 --
select * from dn_users where user_id >= 1 limit 10; -- 회원 조회 --
select * from dn_users where user_id >= 1 limit 10 offset 20; -- 페이지 네이션 --
select * from dn_users order by createdAt ASC; -- 오름차순 --
select * from dn_users order by createdAt DESC; -- 내림차순 --

delete from dn_users where user_id = 1; -- 회원 탈퇴 --

create table dn_posts (
	post_id bigint primary key auto_increment,
    title varchar(1000) not null,
    content text,
    createdAt dateTime default current_timestamp, 
    user_id bigint,
    constraint fk_users foreign key (user_id) references dn_users(user_id)
);

insert into dn_posts (title, content, user_id) values ("example", "content", 2);

select * from dn_posts;
-- 게시글 CRUD -- 

/*
innerjoin -  두 테이블에서 일치하는 데이터만 조회
leftjoin - 일치하지 않아도 모든 데이터를 조회
*/

select p.user_id as post_user_id, u.user_id as u from dn_posts as p inner join dn_users as u on u.user_id = p.user_id;

-- 원래라면 2번의 조회해야하는 것을 join을 한번의 조회로 빠르게 가져올 수 있다 --
