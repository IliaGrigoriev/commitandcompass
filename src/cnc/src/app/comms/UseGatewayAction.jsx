// UseGatewayAction.jsx
import { useRef, useState } from 'react';

import GetStatus from './GetStatus.jsx';
import StartJob  from './StartJob.jsx';

export function useGatewayAction() {
  const [state, set] = useState({ status: 'idle' });
  const abortRef = useRef(false);

  async function poll(id, ms = 800) {
    let delay = ms;
    while (!abortRef.current) {
      const s = await GetStatus(id);
      if (s.status === 'done') { set({ status: 'done',   data: s.payload }); return; }
      if (s.status === 'error') { set({ status: 'error', error: s.payload }); return; }
      await new Promise(r => setTimeout(r, delay));
      delay = Math.min(delay * 1.5, 5000);
    }
  }

  return {
    run: async (input) => {
      abortRef.current = false;
      set({ status: 'running' });
      const id = await StartJob(input);
      poll(id);
      return id;
    },
    cancel: () => { abortRef.current = true; set(s => ({ ...s, status: 'idle' })); },
    state,
  };
}
