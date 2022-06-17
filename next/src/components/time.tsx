import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { getMain } from "../model";


export const Time = observer(() => {

  const main = getMain();

  const handleClick = () => {
    runInAction(() => {
      main.data.checkout.time = new Date().getTime().toString();
    })
  }

  return (
    <div onClick={handleClick}>
      <h1>{ main.data.checkout.title }</h1>
      <span>{ main.data.checkout.time } click me </span>
    </div>
  )
});