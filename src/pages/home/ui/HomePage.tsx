import React, { useState } from "react";
import { ButtonInputControl } from "../../../features/button-input/ui/ButtonInputControl";
import { ButtonInputControlVM } from  "../../../features/button-input/model/ButtonInputControlVM";
import { AutocompleteControl } from "../../../features/button-input/ui/AutocompleteControl";
import { AutocompleteControlVM } from  "../../../features/button-input/model/AutocompleteControlVM";

export const HomePage: React.FC = () => {
 
  const [vm1] = useState(() => {
    const vm = new ButtonInputControlVM();
    vm.rightButtons = [
      { label: "Clear", onClick: () => vm.setValue("") },
      { label: "Hello", onClick: () => vm.setValue("Hello world!") },
    ];
    return vm;
  });

 
  const [vm2] = useState(() => {
    const vm = new ButtonInputControlVM();
    vm.leftButtons = [
      {
        label: "Check number",
        onClick: () => {
          if (!isNaN(Number(vm.value)) && vm.value.trim() !== "") {
            alert(vm.value);
          }
        },
      },
    ];
    vm.rightButtons = [{ label: "Show", onClick: () => alert(vm.value) }];
    return vm;
  });


  const [auto3] = useState(() => new AutocompleteControlVM(3));
  const [auto10] = useState(() => new AutocompleteControlVM(10));

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <h2>Button controls</h2>
      <ButtonInputControl vm={vm1} />
      <ButtonInputControl vm={vm2} />

      <h2>Autocomplete controls</h2>
      <AutocompleteControl vm={auto3} />
      <AutocompleteControl vm={auto10} />
    </div>
  );
};