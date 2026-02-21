import { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyEdgeChanges, applyNodeChanges, type Node, type Edge, type OnNodesChange, type OnEdgesChange, type OnConnect} from '@xyflow/react';
import '@xyflow/react/dist/style.css'

const initialNodes: Node[] = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },
];
const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
 
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );
 return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        >
        <Background />
        <Controls />
        </ReactFlow>
    </div>
  );
}

export default Flow;
