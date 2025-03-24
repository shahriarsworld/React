import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // useEffect with no dependencies (runs after every render)
  useEffect(() => {
    console.log('Component rendered or re-rendered');
    
    // Cleanup function (runs before the next effect or on unmount)
    return () => {
      console.log('Cleanup from the previous effect');
    };
  });

  // useEffect with empty dependency array (runs only once after initial render)
  useEffect(() => {
    console.log('This runs only once when component mounts');
    
    // Simulate API call
    setTimeout(() => {
      setData('Fetched data');
    }, 1000);

    // Cleanup function for component unmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // useEffect with dependencies (runs when dependencies change)
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {data && <p>Data: {data}</p>}
    </div>
  );
}

export default ExampleComponent;
