import React, { useState, useMemo } from 'react';
import Code from '../../shared/Code';
import Layout from '../../shared/Layout';

const computeLongCalc = (min, max) => {
  console.log("calculating...");
  let final = 0;
  for (let i = min; i <= max; i++) final += i;
  return final;
};

const Memo = () => {
  const [count, setCount] = useState(0);
  const longCalc = useMemo(() => computeLongCalc(0, 100000000), []);

  return (
    <Layout title="Hooks: Memo">
      <Code>{`
          // Effect hook syntax
          const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        `}
      </Code>

      <div className="my-5">
        {longCalc}
        <button onClick={() => setCount(count + 1)}>
          {count}
        </button>
      </div>
    </Layout>
  );
}
 
export default Memo;