export default function TypeScript() {
  //基本类型；
  let str: string = "Dingdang";
  let num: number = 24;
  let bool: boolean = false;
  let u: undefined = undefined;
  let n: null = null;
  let obj: object = { x: 1 };
  let sym: symbol = Symbol("me");
  let k: any = null;

  //数组约束；
  let strArr: string[] = ["1", "2"];
  let strArrT: Array<string> = ["1", "2"];
  let arrUnit: (number | string)[];
  arrUnit = [1, "b", 2, "c"];

  interface ArrInf {
    name: string;
    age: number;
  }
  let arrInf: ArrInf[] = [{ name: "Dingdang", age: 2 }];
  const pushSomething = (array: string[], ...items: number[]) => {
    items.forEach(function (item) {
      console.log("item", item);
    });
  };
  let params = ["1"];
  pushSomething(params, 1, 2, 3);

  let arraySet: [string, number];
  arraySet = ["hello", 10];
  type Point = [number, number?, number?];
  const x: Point = [10];
  const xy: Point = [10, 20];
  const xyz: Point = [10, 20, 10];
  console.log(x.length);
  console.log(xy.length);
  console.log(xyz.length);

  type RestTupleType = [number, ...string[]];
  let restTuple: RestTupleType = [666, "Semlinker", "Kakuqo", "Lolo"];
  console.log(restTuple[0]);
  console.log(restTuple[1]);

  const point: readonly [number, number] = [10, 20];

  //字面量类型；
  type Direction = "up" | "down";
  function move(dir: Direction) {}
  move("up");
  move("down");

  //接口集成；
  interface UploadEvent {
    type: "upload";
    filename: string;
    contents: string;
  }
  interface DownloadEvent {
    type: "download";
    filename: string;
  }
  type AppEvent = UploadEvent | DownloadEvent;
  function handleEvent(Event: AppEvent) {
    switch (Event.type) {
      case "download":
        console.log(Event);
        break;
      case "upload":
        console.log(Event);
        break;
    }
  }
  handleEvent({ type: "upload", filename: "TEXT", contents: "CONTENT" });
  handleEvent({ type: "download", filename: "TEXT" });

  //类型联合；
  type IntersectionType = { id: number; name: string } & { age: number };
  const mixed: IntersectionType = {
    id: 1,
    name: "name",
    age: 18,
  };

  //Never;
  type Foo = string | number;
  const stringCase = () => {};
  const numberCase = () => {};
  const controlFlowAnalysisWithNever = (foo: Foo) => {
    if (typeof foo === "string") {
      stringCase();
    } else if (typeof foo === "number") {
      numberCase();
    } else {
      const check: never = foo;
    }
  };
  controlFlowAnalysisWithNever(1);
  //按输入类型处理逻辑;

  //unknown
  const getName = () => {
    return "Dingdang";
  };
  const target: unknown = { name: getName, country: "china" };
  //非稳定类型，提示开发者；
  // target.name();
  return <div>TypeScript</div>;
}
