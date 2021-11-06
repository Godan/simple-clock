import React, {useState, ReactElement} from 'react'

function Clock(): ReactElement {
  let date: Date = new Date();
  const [time, setTime] = useState<any>(date.toLocaleTimeString());

  const intervalMs = 100;
 
  React.useEffect(() => {
      const intervalId = setInterval(() => {
        date = new Date();
        setTime(date.toLocaleTimeString())
      }, intervalMs);
      return () => {
        clearInterval(intervalId)
      };
  }, []);
  return (
    <div className="clock">
      {time}
    </div>
  )

}


export default Clock