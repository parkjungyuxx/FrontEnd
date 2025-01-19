
---

모델링 (개념 -> 논리 -> 물리)

개념 모델링 (엔티티를 정의) <br>
User, Post

Users,
- userId(email) varchar2(500) notnull unique
- password varchar2(500) notnull


Posts
- title varchar2(1000) notnull
- content varchar2(10000) || 제한이 없어도 된다고 생각이되면 text 
- createdAt DATETIME (YYYY-MM-DD HH:MM:ss) 2025-01-09 11:51:32
- updatedAt TIMESTAMP 유닉스타임 2025-01-09 11:51:32 UTC + 09
- user.id

----
Entity 정의
User Post 1:N
(1명의 사용자가 여러개의 게시글 작성가능)




----

테이블 생성 (user, products)
테이블, 엔티티를 표 형태로 만들어서 조회하고 찾아보기 쉽게 만드는 것
create table dn_users (
    user_id bigint primary key auto increment,
    user_email  varchar2(100) not null unique,
    user_pw varchar2(100),
    createdAt datetime default current_timestamp
)


----