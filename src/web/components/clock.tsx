import React, {useState, ReactElement} from 'react'

function Clock(): ReactElement {
  const date = new Date();
  const [time, setTime] = useState<any>(date.toLocaleTimeString());


  return (
    <div>
      {time}
    </div>
  )

}


export default Clock