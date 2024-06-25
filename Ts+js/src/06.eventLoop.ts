function infiniteTasks() {
  queueMicrotask(() => {
    infiniteTasks();
  });
}

// infiniteTasks();
