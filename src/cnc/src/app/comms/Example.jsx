// Widget.jsx
import { useGatewayAction } from './UseGatewayAction';

export default function Widget() {
  const { run, state, cancel } = useGatewayAction();

  return (
    <div>
      <button onClick={() => run({ foo: 1 })}>Start</button>
      {state.status === 'running' && <button onClick={cancel}>Cancel</button>}
      {state.status === 'done' && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
      {state.status === 'error' && <pre>{JSON.stringify(state.error, null, 2)}</pre>}
    </div>
  );
}
