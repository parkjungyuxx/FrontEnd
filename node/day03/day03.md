
서버 생성, 실행

express
node 환경에서는 http 모듈을 제공, 서버를 구축하는데 사용하는 모듈
http 만으로 서버를 구축하려고 보니까 불편함 -> 서버를 구축하기 쉽도록 확장 프로그램, 편의 함수들 제공
npm i express

sequelize (orm)
객체 관계형DB를 맵핑한다
관게형 DB를 SQL 없이 객체 형태로 사용가능하게 한 것, 생산성이 굉장히 좋습니다.

1. 모든 SQL을 지원하는 것은 아니다 (부분적인 지원)
2. 완벽한 것은 아니다 (비효율성)
npm i sequelize sequelize-cli

package.json을 생성하고, node_modules 폴더를 만드는 것
(npx init)

-------------------------------------------------

DATABASE 연결

npx sequelize init

config - 설정 (db 연결정보)

dbbase 서버 주소: localhosst
dbbase 서버 포트: 3306
dbbase 계정: root
dbbase 비밀번호: 12345678

-------------------------------------------------

migrations - (변경 사항에 대한 코드)
models - (테이블 정의)
seeders - (기초 파일, 데이터)

-------------------------------------------------

로그인, 회원가입




```
import dbConfig from '../config/config.json'

const config = dbConfig['development']
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
) 
// db 연결 준비 끝

const db = {}
// 테이블 정의한 model이 들어가는 공간

```

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
// 테이블 간의 관계를 정의

db.sequelize = sequelize;
db.Sequelize = sequelize;