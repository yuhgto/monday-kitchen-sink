export const codeExamples = {
  AttentionBox: {
    code: `import { useState, useEffect } from "react";
import mondaySdk from 'monday-sdk-js';
import { AttentionBox } from "monday-ui-react-core";

const monday = mondaySdk();

const AttentionBoxLayout = (props) => {
  const [context, setContext] = useState();
  useEffect(() => {
    monday.listen('context', (res) => {
      setContext(res.data);
    })
  }, [])

  const attentionBoxText = \`Welcome! Your user ID is \${context ? context.user.id : 'loading...'}\`

  return (<AttentionBox
              title="Hello Monday Apps!"
              text={attentionBoxText}
              type="success"
            />)
}

export default AttentionBoxLayout;
`,
  },
  Button: {
    code: `import { Button } from "monday-ui-react-core"
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
    `,
  },
};
