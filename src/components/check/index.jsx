import * as CheckBox from "@radix-ui/react-checkbox";
import { CheckCircleFill } from "react-bootstrap-icons";
import "./styles.scss";

function Check({ handle, value }) {
  return (
    <CheckBox.Root
      defaultChecked={value}
      className="CheckboxRoot"
      onCheckedChange={(checked) => handle(checked ? true : false)}
    >
      <CheckBox.Indicator>
        <CheckCircleFill size={18} />
      </CheckBox.Indicator>
    </CheckBox.Root>
  );
}

export default Check;
