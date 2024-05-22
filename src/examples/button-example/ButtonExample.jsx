import { Button } from "monday-ui-react-core"
import mondaySdk from 'monday-sdk-js';

const monday = mondaySdk();

const ButtonExample = (props) => {
  return (
    <Button onClick={function showToast() {
      monday.execute('notice', {
        message: "Button was clicked!",
        type: "success",
        timeout: 5000,
      })
    }}>
      Button
    </Button>
  )
}

export default ButtonExample;
