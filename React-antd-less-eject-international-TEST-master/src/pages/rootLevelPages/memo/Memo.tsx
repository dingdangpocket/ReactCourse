import { useMemo, useState } from "react";
export default function Memo() {
  const [dataSource, setDataSource] = useState({
    data: [
      [1638288000000, "成都", 28549.0],
      [1646064000000, "成都", 49604.0],
      [1648742400000, "成都", 48764.0],
      [1646064000000, "上海", 33287.0],
      [1648742400000, "上海", 32588.0],
      [1651334400000, "上海", 33694.0],
      [1654012800000, "上海", 98636.0],
      [1638288000000, "深圳", 19371.0],
      [1640966400000, "深圳", 33235.0],
      [1643644800000, "深圳", 28677.0],
      [1651334400000, "成都", 50106.0],
      [1654012800000, "成都", 14564.0],
      [1638288000000, "上海", 19109.0],
      [1640966400000, "上海", 33810.0],
      [1643644800000, "上海", 28850.0],
      [1646064000000, "深圳", 33050.0],
      [1648742400000, "深圳", 32473.0],
      [1651334400000, "深圳", 33913.0],
      [1640966400000, "成都", 50419.0],
      [1643644800000, "成都", 43014.0],
      [1654012800000, "深圳", 97986.0],
    ],
  });
  const memoResult = useMemo(() => {
    if (!dataSource) return;
    const group = dataSource.data.reduce((acc: any, next: any) => {
      let key = next[1];
      !acc[key] ? (acc[key] = [next]) : acc[key].push(next);
      return acc;
    }, {});
    console.log("Group",group);
    return group;
  }, [dataSource]);
  console.log("memoResult", memoResult);

  const memoRes = useMemo(() => {
    if (!dataSource) return;
    return dataSource.data[0];
  }, [dataSource]);
  //  console.log("memoResultTop", memoResultTop);
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: 20,
        fontSize: 15,
      }}
    >
      <button
        style={{
          width: 130,
          height: 40,
          background: "#442176",
          color: "white",
        }}
        onClick={() =>
          setDataSource({
            data: [
              [1638288000000, "前端", 28549.0],
              [1640966400000, "前端", 50419.0],
              [1643644800000, "前端", 43014.0],
              [1646064000000, "前端", 49604.0],
              [1640966400000, "后端", 33810.0],
              [1643644800000, "后端", 28850.0],
              [1646064000000, "后端", 33287.0],
              [1648742400000, "后端", 32588.0],
              [1643644800000, "产品", 28677.0],
              [1646064000000, "产品", 33050.0],
              [1648742400000, "产品", 32473.0],
              [1651334400000, "产品", 33913.0],
              [1654012800000, "产品", 97986.0],
              [1651334400000, "后端", 33694.0],
              [1648742400000, "前端", 48764.0],
              [1651334400000, "前端", 50106.0],
              [1654012800000, "前端", 14564.0],
              [1638288000000, "后端", 19109.0],
              [1654012800000, "后端", 98636.0],
              [1638288000000, "产品", 19371.0],
              [1640966400000, "产品", 33235.0],
            ],
          })
        }
      >
        setDataSource
      </button>
      <div
        style={{
          marginTop: 10,
        }}
      >
        原始数据:{memoRes}
      </div>
      <div>
        {Object.keys(memoResult).map((item, index) => {
          return (
            <div>
              <p style={{ fontSize: 16 }}>{Object.keys(memoResult)[index]}</p>
              <div key={index}> {JSON.stringify(memoResult[item])}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
