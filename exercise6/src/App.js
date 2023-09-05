import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  console.log("0 day:", day)
  const prevDay = usePrevious(day);
  console.log("3 prevday:", prevDay)
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  function usePrevious(val) {
    console.log("1 val:", val)
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
      console.log("5 ref.current", ref.current)
    }, [val]);
    console.log("2 ref.current", ref.current)
    return ref.current;
  }
  console.log("4 prevDay:", prevDay)
  useEffect(() => {
    console.log("6 run useEffect")
  })
  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

