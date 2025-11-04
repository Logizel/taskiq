import { useEffect, useState } from "react";
import { getExampleData } from "./api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getExampleData().then(setData);
  }, []);

  return (
    <div>
      <h1>TaskIQ Frontend Connected!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
