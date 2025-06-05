import React from "react";
import { observer } from "mobx-react-lite";
import { ButtonInputControlVM } from "../model/ButtonInputControlVM";

export const ButtonInputControl: React.FC<{ vm: ButtonInputControlVM }> =
  observer(({ vm }) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {vm.leftButtons.map((b, i) => (
          <button key={`l${i}`} onClick={b.onClick}>
            {b.label}
          </button>
        ))}

        <input
          style={{ flex: 1, padding: 4, border: "1px solid #ccc" }}
          value={vm.value}
          onChange={(e) => vm.setValue(e.target.value)}
        />

        {vm.rightButtons.map((b, i) => (
          <button key={`r${i}`} onClick={b.onClick}>
            {b.label}
          </button>
        ))}
      </div>
    );
  });