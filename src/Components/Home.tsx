import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Store/store'
import { increment } from '../Slice/homeSlice';

function Home() {
  let temp = useSelector((state:RootState) => state.home.counter);
  const dispatch: AppDispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increment(2));
  
  }
  return (<>
    <div>Home ---- {temp.toString()}</div>
    <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default Home