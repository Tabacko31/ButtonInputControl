import React from "react";
import { observer } from "mobx-react-lite";
import type { AutocompleteControlVM } from "../model/AutocompleteControlVM";

export const AutocompleteControl: React.FC<{ vm: AutocompleteControlVM }> =
  observer(({ vm }) => (
    <div style={{ position: "relative" }}>
      <input
        style={{ width: "100%", padding: 4, border: "1px solid #ccc" }}
        value={vm.value}
        onChange={(e) => vm.setValue(e.target.value)}
      />

      {vm.suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            margin: 0,
            padding: 0,
            listStyle: "none",
            background: "#fff",
            zIndex: 10,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {vm.suggestions.map((c, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                padding: 4,
                gap: 8,
                cursor: "pointer",
              }}
              onClick={() => vm.select(c)}
            >
              <img src={c.flag} alt="flag" width={20} height={15} />
              <span>
                <strong>{c.name}</strong> — {c.fullName}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));