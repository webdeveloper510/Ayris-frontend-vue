const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

const getChangedData = (originData, changedData) => {
  let originDataSize = originData.length;
  let changedDataSize = changedData.length;
  let data = {
    changed: false,
    data: null,
  };

  if (changedDataSize && changedDataSize > 0) {
    let tmpData = [];
    changedDataSize -= 1;

    Object.values(originData).map((val) => {
      let isExist = changedData.some((cat) => cat.category === val.category);

      if (isExist === false && changedDataSize !== originDataSize - 1) {
        changedDataSize += 1;
        tmpData.push({
          order: changedDataSize,
          category: val.category,
        });
      }
    });

    data.changed = true;
    data.data = [].concat(JSON.parse(JSON.stringify(changedData)), tmpData);
    // return [].concat(JSON.parse(JSON.stringify(changedData)), tmpData);
  } else {
    data.data = originData;
  }
  return data;
};

export default {
  deleteAllCookies,
  getChangedData,
};
