// export default function Counter() {
//     let count =0;

//     function increment() {
//         count++;
//         console.log(count);
//     }

//     return (

//         <div>
//             <h3>Count={count}</h3>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// }

import { useState } from 'react';

export default function Counter() {
    
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount((currcount)=>{
            return currcount + 1;
        });
         setCount((currcount)=>{
            return currcount + 1;
        });
    }

    return (

        <div>
           <h3>Count={count}</h3>
             <button onClick={increment}>Increment</button>
        </div>
    );
}