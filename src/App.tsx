import React , {useState} from 'react';
import UseStateDemo from './components/useStateDemo';
import UseEffectDemo from './components/useEffectDemo';
import './App.css';
import SuperChild from './components/superChild';
import Parent from './components/parent';
import UseMemoDemo from './components/useMemoDemo';
import RefDemo from './components/refDemo';
import UseRefDemo from './components/useRefDemo';
import ParentComponent from './components/useCallbackDemo/parentComponent';
import UseReducerDemo from './components/useReducerDemo';
import UseLayoutEffectDemo from './components/useLayoutEffectDemo';
import ParentDemo from './components/useContextDemo/parentDemo';
import UseMemoSample from './components/useMemoSample';

function App() {
  const [state,setState] = useState<boolean>(true)
  return (
    <div className="App">
      <button onClick={e => setState(!state)}>Toggle</button>
      {state ? <UseStateDemo/> : ' ' }
      <UseEffectDemo/>
      <Parent/>
      <UseMemoDemo/>
      <RefDemo/>
      <UseRefDemo/>
      <ParentComponent/>
      <UseReducerDemo/>
      <UseLayoutEffectDemo/>
      <ParentDemo/>
      <UseMemoSample/>
    </div>
  );
}

export default App;