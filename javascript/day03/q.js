let isEngineOn = false;

const drive = (km) => {
  if (isEngineOn == false) return;
  else {
    for (let i = 0; i <= km; i++) {
      if (km - i === 0) return console.log("주행완료");
      console.log(`${km - i}KM`);
    }
    isEngineOn = false;
  }
};

const engine = (event) => {
  if (isEngineOn == false) isEngineOn = true;
  else {
    isEngineOn = false;
    console.log("시동이 꺼져있습니다");
  }
};

engine();

drive(10);
