/**
 * 기본
 *
 * 연락처 "010-0000-0000"
 * 가운데 네자리만 *로 만들어서 반환하는 함수
 *
 *
 *
 * 심화
 *
 * 성용은행: 00-00000000-00
 * 사과은행: 00-0000000-000
 *
 * 함수(은행, "123456789000")
 * 반드시 계좌번호는 12글자여야하고 아니면
 * "잘못된 계좌번호입니다"
 *
 * 은행도 반드시 성용은행과 사과은행 중 하나여야하며 아니면
 * "은행을 다시 선택해주세요"
 *
 */

// const encryption = number => {
//     const a = number.split("-");
//     a.splice(1,1,"****");
//     const b = a.join("-")
//     console.log(b)
// }

// encryption("010-1234-5678")

const bankList = [
  { bankName: "성용은행", bankFormat: "00-00000000-00" },
  { bankName: "사과은행", bankFormat: "00-0000000-000" },
  { bankName: "딸기은행", bankFormat: "00-0000-000-0-00" },
  { bankName: "준규은행", bankFormat: "00-0-000-00" },
];

const bankAccount = (bank, account) => {
  const bankInfo = bankList.find((x) => x.bankName === bank);

  if (!bankInfo) return console.log("은행을 다시 입력해주세요");

  if (bankInfo.bankFormat.split("-").join("").length !== account.length)
    return console.log("잘못된 계좌번호입니다");

  let formattedAccount = "";
  let accountIndex = 0;

  for (let i = 0; i < bankInfo.bankFormat.length; i++) {
    if (bankInfo.bankFormat[i] !== "-") {
      formattedAccount += account[accountIndex];
      accountIndex++;
    } else {
      formattedAccount += "-";
    }
  }
  console.log(`${bank} : ${formattedAccount}`);
};

bankAccount("성용은행", "123456789000");
