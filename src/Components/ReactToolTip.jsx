
import { Tooltip } from 'react-tooltip';

const ReactToolTip = () => {
    return (
        <div>
            

<a
  data-tooltip-id="my-tooltip-multiline"
  data-tooltip-html="Hello<br />some stuff in between<br />world!"
>
  This is a Tool Tip
</a>
<Tooltip id="my-tooltip-multiline" />
        </div>
    );
};

export default ReactToolTip;