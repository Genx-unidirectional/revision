"use strict";
function infiniteTasks() {
    queueMicrotask(() => {
        infiniteTasks();
    });
}
// infiniteTasks();
