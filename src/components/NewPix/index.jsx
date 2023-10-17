import { useState } from "react";
import { FiCopy } from "react-icons/fi";

import { CopyInput } from "../CopyInput";
import QRCode from "../../assets/qrcode.svg";

import { Container } from "./styles";

export function NewPix() {
  return (
    <Container>
      <div className="qrcode-wrapper">
        <img src={QRCode} alt="QRCode de shuharib0t no github" />

        <span>*QRCode ilustrativo</span>
      </div>

      <CopyInput value="https://github.com/shuharib0t" icon={FiCopy} />
    </Container>
  );
}
