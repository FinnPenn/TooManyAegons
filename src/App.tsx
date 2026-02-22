import Flow from "./Flow";
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from "@/components/base-node";

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Flow/>
    </div>
  );
}