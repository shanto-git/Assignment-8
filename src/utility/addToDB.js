const getStoredApp = () => {
  const storedApp = localStorage.getItem("Installation");
  if (storedApp) {
    return JSON.parse(storedApp);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();
  if (!storedAppData.includes(id)) {
    storedAppData.push(id);
    localStorage.setItem("Installation", JSON.stringify(storedAppData));
  }
  
};

const removeStoredDB = (id) => {
  const storedAppData = getStoredApp();
  const updated = storedAppData.filter(appId => appId !== id);
  localStorage.setItem("Installation", JSON.stringify(updated));
};

export { addToStoredDB, getStoredApp, removeStoredDB };
