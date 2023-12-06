import { Input } from "@chakra-ui/react";

export default function MyInput({ label, placeholder, type, name }) {
  return (
    <div id="input-container">
      <label className="text-lg">{label ?? ""}</label>
      <Input size={"sm"} name={name ?? undefined} type={type ?? "text"} placeholder={placeholder ?? ""} variant="flushed" borderBottomWidth={"revert"} borderBottomColor={"third"} focusBorderColor="third" />
    </div>
  );
}
