import { Container, CopyMessage } from "./styles";

import { useRef, useState } from "react";

export function CopyInput({ icon: Icon, ...rest }) {
  const [copied, setCopied] = useState(false);

  let textToCopy;
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    textAreaRef.current.select();

    document.execCommand("copy");

    window.getSelection().removeAllRanges();
    setCopied(true);
  };

  return (
    <Container {...rest}>
      <div className="input-wrapper">
        <input
          onClick={copyToClipboard}
          ref={textAreaRef}
          value={textToCopy}
          readOnly
          {...rest}
        />
        <button>{Icon && <Icon size={20} />}</button>
      </div>
      {copied && <CopyMessage>URL copiada</CopyMessage>}
    </Container>
  );
}
