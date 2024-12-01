export async function setupMockApiWorker(): Promise<void> {
  let { worker } = await import('./browser');

  worker.start();

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./browser', async () => {
      if (worker) {
        worker.stop();
        worker = null;
      }

      worker = (await import('./browser')).worker;

      worker.start();
    });
  }
}
